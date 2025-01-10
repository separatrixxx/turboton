import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface AnimatedImageProps extends DetailedHTMLProps<HTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    images: string[],
    alt: string,
}
