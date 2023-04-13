import React from 'react'



type ButtonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface ButtonProps extends ButtonPropsType {
    title: string
}

export const Button: React.FC<ButtonProps> = (props) => {
    return <button {...props}>{props.title}</button>
}
