import frameIcon from "../../assets/icons/Frame.svg";

const SelectInput = ({ title, optionList, name, id, onChange }) => {
    return (
        <div className="des-from">
            <p>{title}</p>
            <div className="flex flex-row">
                <img src={frameIcon} alt="" />
                <select
                    className="outline-none px-2 py-2 w-full"
                    name={name}
                    id={id}
                    onChange={onChange}
                    required
                >
                    <option value hidden>
                        Please Select
                    </option>
                    {optionList.map((op, i) => (
                        <option key={i} value={op}>
                            {op}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SelectInput;
