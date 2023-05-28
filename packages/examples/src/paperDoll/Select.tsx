import CSS from "csstype";

interface SelectProps {
    label: string;
    options: string[];
    onChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ label, options, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    const selectStyles: CSS.Properties = {
        display: 'block',
        marginTop: '10px',
        width: '150px', // fixed width
        textAlign: 'left', // left align
    };

    const labelStyles: CSS.Properties = {
        display: 'block',
        marginBottom: '5px',
        textAlign: 'left', // left align
    };

    return (
        <div>
            <label style={labelStyles}>{label}</label>
            <select style={selectStyles} onChange={handleChange}>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};
