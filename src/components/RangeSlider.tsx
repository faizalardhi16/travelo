import React, { FC, Fragment } from 'react'
import { uid as uuidv4 } from "uid"

import Carousel from 'react-elastic-carousel';
import Item from './Item';



export interface RangeSliderProps {
    element: JSX.Element[];
}

const RangeSlider: FC<RangeSliderProps> = (props) => {
    const breakPoint = [
        { width: 1, itemsToShow: 1 },
        { width: 558, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ]

    const menu = [
        { id: uuidv4(), city: "Malang", img: "1.jpg" },
        { id: uuidv4(), city: "Jakarta", img: "2.jpg" },
        { id: uuidv4(), city: "Bandung", img: "3.jpg" },
        { id: uuidv4(), city: "Banyuwangi", img: "4.jpg" },
        { id: uuidv4(), city: "Manado", img: "3.jpg" },
        { id: uuidv4(), city: "Makassar", img: "2.jpg" }
    ]
    return (
        <div className="flex flex-row items-center justify-around w-full mt-8">
            <Carousel breakPoints={breakPoint} pagination={false}>
                {props.element}
            </Carousel>
        </div>
    )
}

export default RangeSlider
