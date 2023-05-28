export const parts = [
    {group: 'main', key: 'body', image: '/assets/doll/body/{{bodyType}}Body.png', layer: 1},

    // Body Parts
    {group: 'bodyPart', key: 'eyes', image: '/assets/doll/eyes/{{eyeColor}}Eyes.png', layer: 2},
    {group: 'bodyPart', key: 'chest', image: '/assets/doll/chest/{{chestSize}}.png', layer: 2},
    {group: 'bodyPart', key: 'lips', layer: 2},
    {group: 'bodyPart', key: 'face', layer: 2},
    {group: 'bodyPart', key: 'abdomen', layer: 2},
    {group: 'bodyPart', key: 'legs', layer: 2},
    {group: 'bodyPart', key: 'feet', layer: 2},
    {group: 'bodyPart', key: 'groin', layer: 2},

    // Tattoos
    {group: 'tattoos', key: 'eyes', layer: 3},
    {group: 'tattoos', key: 'chest', layer: 3},
    {group: 'tattoos', key: 'lips', layer: 3},
    {group: 'tattoos', key: 'face', layer: 3},
    {group: 'tattoos', key: 'abdomen', layer: 3},
    {group: 'tattoos', key: 'legs', layer: 3},
    {group: 'tattoos', key: 'feet', layer: 3},
    {group: 'tattoos', key: 'groin', layer: 3},

    // Makeup
    {group: 'makeup', key: 'eyes', layer: 4},
    {group: 'makeup', key: 'chest', layer: 4},
    {group: 'makeup', key: 'lips', layer: 4},
    {group: 'makeup', key: 'face', layer: 4},
    {group: 'makeup', key: 'abdomen', layer: 4},
    {group: 'makeup', key: 'legs', layer: 4},
    {group: 'makeup', key: 'feet', layer: 4},
    {group: 'makeup', key: 'groin', layer: 4},

    {group: 'hair', key: 'scalp', image: '/assets/doll/hair/{{hairLength}}_{{hairColor}}_{{hairStyle}}.png', layer: 5},
    {group: 'hair', key: 'pubes', image: '/assets/doll/pubes/{{pubes}}.png', layer: 5},

    // Layer 6 - piercings
    {group: 'piercing', key: 'nipples', image: '/assets/items/piercing/nipples/nippleBar{{chestSize}}.png', layer: 6},
    {group: 'piercing', key: 'clitoris', image: '/assets/items/piercing/clitoris/clitBar.png', layer: 6},
    {group: 'piercing', key: 'eyeBrow', layer: 6},
    {group: 'piercing', key: 'ears', image: '/assets/items/piercing/ears/goldEarRings.png', layer: 6},

    // Layer 7 - Accessories
    {group: 'accessory', key: 'ears', layer: 7},
    {group: 'accessory', key: 'neck', layer: 7},
    {group: 'accessory', key: 'clitoris', layer: 7},
    {group: 'accessory', key: 'wrists', layer: 7},
    {group: 'accessory', key: 'eyes', image: '/assets/items/accessory/eyes/glasses.png', layer: 7},
    {group: 'accessory', key: 'nipples', layer: 7},
    {group: 'accessory', key: 'anus', layer: 7},
    {group: 'accessory', key: 'fingers', layer: 7},

    // Layer 8 - Adornments on bodyPart
    {group: 'adornmentBody', key: 'eyes', layer: 8},
    {group: 'adornmentBody', key: 'chest', layer: 8},
    {group: 'adornmentBody', key: 'lips', layer: 8},
    {group: 'adornmentBody', key: 'face', layer: 8},
    {group: 'adornmentBody', key: 'abdomen', layer: 8},
    {group: 'adornmentBody', key: 'legs', layer: 8},
    {group: 'adornmentBody', key: 'feet', layer: 8},
    {group: 'adornmentBody', key: 'groin', layer: 8},

    // Layer 9 - Underclothing
    {group: 'underclothing', key: 'breast', image: '/assets/items/underClothing/breasts/plainBra_{{chestSize}}.png', layer: 9},
    {group: 'underclothing', key: 'groin', image: '/assets/items/underClothing/groin/plainPanties.png', layer: 9},
    {group: 'underclothing', key: 'feet', image: '/assets/items/underClothing/feetAndLegs/socks.png', layer: 9},
    {group: 'underclothing', key: 'legs', layer: 9},

    // Layer 10 - Adornments on Underclothing
    {group: 'adornmentUnderclothing', key: 'breast', layer: 10},
    {group: 'adornmentUnderclothing', key: 'groin', layer: 10},
    {group: 'adornmentUnderclothing', key: 'feet', layer: 10},
    {group: 'adornmentUnderclothing', key: 'legs', layer: 10},

    // Layer 11 - Clothing
    {group: 'clothing', key: 'head', layer: 11, image: ''},
    {group: 'clothing', key: 'top', layer: 11, image: '/assets/items/clothing/top/plainWhiteShirt_{{chestSize}}.png'},
    {group: 'clothing', key: 'bottom', layer: 11, image: '/assets/items/clothing/bottom/jeans.png'},
    {group: 'clothing', key: 'hands', layer: 11, image: '/assets/items/clothing/hands/fishnetSleeves.png'},
    {group: 'clothing', key: 'waist', layer: 11, image: ''},
    {group: 'clothing', key: 'feet', layer: 11, image: '/assets/items/clothing/feet/trainers.png'},
    {group: 'clothing', key: 'neck', layer: 11, image: '/assets/items/accessory/neck/choker.doll.png'},

    // Layer 12 - Adornments Clothing
    {group: 'adornmentClothing', key: 'head', layer: 12},
    {group: 'adornmentClothing', key: 'top', layer: 12},
    {group: 'adornmentClothing', key: 'bottom', layer: 12},
    {group: 'adornmentClothing', key: 'hands', layer: 12},
    {group: 'adornmentClothing', key: 'waist', layer: 12},
    {group: 'adornmentClothing', key: 'feet', layer: 12},
    {group: 'adornmentClothing', key: 'neck', layer: 12},

    // Layer 13 - Outer Clothing
    {group: 'outerClothing', key: 'torso', layer: 13},
    {group: 'outerClothing', key: 'back', layer: 13},

    // Layer 14 - Adornments Outer Clothing
    {group: 'adornmentOuterClothing', key: 'torso', layer: 14},
    {group: 'adornmentOuterClothing', key: 'back', layer: 14},
].map(({group, key, image, layer}) : {image: string, slotKey: string, layer: number, opacity: number} => {
    return {
        slotKey: `${group}.${key}`,
        image: image || '',
        layer,
        opacity: 1,
    }
});
