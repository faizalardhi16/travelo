import React from 'react'
import RangeSlider from '../../components/RangeSlider'
import Item from '../../components/Item'
import { uid as uuidv4 } from "uid"
import CardItem from '../../components/CardItem'
import Text from '../../components/Text'

export interface EventComponent {

}

const menu = [
    { id: uuidv4(), city: "Malang", img: "1.jpg" },
    { id: uuidv4(), city: "Jakarta", img: "2.jpg" },
    { id: uuidv4(), city: "Bandung", img: "3.jpg" },
    { id: uuidv4(), city: "Banyuwangi", img: "4.jpg" },
    { id: uuidv4(), city: "Manado", img: "3.jpg" },
    { id: uuidv4(), city: "Makassar", img: "2.jpg" }
]


const Event: React.FC<EventComponent> = (props) => {
    return (
        <div className="w-full p-4 mt-8">
            <Text className="font-bold text-2xl mb-4 text-center">Favourite events for this week</Text>
            <RangeSlider element={
                menu.map((item, index) => (
                    <CardItem>
                        <Item key={item.id} style={{ backgroundImage: `url(/assets/${item.img})` }}
                            className="bg-cover bg-center rounded-lg">
                            <div className="bg-[#d63031] p-2 w-fit rounded-ss-lg rounded-ee-lg drop-shadow-md">
                                <Text className="text-base font-open-sans">{item.city}</Text>
                            </div>
                        </Item>
                        <Text>HEL</Text>
                    </CardItem>
                ))
            } />
        </div>
    )
}



export default Event
