import { ChartGraphProps } from './ChartGraph.props';
import styles from './ChartGraph.module.css';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CustomTooltip } from '../CustomTooltip/CustomTooltip';


export const ChartGraph = ({ chart }: ChartGraphProps): JSX.Element => {
    if (!chart) {
        return <div>Loading...</div>;
    }

    const data = chart.coords.map((item, index) => ({
        price: item.price,
        day: new Date(Date.now() - (29 - index) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
    }));

    return (
        <ResponsiveContainer className={styles.chartGraph}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--chartBar)" stopOpacity={0.12} />
                        <stop offset="100%" stopColor="var(--chartBar)" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="day"
                    tick={{ fontSize: 8, fill: 'var(--chartDate)' }}
                    tickLine={false}
                    axisLine={false}
                    interval={4}
                    padding={{ left: 10, right: 10 }}
                />
                <Tooltip content={<CustomTooltip />}  />
                <Area type="monotone" dataKey="price" stroke="var(--chartBar)"
                    fill="url(#chartColor)" strokeWidth={2}
                    activeDot={{
                        r: 6,
                        fill: 'var(--chartBar)',
                        strokeWidth: 0,
                    }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};
