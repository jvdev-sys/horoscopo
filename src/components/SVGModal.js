import React from 'react'

import Svg, { Circle } from 'react-native-svg';

const SVGModal = ({color}) => {
    //Arte superior do Modal -- preenchido de acordo com a cor principal do ícone do signo
    return (
        <>
            <Svg width="100%" height="250" >
                <Circle
                    cx="20"
                    cy="-250"
                    r={450}
                    opacity={0.4}
                    fill={color}
                />
                <Circle
                    cx="150"
                    cy="-300"
                    r={500}
                    opacity={0.4}
                    fill={color}
                />
                <Circle
                    cx="250"
                    cy="-350"
                    r={500}
                    opacity={0.4}
                    fill={color}
                />
                <Circle
                    cx="350"
                    cy="-450"
                    r={500}
                    opacity={0.5}
                    fill={color}
                />
            </Svg>
        </>
    )
}

export default SVGModal;

