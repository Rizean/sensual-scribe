import React, {useEffect, useState} from 'react';
import CSS from 'csstype';

export interface PaperDollPartProps {
    slotKey?: string,
    layer?: number,
    image?: string,
    opacity?: number,
    display?: boolean,
}

export const PaperDollPart: React.FC<PaperDollPartProps> = ({slotKey = '', layer = 1, image = '', opacity = 1, display = true}) => {
    const position: 'relative' | 'absolute' = slotKey === 'base' ? 'relative' : 'absolute';
    const style: CSS.Properties = {
        position,
        top: `0px`,
        left: `0px`,
        zIndex: layer,
        opacity,
        display: display ? 'block' : 'none',
        width: '100%',
        height: '100%',
        objectFit: 'contain', // Or 'cover', depending on your needs
    }

    const [imgExists, setImgExists] = useState(false);

    // handle image loading and hide the image if it fails to load to prevent broken images
    useEffect(() => {
        console.log('PaperDollPart useEffect', slotKey, image)
        // This function is called when the image has loaded successfully
        const handleLoad = () => setImgExists(true);

        // This function is called when the image has failed to load
        const handleError = () => setImgExists(false);

        const imgElement = new Image();
        imgElement.onload = handleLoad;
        imgElement.onerror = handleError;
        imgElement.src = image;

        // Clean up functions
        return () => {
            imgElement.onload = null;
            imgElement.onerror = null;
        }
    }, [image]);

    const id = `doll-${slotKey.replace(/\./g, '-')}`;

    return (imgExists && <img style={style} src={image} id={id} alt={id}/>);
};
