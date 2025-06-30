import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../../../features/messages/messagesApi";
import Blank from "./Blank";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";

export default function ChatBody() {
    const { id } = useParams();
    const {
        data: messages,
        isLoading,
        isError,
        error,
    } = useGetMessagesQuery(Number(id));

    const error2: any = error;

    return (
        <div className="w-full lg:col-span-2 lg:block">
            <div className="w-full grid conversation-row-grid">
                {isLoading ? (
                    <>Loading...</>
                ) : isError ? (
                    <>{error2?.error}</>
                ) : !messages || messages?.length === 0 ? (
                    <Blank />
                ) : (
                    <>
                        <ChatHead message={messages[0]} />
                        <Messages messages={messages} />
                        <Options message={messages[0]} />
                    </>
                )}
            </div>
        </div>
    );
}
