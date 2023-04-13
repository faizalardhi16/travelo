import React, { FC } from 'react'

type TextProps = React.HTMLProps<HTMLParagraphElement>

const Text: FC<TextProps> = (props) => {
    return <p {...props}>{props.children}</p>
}

export default Text
