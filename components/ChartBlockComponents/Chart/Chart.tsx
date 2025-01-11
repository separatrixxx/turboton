import styles from './Chart.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Button } from '../../Common/Button/Button';
import { setLocale } from '../../../helpers/locale.helper';
import Logo from './logo.svg';
import { Htag } from '../../Common/Htag/Htag';
import { useEffect } from 'react';
import { getChart } from '../../../helpers/chart.helper';


export const Chart = (): JSX.Element => {
    const { router } = useSetup();

    const link = process.env.NEXT_PUBLIC_TT_BUY_ON_STONFI;

    useEffect(() => {
        getChart();
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
                        {'0.004413 USD'}
                    </Htag>
                </div>
            </div>
            <iframe className={styles.chartIframe} id="geckoterminal-embed" title="GeckoTerminal Embed" src="https://www.geckoterminal.com/ru/ton/pools/EQCxVX5C54-i8x7FOWSz5BrYL-Lp5h1ROV3Slri3hKhPDYvQ?embed=1&info=0&swaps=0&grayscale=0&light_chart=0" frameBorder="0" allow="clipboard-write" allowFullScreen></iframe>
            <Button className={styles.chartButton} text={setLocale(router.locale).buy_on_stonfi}
                type='chart' isIcon={true} isStonfi={true} size='l'
                onClick={() => window.open(link, '_blank')} />
        </div>
    );
};
