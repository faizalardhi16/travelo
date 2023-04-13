import React from 'react'

type ImageProps = React.HTMLProps<HTMLImageElement>

export const Image: React.FC<ImageProps> = (props) => {
    return <img {...props} />
}
