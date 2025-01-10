import { AnimatedImageProps } from './AnimatedImage.props';
import styles from './AnimatedImage.module.css';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import cn from 'classnames';


export const AnimatedImage = ({ images, alt, className }: AnimatedImageProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const getRandomTime = useCallback(() => {
        const time = Array.from({ length: 31 }, (_, i) => 2 + i * 0.1);

        return time[Math.floor(Math.random() * time.length)] * 1000;
    }, []);

    const getRandomImage = useCallback((image: string) => {
        return images.filter(i => i !== image)[Math.floor(Math.random() * (images.length - 1))];
    }, [images]);

    const [currentImage, setCurrentImage] = useState<string>(images[0]);

    useEffect(() => {
        let hideTimeoutId: NodeJS.Timeout;
        let showTimeoutId: NodeJS.Timeout;
        
        const scheduleNextTransition = () => {
            const randomDelay = getRandomTime();

            hideTimeoutId = setTimeout(() => {
                setIsVisible(false);
                
                showTimeoutId = setTimeout(() => {
                    setIsVisible(true);
                    setCurrentImage(getRandomImage(currentImage));
                    scheduleNextTransition();
                }, 1000);
            }, randomDelay);
        };

        scheduleNextTransition();

        return () => {
            if (hideTimeoutId) {
                clearTimeout(hideTimeoutId);
            }
            if (showTimeoutId) {
                clearTimeout(showTimeoutId);
            }
        };
    }, [currentImage, getRandomTime, getRandomImage]);

    return (
        <Image className={cn(styles.animatedImage, className, {
            [styles.invisibleImage]: !isVisible,
        })} draggable="false"
            loader={() => currentImage}
            src={currentImage}
            alt={alt}
            width={1}
            height={1}
            unoptimized={true}
        />
    );
};
