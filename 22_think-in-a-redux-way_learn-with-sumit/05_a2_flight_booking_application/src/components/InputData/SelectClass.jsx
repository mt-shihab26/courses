import vectorIcon3 from "../../assets/icons/Vector (3).svg";

const SelectClass = ({ onChange }) => {
    return (
        <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
                <img src={vectorIcon3} alt="" />
                <select
                    onChange={onChange}
                    className="outline-none px-2 py-2 w-full"
                    name="ticketClass"
                    id="lws-ticketClass"
                    required
                >
                    <option value hidden>
                        Please Select
                    </option>
                    <option>Business</option>
                    <option>Economy</option>
                </select>
            </div>
        </div>
    );
};

export default SelectClass;
