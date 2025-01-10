import styles from './MainLogo.module.css';
import Image from 'next/image';
import { Header } from '../../HeaderComponents/Header/Header';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { LinksBlock } from '../LinksBlock/LinksBlock';
import { useResizeW } from '../../../hooks/useResize';
import Logo from './logo.svg';
import LogoText1 from './logoText1.svg';
import LogoText2 from './logoText2.svg';


export const MainLogo = (): JSX.Element => {
    const { router } = useSetup();

    return (
        <div className={styles.mainLogo}>
            <Logo className={styles.logo} />
            <div className={styles.logoTextDiv}>
                <LogoText1 className={styles.logoText1} />
                <LogoText2 className={styles.logoText2} />
            </div>
        </div>
    );
};