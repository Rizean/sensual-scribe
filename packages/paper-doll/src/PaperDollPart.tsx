import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import CSS from 'csstype';

export interface PaperDollPartProps {
    slotKey: string,
    layer?: number,
    image?: string,
    opacity?: number,
    display?: boolean,
}

export const PaperDollPart: React.FC<PaperDollPartProps> = ({slotKey, layer = 1, image , opacity = 1, display = true}) => {
    if (!slotKey) {
        return null;
    }
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
        // This function is called when the image has loaded successfully
        const handleLoad = () => setImgExists(true);

        const imgElement = new Image();
        imgElement.onload = handleLoad;
        imgElement.src = image;

        // Clean up functions
        return () => {
            imgElement.onload = null;
        }
    }, [image]);

    const id = `doll-${slotKey.replace(/\./g, '-')}`;

    return (imgExists && <img style={style} src={image} id={id} alt={id} data-testid={id}/>);
};

PaperDollPart.propTypes = {
    slotKey: PropTypes.string.isRequired,
    layer: PropTypes.number,
    image: PropTypes.string,
    opacity: PropTypes.number,
    display: PropTypes.bool,
};
