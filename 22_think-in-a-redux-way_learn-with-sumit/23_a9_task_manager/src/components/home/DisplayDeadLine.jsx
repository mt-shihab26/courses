import moment from "moment";

const DisplayDeadLine = ({ deadline }) => {
    const dateObj = moment(deadline);
    const date = dateObj.format("DD");
    const monthName = dateObj.format("MMMM");
    return (
        <div className="flex items-center gap-2 text-slate">
            <h2 className="lws-date">{date}</h2>
            <h4 className="lws-month">{monthName}</h4>
        </div>
    );
};

export default DisplayDeadLine;
