import React, {useState} from "react";

import {PaperDoll} from "paper-doll";
import {parts} from "./parts";
import CSS from "csstype";
import {Select} from "./Select";
import {ClothingSelect} from "./ClothingSelect";
import {clothing} from "./clothing";

const styles: { container: CSS.Properties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
}

export const PaperDollDemo: React.FC = () => {
    const [imageSubstitutions, setImageSubstitutions] = useState({
        bodyType: 'normal',
        eyeColor: 'blue',
        hairColor: 'blonde',
        hairStyle: 'straight',
        hairLength: 'chest',
        chestSize: 'a',
    })
    const [dollParts, setDollParts] = useState(parts);
    const handleChange = (key: string) => (value: string) => setImageSubstitutions({...imageSubstitutions, [key]: value});
    const handleClothingChange = (slotKey: string, image: string, opacity: number) => {
        const newParts = dollParts.map(part => {
            if (part.slotKey === slotKey) {
                part.image = image;
                part.opacity = opacity;
            }
            return part;
        });
        setDollParts(newParts);
    };

    const bodyTypes = ['normal'];
    const eyeColors = ['blue', 'green', 'brown', 'grey'];
    const chestSizes = ['a', 'b', 'c', 'd'];
    const hairColors = ['blonde', 'brunette', 'red'];
    const hairStyles = ['straight', 'fancy', 'pigtails'];
    const hairLengths = ['chest', 'long', 'short', 'shoulders'];
    const pubes = ['hairy', 'shaved', 'stubble'];

    const getInitialValue = (name: string) => clothing.find(item => item.name === name);
    // @ts-ignore // 320x955
    window.clothing = clothing;
    return (
        <div style={styles.container}>
            <h1>Paper Doll Demo</h1>
            <div id="demo-container" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative', width: '70%'}}>
                <div style={{display: 'flex', flexDirection: 'row', flex: 3}}>
                    <div style={{flex: 1}}>
                        <ClothingSelect label="Glasses" clothing={clothing} slotKey='accessory.eyes' onChange={handleClothingChange} initialValue={getInitialValue('Glasses')}/>
                        <ClothingSelect label="Neck" clothing={clothing} slotKey='clothing.neck' onChange={handleClothingChange} initialValue={getInitialValue('Choker')}/>
                        <ClothingSelect label="Top" clothing={clothing} slotKey='clothing.top' onChange={handleClothingChange} initialValue={getInitialValue('Plain White Shirt')}/>
                        <ClothingSelect label="Bottom" clothing={clothing} slotKey='clothing.bottom' onChange={handleClothingChange} initialValue={getInitialValue('Jeans')}/>
                        <ClothingSelect label="Hands" clothing={clothing} slotKey='clothing.hands' onChange={handleClothingChange} initialValue={getInitialValue('Fishnet Sleeves')}/>
                        <ClothingSelect label="Shoes" clothing={clothing} slotKey='clothing.feet' onChange={handleClothingChange} initialValue={getInitialValue('Trainers')}/>
                    </div>
                    <div style={{flex: 1}}>
                        <ClothingSelect label="Bra" clothing={clothing} slotKey='underclothing.breast' onChange={handleClothingChange} initialValue={getInitialValue('Plain Bra')}/>
                        <ClothingSelect label="Panties" clothing={clothing} slotKey='underclothing.groin' onChange={handleClothingChange} initialValue={getInitialValue('Plain Panties')}/>
                        <ClothingSelect label="Nipple Bar" clothing={clothing} slotKey='piercing.nipples' onChange={handleClothingChange} initialValue={getInitialValue('Nipple Bars')}/>
                        <ClothingSelect label="Clit Piercing" clothing={clothing} slotKey='piercing.clitoris' onChange={handleClothingChange} initialValue={getInitialValue('Clit Bar')}/>
                        <ClothingSelect label="Feet" clothing={clothing} slotKey='underclothing.feet' onChange={handleClothingChange} initialValue={getInitialValue('White Socks')}/>
                    </div>
                </div>
                <div id="doll-column" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flex: 3, height: '600px', overflow: 'hidden'}}>
                    <PaperDoll parts={dollParts} showLayers={20} imageSubstitutions={imageSubstitutions}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', flex: 3}}>
                    <div style={{flex: 1}}>
                        <ClothingSelect label="Adornment Chest" clothing={clothing} slotKey='adornmentBody.chest' onChange={handleClothingChange} initialValue={getInitialValue('None')}/>
                        <ClothingSelect label="Adornment Groin" clothing={clothing} slotKey='adornmentBody.groin' onChange={handleClothingChange} initialValue={getInitialValue('None')}/>
                        <ClothingSelect label="Adornment Face" clothing={clothing} slotKey='adornmentBody.face' onChange={handleClothingChange} initialValue={getInitialValue('None')}/>
                        <ClothingSelect label="Tattoos Abdomen" clothing={clothing} slotKey='tattoos.abdomen' onChange={handleClothingChange} initialValue={getInitialValue('None')}/>
                    </div>
                    <div style={{flex: 1}}>
                        <Select label="Body Type" options={bodyTypes} onChange={handleChange('bodyType')}/>
                        <Select label="Eye Color" options={eyeColors} onChange={handleChange('eyeColor')}/>
                        <Select label="Chest Size" options={chestSizes} onChange={handleChange('chestSize')}/>
                        <Select label="Hair Color" options={hairColors} onChange={handleChange('hairColor')}/>
                        <Select label="Hair Style" options={hairStyles} onChange={handleChange('hairStyle')}/>
                        <Select label="Hair Length" options={hairLengths} onChange={handleChange('hairLength')}/>
                        <Select label="Pubes" options={pubes} onChange={handleChange('pubes')}/>
                    </div>
                </div>
                {/*<div style={{*/}
                {/*    position: 'absolute',*/}
                {/*    left: '50%',*/}
                {/*    top: '0',*/}
                {/*    bottom: '0',*/}
                {/*    width: '1px',*/}
                {/*    backgroundColor: 'yellow'*/}
                {/*}}/>*/}
            </div>
        </div>
    );
};

