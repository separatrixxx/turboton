import styles from './Chart.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import Logo from './logo.svg';
import { Htag } from '../../Common/Htag/Htag';
import { useEffect, useState } from 'react';
import { getChart } from '../../../helpers/chart.helper';
import { ChartInterface } from '../../../interfaces/chart.interface';
import { ChartGraph } from '../ChartGraph/ChartGraph';


export const Chart = (): JSX.Element => {
    const { router } = useSetup();

    const [chart, setChart] = useState<ChartInterface | null>(null);

    const link = process.env.NEXT_PUBLIC_TT_BUY_ON_STONFI;

    useEffect(() => {
        getChart(setChart);
    }, []);

    return (
        <div className={styles.chart}>
            <div className={styles.chartInfoDiv}>
                <Logo className={styles.logo} />
                <div>
                    <Htag tag='m' className={styles.chartTitle}>
                        {setLocale(router.locale).turboton}
                    </Htag>
                    <Htag tag='xl' className={styles.chartPrice}>
                        {`${chart?.currentPrice} USD`}
                    </Htag>
                </div>
            </div>
            <ChartGraph chart={chart} />
            <Button className={styles.chartButton} text={setLocale(router.locale).buy_on_stonfi}
                type='chart' isIcon={true} isStonfi={true} size='l'
                onClick={() => window.open(link, '_blank')} />
        </div>
    );
};
