import React from "react";
import { Button } from "./Button";

export interface IListNavigation {
    renderButton: boolean;
    title: string;
    show: boolean;
}


export const ListNavigation: React.FC<IListNavigation> = ({ renderButton, title, show }) => {
    if (renderButton) {
        return <Button className={`font-bold mx-3 text-base px-4 py-2 border 
            ${title === "Login" ? `${show ? "text-black border-slate-800" : "text-white border-white"}  hover:bg-slate-300 transition`
                : "border-slate-800 bg-slate-800 text-white hover:bg-slate-700 transition"}`} title={title} />
    }

    return <a className={`${show ? "text-black" : "text-white"} 
        font-open-sans mx-3 text-base`} href="#">{title}</a>
}
