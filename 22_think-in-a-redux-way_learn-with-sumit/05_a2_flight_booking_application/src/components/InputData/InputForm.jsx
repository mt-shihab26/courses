import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFlightBookAction } from "../../redux/flightBooks/flightBooksActions";
import Button from "./Button";
import SelectClass from "./SelectClass";
import SelectDate from "./SelectDate";
import SelectGuestCount from "./SelectGuestCount";
import SelectInput from "./SelectInput";

const InputForm = () => {
    const dispatch = useDispatch();
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [personCount, setPersonCount] = useState(0);
    const [flightClass, setFlightClass] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // console.log("Submitted", from, to, date, personCount, flightClass);
        dispatch(addFlightBookAction(from, to, date, personCount, flightClass));
    };

    const DestinationOptions = ["Dhaka", "Sylhet", "Saidpur", "Cox's Bazar"];

    return (
        <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
            {/* From */}
            <SelectInput
                title="Destination From"
                name="from"
                id="lws-from"
                optionList={DestinationOptions}
                onChange={e => setFrom(e.target.value)}
            />
            {/* To */}
            <SelectInput
                title="Destination To"
                name="to"
                id="lws-to"
                optionList={DestinationOptions}
                onChange={e => setTo(e.target.value)}
            />
            <SelectDate onChange={e => setDate(e.target.value)} />
            <SelectGuestCount onChange={e => setPersonCount(e.target.value)} />
            <SelectClass onChange={e => setFlightClass(e.target.value)} />
            <Button />
        </form>
    );
};

export default InputForm;
