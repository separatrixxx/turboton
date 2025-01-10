import styles from './HeaderMob.module.css';
import Link from 'next/link';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { Button } from '../../Common/Button/Button';
import BurgerIcon from './burger.svg';
import CloseIcon from './close.svg';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'classnames';


export const HeaderMob = (): JSX.Element => {
    const { router } = useSetup();
    const headerRef = useRef<HTMLDivElement>(null);

    const link1 = process.env.NEXT_PUBLIC_TT_MEMECOIN;
    const link2 = process.env.NEXT_PUBLIC_TT_FARM;
    const link3 = process.env.NEXT_PUBLIC_TT_WHITEPAPER;
    const link4 = process.env.NEXT_PUBLIC_TT_BUY_ON_STONFI;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    let Icon = BurgerIcon;
    if (isOpen) {
        Icon = CloseIcon;
    }

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const menuVariants = {
        hidden: {
            y: -300,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    return (
        <header className={cn(styles.header, {
            [styles.openHeader]: isOpen,
        })} ref={headerRef}>
            <Icon className={styles.icon} onClick={() => setIsOpen(!isOpen)} />
            <Button  text={setLocale(router.locale).buy_on_stonfi} type='primary'
                size='s' onClick={() => window.open(link4, '_blank')} />
            <AnimatePresence>
                {isOpen && (
                    <motion.div className={styles.headerLinks}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                        style={{ display: 'grid' }}>
                        <Link href={link1 || '/'} className={styles.headerLink}
                            target="_blank" aria-label='header link 1'>
                            <Htag tag='xl'>
                                {setLocale(router.locale).header_links.link1}
                            </Htag>
                        </Link>
                        <Link href={link2 || '/'} className={styles.headerLink}
                            target="_blank" aria-label='header link 2'>
                            <Htag tag='xl'>
                                {setLocale(router.locale).header_links.link2}
                            </Htag>
                        </Link>
                        <Link href={link3 || '/'} className={styles.headerLink}
                            target="_blank" aria-label='header link 3'>
                            <Htag tag='xl'>
                                {setLocale(router.locale).header_links.link3}
                            </Htag>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
