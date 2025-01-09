import Link from 'next/link';
import styles from './Header.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { Button } from '../../Common/Button/Button';


export const Header = (): JSX.Element => {
    const { router } = useSetup();

    const link1 = process.env.NEXT_PUBLIC_TT_MEMECOIN;
    const link2 = process.env.NEXT_PUBLIC_TT_FARM;
    const link3 = process.env.NEXT_PUBLIC_WHITEPAPER;
    const link4 = process.env.NEXT_PUBLIC_TT_BUY_ON_STONFI;

	return (
        <header className={styles.header}>
            <Link href={link1 || '/'} className={styles.headerLink}
                target="_blank" aria-label='header link 1'>
                <Htag tag='m'>
                    {setLocale(router.locale).header_links.link1}
                </Htag>
            </Link>
            <Link href={link2 || '/'} className={styles.headerLink}
                target="_blank" aria-label='header link 2'>
                <Htag tag='m'>
                    {setLocale(router.locale).header_links.link2}
                </Htag>
            </Link>
            <Link href={link3 || '/'} className={styles.headerLink}
                target="_blank" aria-label='header link 3'>
                <Htag tag='m'>
                    {setLocale(router.locale).header_links.link3}
                </Htag>
            </Link>
            <Button text={setLocale(router.locale).buy_on_stonfi} type='primary'
                size='s' onClick={() => window.open(link4, '_blank')} />
        </header>
    );
};