import styles from './GameBlock.module.css';
import Glow from './glow.svg';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { TextBlock } from '../../NftBlockComponents/TextBlock/TextBlock';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useResizeW } from '../../../hooks/useResize';


export const GameBlock = (): JSX.Element => {
    const { router } = useSetup();
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const link1 = process.env.NEXT_PUBLIC_GAME_LINK_1 || '/';
    const link2 = process.env.NEXT_PUBLIC_GAME_LINK_2 || '/';

    const calculateScrollPosition = () => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const scrolled = window.scrollY || window.pageYOffset;
            const viewportHeight = window.innerHeight;
            const elementTop = rect.top + scrolled;
            const relativeScroll = (scrolled - elementTop + viewportHeight) / (rect.height + viewportHeight);
            
            setScrollPosition(relativeScroll);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(calculateScrollPosition);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('touchmove', handleScroll, { passive: true });
        window.addEventListener('touchend', handleScroll, { passive: true });

        calculateScrollPosition();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchmove', handleScroll);
            window.removeEventListener('touchend', handleScroll);
        };
    }, []);

    const width = useResizeW();

    const phoneSpeed = width > 580 ? 60 : 80;;
    const mascotSpeed = width > 580 ? 100 : 120;

    const phoneTransform = `translateY(${Math.max(100 - scrollPosition * phoneSpeed, 0)}px)`;
    const mascotTransform = `translateY(${Math.max(100 - scrollPosition * mascotSpeed, 0)}px)`;

    return (
        <div className={styles.gameBlock} ref={containerRef}>
            <Glow className={styles.glow1} />
            <Glow className={styles.glow2} />
            <div className={styles.gameDiv}>
                <TextBlock 
                    title={setLocale(router.locale).game_title}
                    text1={setLocale(router.locale).game_text_1}
                    text2={setLocale(router.locale).game_text_2}
                    buttonText1={setLocale(router.locale).play_in_telegram}
                    buttonText2={setLocale(router.locale).learn_more}
                    link1={link1} 
                    link2={link2} 
                    isWhite={true} 
                />
                <div className={styles.gameImageDiv}>
                    <Image className={styles.gameImage1} draggable='false'
                        loader={() => '/GameImage1.webp'}
                        src='/GameImage1.webp'
                        alt='game image 1'
                        width={1}
                        height={1}
                        unoptimized={true}
                        style={{ transform: phoneTransform, transition: 'transform 0.3s ease-out' }}
                    />
                    <Image className={styles.gameImage2} draggable='false'
                        loader={() => '/GameImage2.webp'}
                        src='/GameImage2.webp'
                        alt='game image 2'
                        width={1}
                        height={1}
                        unoptimized={true}
                        style={{ transform: mascotTransform, transition: 'transform 0.3s ease-out' }}
                    />
                </div>
            </div>
        </div>
    );
};
