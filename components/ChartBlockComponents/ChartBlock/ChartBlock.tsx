import styles from './ChartBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { LeftChartBlock } from '../LeftChartBlock/LeftChartBlock';
import { RightChartBlock } from '../RightChartBlock/RightChartBlock';


export const ChartBlock = (): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.chartBlock}>
            <div className={styles.chartDiv}>
                <LeftChartBlock />
                <RightChartBlock />
            </div>
        </div>
    );
};
