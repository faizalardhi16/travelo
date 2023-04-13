import React from "react";
import { Card, IDataCard } from "../../components/Card";
import Guide from "./Guide";
import Event from "./Event";

export interface IHome {

}

const menu: IDataCard[] = [
    { id: 1, title: "Labuan Bajo", description: "Labuan bajo adalah pulai yang indah sekali sangat berwarna.", img: "1.jpg" },
    { id: 2, title: "Labuan Bajo", description: "Labuan bajo adalah pulai yang indah sekali sangat berwarna.", img: "2.jpg" },
    { id: 3, title: "Labuan Bajo", description: "Labuan bajo adalah pulai yang indah sekali sangat berwarna.", img: "3.jpg" },
    { id: 4, title: "Labuan Bajo", description: "Labuan bajo adalah pulai yang indah sekali sangat berwarna.", img: "4.jpg" },
    { id: 5, title: "Labuan Bajo", description: "Labuan bajo adalah pulai yang indah sekali sangat berwarna.", img: "1.jpg" },
    { id: 6, title: "Labuan Bajo", description: "Labuan bajo adalah pulai yang indah sekali sangat berwarna.", img: "2.jpg" },
    { id: 7, title: "Labuan Bajo", description: "Labuan bajo adalah pulai yang indah sekali sangat berwarna.", img: "3.jpg" },
    { id: 8, title: "Labuan Bajo", description: "Labuan bajo adalah pulai yang indah sekali sangat berwarna.", img: "4.jpg" }
]

const Home: React.FC<IHome> = (props) => {
    return (
        <div className="w-full items-center justify-center flex flex-col">
            <div className={`bg-[url(/assets/home.jpg)] w-full h-[100vh] bg-cover bg-center`}>
                <div className="w-full h-[100vh] bg-stone-900/70 flex items-center justify-center flex-col">
                </div>
            </div>

            <div className="mt-16 w-11/12 justify-center items-center flex flex-col">
                <p className="font-bold text-2xl p-4 text-left">Pick your favourite trip</p>
                <div className="w-11/12 items-center justify-evenly flex flex-row flex-wrap ">
                    {menu.map((item) => {
                        return (
                            <div className="w-1/4 p-4 justify-center" key={item.id}>
                                <Card data={item} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="w-11/12 items-center justify-center flex mt-4">
                <Guide />
            </div>

            <div className="w-11/12 items-center justify-center flex mt-4">
                <Event />
            </div>


        </div>
    )
}

export default Home;