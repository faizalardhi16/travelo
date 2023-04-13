import React, { FC, useState } from 'react'
import { BsFillHeartFill } from "react-icons/bs";
import { Button } from './Button';
import { AiFillStar } from "react-icons/ai"


export interface CardProps {
    data: IDataCard;
}

export interface IDataCard {
    id: number;
    title: string;
    description: string;
    img: string;
}

export const Card: FC<CardProps> = (props) => {
    const [isAppear, setIsAppear] = useState<boolean>(false);

    return (
        <div className="w-full bg-white h-100 rounded-lg drop-shadow-md">
            <div
                style={{ backgroundImage: `url(/assets/${props.data.img})` }}
                className={`h-56 bg-cover bg-center rounded-t-lg`}>
                <div
                    className={`
                        hover:bg-stone-900/70 h-56 transition duration-150 rounded-t-lg items-center justify-center flex
                    `}
                    onMouseEnter={() => { setIsAppear(true) }}
                    onMouseLeave={() => { setIsAppear(false) }}
                >
                    {isAppear && <Button title='Lihat Selengkapnya' className="text-white border p-2 hover:bg-white hover:text-black transition" />}
                </div>
            </div>

            <div className="absolute right-2 w-12 bottom-44 drop-shadow-md bg-white h-12 rounded-full flex items-center justify-center">
                <BsFillHeartFill size={25} className="mt-1 hover:text-rose-600" />
            </div>

            <div>
                <p className="text-xl p-2 font-bold">Pulau Labuan Bajo</p>
            </div>

            <div>
                <p className="text-base p-2 text-justify font-open-sans font-semibold">
                    Pulau labuan bajo merupakan pulau yang begitu indah. Dimana terdapat destinasi wisata yang cukup menarik
                </p>
            </div>

            <div className="p-2 flex flex-row items-center mt-[-8px]">
                <AiFillStar color={`#f39c12`} />
                <p className="text-xs ml-1 font-open-sans font-semibold">4.5</p>
            </div>

            <div className="p-2 flex flex-row items-center justify-start">
                <p className="text-base font-bold">Rp. 1.200.000</p>
                <p className="text-base">&nbsp;Pax</p>
            </div>
        </div>
    )
}
