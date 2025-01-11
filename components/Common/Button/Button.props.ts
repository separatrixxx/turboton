import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string,
    type: 'primary' | 'white' | 'gray' | 'chart',
    size: 'l' | 's',
    isIcon?: boolean,
    isStonfi?: boolean,
	onClick: (e: any) => void,
}
