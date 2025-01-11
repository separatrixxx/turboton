import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ChartInterface } from '../../../interfaces/chart.interface';


export interface ChartGraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
    chart: ChartInterface | null,
}
