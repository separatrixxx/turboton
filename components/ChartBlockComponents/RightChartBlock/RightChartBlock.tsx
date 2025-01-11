import styles from './RightChartBlock.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import cn from 'classnames';
import { Chart } from '../Chart/Chart';


gsap.registerPlugin(ScrollTrigger);

export const RightChartBlock = (): JSX.Element => {
    const { router } = useSetup();

    const textsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const texts = textsRef.current?.querySelectorAll('.' + styles.text);

            if (texts) {
                gsap.fromTo(texts,
                    { opacity: 0, x: -50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        stagger: 0.3,
                        scrollTrigger: {
                            trigger: textsRef.current,
                            start: "top 80%",
                        }
                    }
                );
            }
        }
    }, []);

    return (
        <div className={styles.rightChartBlock} ref={textsRef}>
            <Htag tag='xxl' className={cn(styles.text, styles.title)}>
                {setLocale(router.locale).chart_title}
            </Htag>
            <Htag tag='s' className={styles.text}>
                {setLocale(router.locale).chart_text_1}
            </Htag>
            <Htag tag='s' className={cn(styles.text, styles.text2)}>
                {setLocale(router.locale).chart_text_2}
            </Htag>
            <Chart />
        </div>
    );
};
