import vectorIcon1 from "../../assets/icons/Vector (1).svg";

const SelectGuestCount = ({ onChange }) => {
    return (
        <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
                <img src={vectorIcon1} alt="" />
                <select
                    onChange={onChange}
                    className="outline-none px-2 py-2 w-full"
                    name="guests"
                    id="lws-guests"
                    required
                >
                    <option value hidden>
                        Please Select
                    </option>
                    <option value={1}>1 Person</option>
                    <option value={2}>2 Persons</option>
                    <option value={3}>3 Persons</option>
                    <option value={4}>4 Persons</option>
                </select>
            </div>
        </div>
    );
};

export default SelectGuestCount;
