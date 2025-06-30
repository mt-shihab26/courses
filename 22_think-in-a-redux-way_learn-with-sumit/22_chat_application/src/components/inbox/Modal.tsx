import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import conversionsApi, {
    useAddConversionMutation,
    useEditConversionMutation,
} from "../../features/conversations/conversationsApi";
import { TConversation } from "../../features/conversations/conversationsTypes";
import { useGetUserQuery } from "../../features/users/usersApi";
import { isValidEmail } from "../../utils/func";
import Error from "../ui/Error";

type Props = {
    open: boolean;
    control: () => void;
};

const Modal = ({ open, control }: Props) => {
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [userCheck, setUserCheck] = useState(false);
    const [error, setError] = useState("");
    const [conversation, setConversation] = useState<
        TConversation[] | undefined
    >(undefined);

    const user = useAppSelector(state => state.auth).user;
    const { email: loggedEmail } = user;

    const { data: participant } = useGetUserQuery(email, { skip: !userCheck });

    const [addConversation, { isSuccess: isAddConversationSuccess }] =
        useAddConversionMutation();
    const [editConversation, { isSuccess: isEditConversationSuccess }] =
        useEditConversionMutation();

    const handleEmailChange = (() => {
        let timeoutId: number;
        return (e: ChangeEvent<HTMLInputElement>) => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                if (isValidEmail(e.target.value)) {
                    setConversation(undefined);
                    setUserCheck(true);
                    setEmail(e.target.value);
                }
            }, 500);
        };
    })();

    useEffect(() => {
        const doFunc = async () => {
            if (
                participant &&
                participant.length > 0 &&
                participant[0].email !== loggedEmail
            ) {
                try {
                    const data = await dispatch(
                        conversionsApi.endpoints.getConversion.initiate({
                            userEmail: loggedEmail,
                            participantsEmail: email,
                        })
                    ).unwrap();
                    setConversation(data);
                } catch (err: any) {
                    setError(err.message);
                }
            }
        };
        doFunc();
    }, [participant]);

    useEffect(() => {
        if (isAddConversationSuccess || isEditConversationSuccess) {
            control();
        }
    }, [isAddConversationSuccess, isEditConversationSuccess]);

    const handleSubmit = async () => {
        if (!conversation) return;
        if (!participant) return;
        if (conversation?.length > 0) {
            editConversation({
                id: conversation[0].id,
                body: {
                    message,
                    timestamp: new Date().getTime(),
                    sender: user,
                    receiver: participant[0],
                },
                sender: loggedEmail,
            });
        } else if (conversation?.length === 0) {
            addConversation({
                sender: loggedEmail,
                data: {
                    participants: `${loggedEmail}-${participant[0].email}`,
                    users: [user, participant[0]],
                    message,
                    timestamp: new Date().getTime(),
                },
            });
        }
    };

    return (
        <>
            {open && (
                <>
                    <div
                        onClick={control}
                        className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
                    ></div>
                    <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Send message
                        </h2>
                        <form
                            className="mt-8 space-y-6"
                            onSubmit={e => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <input
                                        onChange={handleEmailChange}
                                        id="to"
                                        name="to"
                                        type="email"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                        placeholder="Send to"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        value={message}
                                        onChange={e =>
                                            setMessage(e.target.value)
                                        }
                                        id="message"
                                        name="message"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                        placeholder="Message"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    disabled={conversation === undefined}
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                                >
                                    Send Message
                                </button>
                            </div>

                            {participant?.length === 0 && (
                                <Error message="User not exits" />
                            )}
                            {participant &&
                                participant.length > 0 &&
                                participant[0].email === loggedEmail && (
                                    <Error message="You can't send email yourself" />
                                )}
                        </form>
                    </div>
                </>
            )}
        </>
    );
};

export default Modal;
