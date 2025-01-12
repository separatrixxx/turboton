import styles from './CustomTooltip.module.css';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';


export const CustomTooltip = ({ active, payload, label }: any): JSX.Element => {
    const { router } = useSetup();
    
    if (active && payload && payload.length) {
        return (
            <div className={styles.customTooltip}>
                <Htag tag='s'>
                    {label}
                </Htag>
                <Htag tag='s' className={styles.price}>
                    {setLocale(router.locale).price.replace('$$$', payload[0].value.toFixed(4))}
                </Htag>
            </div>
        );
    }

    return <></>;
};
