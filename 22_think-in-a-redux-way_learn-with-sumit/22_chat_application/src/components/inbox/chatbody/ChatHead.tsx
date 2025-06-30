import { useAppSelector } from "../../../app/hooks";
import { TMessage } from "../../../features/messages/messagesTypes";
import gravatarUrl from "gravatar-url";

type Props = {
    message: TMessage;
};

const ChatHead = ({ message }: Props) => {
    const {
        user: { email },
    } = useAppSelector(state => state.auth);

    const partner =
        message.sender.email === email ? message.receiver : message.sender;

    return (
        <div className="relative flex items-center p-3 border-b border-gray-300">
            <img
                className="object-cover w-10 h-10 rounded-full"
                src={gravatarUrl(partner.email, { size: 80 })}
                alt={partner.name}
            />
            <span className="block ml-2 font-bold text-gray-600">
                {partner.name}
            </span>
        </div>
    );
};

export default ChatHead;
