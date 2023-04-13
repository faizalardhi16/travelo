import React, { FC, useEffect, useState } from "react";
import { ListNavigation } from "./ListNavigation";

export interface INavbarComponent {
    children: JSX.Element
}

const menu = [
    { id: 1, title: "Home" },
    { id: 2, title: "Travel" },
    { id: 3, title: "Favourite" },
    { id: 4, title: "Login" },
    { id: 5, title: "Sign Up" }
]

interface IMenu {
    id: number;
    title: string;
}

export const NavbarComponent: FC<INavbarComponent> = (props) => {
    const [show, handleShow] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                handleShow(true);
            } else handleShow(false);
        })

        return () => window.removeEventListener("scroll", () => {
            console.log("removed")
        });
    }, [])
    return (
        <div>
            <div className={`w-full h-20 items-center justify-center flex fixed ${show ? "bg-white" : "bg-transparent"} 
                transition ease-linier duration-150 z-50`}>
                <div className="w-11/12 h-20 items-center justify-between flex-row flex p-2">
                    <div className="flex flex-row items-center justify-start w-1/3 h-20">
                        <img src="/assets/baggage.png" alt="image" height={50} width={50} />
                        <p className={`${show ? "text-black" : "text-white"} font-alkatra text-3xl font-bold ml-2 italic mt-1`}>Travelo</p>
                    </div>
                    <div className="flex flex-row items-center justify-end w-2/3  h-20">
                        {menu.map(({ id, title }: IMenu) => <ListNavigation key={id} renderButton={id > 3 ? true : false} title={title} show={show} />)}
                    </div>
                </div>
            </div>

            {props.children}
        </div>
    )
}

