import React, { useState } from "react";
import CSS from "csstype";

interface ClothingSelectProps {
    label: string,
    clothing: any[],
    slotKey: string,
    onChange: (slotKey: string, value: string, opacity: number) => void,
    initialValue: any
}

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

const sliderStyles: CSS.Properties = {
    display: 'block',
    marginTop: '10px',
    width: '150px', // fixed width
};


export const ClothingSelect: React.FC<ClothingSelectProps> = ({label, clothing, slotKey, onChange, initialValue}) => {
    const [selectedItem, setSelectedItem] = useState(initialValue);
    const [opacity, setOpacity] = useState(1);
    const [filteredClothing, setFilteredClothing] = useState(clothing);

    React.useEffect(() => {
        const filteredClothing = clothing.filter(item => item.slotKey === slotKey);
        filteredClothing.unshift({name: 'None', image: '', opacity: 0, slotKey})
        setFilteredClothing(filteredClothing);
    }, [clothing, slotKey]);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const item = filteredClothing.find(clothingItem => clothingItem.name === event.target.value);
        console.log('handleChange', event.target.value, item)
        setSelectedItem(item);
        setOpacity(item.opacity);
        onChange(slotKey, item.image, item.opacity);
    };

    const handleOpacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const opacity = Number(event.target.value);
        setOpacity(opacity);
        onChange(slotKey, selectedItem.image, opacity);
    };

    return (
        <div>
            <label style={labelStyles}>{label}</label>
            <select style={selectStyles} value={selectedItem.name} onChange={handleChange}>
                {filteredClothing.map((item, i) => (
                    <option key={`${item.name}.${i}`} value={item.name}>{item.name}</option>
                ))}
            </select>
            <input style={sliderStyles} type="range" min="0" max="1" step="0.01" value={opacity} onChange={handleOpacityChange} />
        </div>
    );
};
