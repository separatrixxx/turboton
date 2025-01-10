import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface TextBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string,
    text1: string,
    text2: string,
    buttonText1: string,
    buttonText2: string,
    link1: string,
    link2: string,
    isWhite?: boolean,
}
