import styles from './LeftImagesGrid.module.css';
import Image from 'next/image';


export const LeftImagesGrid = (): JSX.Element => {
    return (
        <div className={styles.leftImagesGrid}>
            <Image className={styles.aiRightImage1} draggable='false'
                loader={() => '/AiImage4.webp'}
                src='/AiImage4.webp'
                alt={'ai image 4'}
                width={1}
                height={1}
                unoptimized={true}
            />
            <Image className={styles.aiRightImage2} draggable='false'
                loader={() => '/AiImage5.webp'}
                src='/AiImage5.webp'
                alt={'ai image 5'}
                width={1}
                height={1}
                unoptimized={true}
            />
        </div>
    );
};