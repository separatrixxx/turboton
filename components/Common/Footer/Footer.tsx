import styles from './Footer.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { LinksBlock } from '../../MainBlockComponents/LinksBlock/LinksBlock';


export const Footer = (): JSX.Element => {
    const { router } = useSetup();

    return (
        <footer className={styles.footer}>
            <Htag tag='xxl' className={styles.footerText}>
                {setLocale(router.locale).welcome_to_the_fam}
            </Htag>
            <LinksBlock />
        </footer>
    );
};