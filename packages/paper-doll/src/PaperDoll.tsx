import React from "react";
import CSS from 'csstype';
import {PaperDollPart, PaperDollPartProps} from './PaperDollPart';

export interface PaperDollProps {
    showLayers?: number,
    parts: PaperDollPartProps[]
    imageSubstitutions: {
        [key: string]: string
    }
}

export const PaperDoll: React.FC<PaperDollProps> = ({showLayers = 20, parts, imageSubstitutions}) => {
    const style: CSS.Properties = {
        position: 'relative',
        zIndex: 0,
        width: '100%',
        height: '100%',
    };

    // Ensure that we always show at least 5 layers
    const maxLayersToShow = Math.max(showLayers, 5);
    const [dollParts, setDollParts] = React.useState<PaperDollPartProps[]>([]);


    React.useEffect(() => {
        const newParts = parts
            .filter(part => part.layer && part.layer <= maxLayersToShow)
            .map(part => {
                const newPart = {...part};
                const regex = /\{\{(\w+)}}/g; // Matches {{prop}}
                newPart.image = newPart.image?.replace(regex, (match, prop) => imageSubstitutions[prop] || match);
                return newPart;
            })
        setDollParts(newParts);
    }, [parts, maxLayersToShow, imageSubstitutions]);

    return (
        <div style={style}>
            {/* this is our base layer that should always be there otherwise will have styling issues */}
            <PaperDollPart key='base' slotKey='base' image="/assets/doll/empty.png"/>
            {dollParts.map((part) => <PaperDollPart key={part.slotKey} {...part}/>)}
        </div>
    )
};

