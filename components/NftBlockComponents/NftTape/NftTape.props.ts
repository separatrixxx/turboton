import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface NftTapeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    direction: 'top' | 'bottom' | 'right' | 'left',
    speed: number,
}
