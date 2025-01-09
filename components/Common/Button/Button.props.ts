import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    type: 'primary' | 'white' | 'gray',
    size: 'l' | 's',
    isIcon?: boolean,
	onClick: (e: any) => void,
}
