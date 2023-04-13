import React from 'react'
import RangeSlider from '../../components/RangeSlider'
import { uid as uuidv4 } from "uid"
import Item from '../../components/Item'
import CardItem from '../../components/CardItem'
import Text from '../../components/Text'

export interface GuideComponent {

}

const menu = [
    { id: uuidv4(), city: "Malang", img: "1.jpg" },
    { id: uuidv4(), city: "Jakarta", img: "2.jpg" },
    { id: uuidv4(), city: "Bandung", img: "3.jpg" },
    { id: uuidv4(), city: "Banyuwangi", img: "4.jpg" },
    { id: uuidv4(), city: "Manado", img: "3.jpg" },
    { id: uuidv4(), city: "Makassar", img: "2.jpg" }
]

const Guide: React.FC<GuideComponent> = (props) => {

    return (
        <div className="w-full p-4 mt-8">
            <Text className="font-bold text-2xl mb-4 text-center">Guides for your next vacation</Text>
            <RangeSlider element={
                menu.map((item, index) => (
                    <CardItem>
                        <Item key={item.id} style={{ backgroundImage: `url(/assets/${item.img})` }} className="bg-cover bg-center rounded-lg">
                            <div className="bg-stone-900/70 w-full h-[250px] items-center flex justify-center rounded-lg">
                                <Text className="text-base font-open-sans">{item.city}</Text>
                            </div>
                        </Item>
                    </CardItem>
                ))
            } />
        </div>
    )
}



export default Guide
