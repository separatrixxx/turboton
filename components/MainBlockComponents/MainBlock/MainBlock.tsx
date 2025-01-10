import styles from './MainBlock.module.css';
import Image from 'next/image';
import { Header } from '../../HeaderComponents/Header/Header';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { LinksBlock } from '../LinksBlock/LinksBlock';
import { MainLogo } from '../MainLogo/MainLogo';


export const MainBlock = (): JSX.Element => {
    const { router } = useSetup();
    
    return (
        <div className={styles.mainBlock}>
            <Header />
            <MainLogo />
            <Htag tag='xxl' className={styles.mainText}>
                {setLocale(router.locale).maint_text}
            </Htag>
            <Image className={styles.mainImage} draggable='false'
                loader={() => '/MainImage.webp'}
                src={'/MainImage.webp'}
                alt={'main image'}
                width={1}
                height={1}
                unoptimized={true}
                priority
            />
            <LinksBlock />
        </div>
    );
};