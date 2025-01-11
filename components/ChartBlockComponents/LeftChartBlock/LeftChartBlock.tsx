import styles from './LeftChartBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import CheckIcon from './check.svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export const LeftChartBlock = (): JSX.Element => {
    const { router } = useSetup();
    
    const checkTextsRef = useRef<HTMLDivElement>(null);
    const featuresTextsRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLHeadingElement>(null);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const checkTexts = checkTextsRef.current?.querySelectorAll('.' + styles.checkText);
            const featureTexts = featuresTextsRef.current?.querySelectorAll('.' + styles.featuresText);

            if (checkTexts) {
                gsap.fromTo(checkTexts,
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        stagger: 0.3,
                        scrollTrigger: {
                            trigger: checkTextsRef.current,
                            start: "top 80%",
                        }
                    }
                );
            }

            if (featureTexts) {
                gsap.fromTo(featureTexts,
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        stagger: 0.3,
                        delay: 0.6,
                        scrollTrigger: {
                            trigger: featuresTextsRef.current,
                            start: "top 80%",
                        }
                    }
                );
            }

            ScrollTrigger.create({
                once: true,
                immediateRender: false,
                onEnter: () => {
                    const duration = 2;
                    const steps = 100;
                    const increment = steps / (duration * 60);
                    
                    let currentCount = 0;
                    const counter = setInterval(() => {
                        currentCount += increment;
                        if (currentCount >= steps) {
                            setCount(steps);
                            clearInterval(counter);
                        } else {
                            setCount(Math.floor(currentCount));
                        }
                    }, 1000 / 60);
                }
            });
        }
    }, []);

    return (
        <div className={styles.leftChartBlock}>
            <Htag tag='l' className={styles.title}>
                {setLocale(router.locale).token_supply}
            </Htag>
            <Htag tag='xxxl' className={styles.price} ref={counterRef}>
                {`${count}M`}
            </Htag>
            <div className={styles.checkDiv} ref={checkTextsRef}>
                <Htag tag='l' className={styles.checkText}>
                    <CheckIcon />
                    {setLocale(router.locale).exchanges_and_dex}
                </Htag>
                <Htag tag='l' className={styles.checkText}>
                    <CheckIcon />
                    {setLocale(router.locale).distribution_through_game}
                </Htag>
            </div>
            <div className={styles.featuresDiv} ref={featuresTextsRef}>
                <Htag tag='m' className={styles.featuresText}>
                    {'— ' + setLocale(router.locale).token_liquidity_exclusively}
                </Htag>
                <Htag tag='m' className={styles.featuresText}>
                    {'— ' + setLocale(router.locale).no_founder_distribution}
                </Htag>
                <Htag tag='m' className={styles.featuresText}>
                    {'— ' + setLocale(router.locale).no_additional_token_minting}
                </Htag>
                <Htag tag='m' className={styles.featuresText}>
                    {'— ' + setLocale(router.locale).community_driven_with_ai}
                </Htag>
            </div>
            <Image className={styles.chartImage} draggable='false'
                loader={() => '/ChartImage.webp'}
                src='/ChartImage.webp'
                alt='chart image'
                width={1}
                height={1}
                unoptimized={true}
            />
        </div>
    );
};
