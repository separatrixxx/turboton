import styles from './RightImagesGrid.module.css';
import { AnimatedImage } from '../AnimatedImage/AnimatedImage';


export const RightImagesGrid = (): JSX.Element => {
    const images1 = Array.from({ length: 6 }, (_, i) => `/AiImage${i + 3}.webp`);
    const images2 = Array.from({ length: 6 }, (_, i) => `/AiImage${i + 9}.webp`);
    const images3 = Array.from({ length: 5 }, (_, i) => `/AiImage${i + 15}.webp`);

    return (
        <div className={styles.rightImagesGrid}>
            <AnimatedImage className={styles.aiRightImage} images={images1} alt='ai image 3' />
            <div>
                <AnimatedImage className={styles.aiRightImage} images={images2} alt='ai image 4' />
                <AnimatedImage className={styles.aiRightImage} images={images3} alt='ai image 5' />
            </div>
        </div>
    );
};
