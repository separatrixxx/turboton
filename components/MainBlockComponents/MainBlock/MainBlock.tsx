import styles from './MainBlock.module.css';
import Image from 'next/image';
import { Header } from '../../HeaderComponents/Header/Header';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { LinksBlock } from '../LinksBlock/LinksBlock';
import { useResizeW } from '../../../hooks/useResize';


export const MainBlock = (): JSX.Element => {
    const { router } = useSetup();

    const width = useResizeW();
    const logoImage = (width > 580 ? '/LogoImage.webp' : '/LogoImageS.webp')
    
    return (
        <div className={styles.mainBlock}>
            <Header />
            <Image className={styles.logoImage} draggable='false'
                loader={() => logoImage}
                src={logoImage}
                alt={'logo image'}
                width={1}
                height={1}
                unoptimized={true}
                priority
            />
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