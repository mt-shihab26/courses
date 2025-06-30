import { FC } from "react";

const Answers: FC = () => {
    const quiz = [
        { text: "A New Hope 1", id: "option1" },
        { text: "A New Hope 2", id: "option2" },
        { text: "A New Hope 3", id: "option3" },
        { text: "A New Hope 4", id: "option4" },
        { text: "A New Hope 5", id: "option5" },
        { text: "A New Hope 6", id: "option6" },
        { text: "A New Hope 7", id: "option7" },
        { text: "A New Hope 8", id: "option8" },
        { text: "A New Hope 9", id: "option9" },
        { text: "A New Hope 10", id: "option10" },
    ];
    return (
        <div className="answers">
            {quiz.map(q => (
                <label className="answer" htmlFor={q.id}>
                    <input type="checkbox" id={q.id} />
                    {q.text}
                </label>
            ))}
        </div>
    );
};

export default Answers;
