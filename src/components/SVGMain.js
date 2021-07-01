import React from 'react'
import Svg, { Circle } from 'react-native-svg';

const SVGMain = () => {
    //Arte da tela Main
    return (
        <>
            <Svg width="100%" height="600">
                <Circle
                    cx="230"
                    cy="300"
                    r={220}
                    opacity={0.9}
                    fill="#fcefdd"
                />
                <Circle
                    cx="230"
                    cy="300"
                    r={250}
                    opacity={0.8}
                    fill='#f3ddfc'
                />
                <Circle
                    cx="100"
                    cy="220"
                    r={120}
                    opacity={0.8}
                    fill='#fcdedd'
                />
            </Svg>
        </>
    )
}

export default SVGMain;