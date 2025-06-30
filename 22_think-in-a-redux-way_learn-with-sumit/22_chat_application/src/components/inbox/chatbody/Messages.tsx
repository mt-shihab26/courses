import { useAppSelector } from "../../../app/hooks";
import { TMessage } from "../../../features/messages/messagesTypes";
import Message from "./Message";

const Messages = ({ messages }: { messages: TMessage[] }) => {
    const {
        user: { email },
    } = useAppSelector(state => state.auth);

    return (
        <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
            <ul className="space-y-2">
                {messages
                    .slice()
                    .sort((a, b) => a.timestamp - b.timestamp)
                    .map(item => (
                        <Message
                            key={item.id}
                            justify={
                                item.sender.email === email ? "end" : "start"
                            }
                            message={item.message}
                        />
                    ))}
            </ul>
        </div>
    );
};

export default Messages;
