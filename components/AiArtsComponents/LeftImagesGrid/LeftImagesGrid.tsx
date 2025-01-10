import styles from './LeftImagesGrid.module.css';
import Image from 'next/image';


export const LeftImagesGrid = (): JSX.Element => {
    return (
        <div className={styles.leftImagesGrid}>
            <Image className={styles.aiRightImage1} draggable='false'
                loader={() => '/AiImage1.webp'}
                src='/AiImage1.webp'
                alt={'ai image 1'}
                width={1}
                height={1}
                unoptimized={true}
            />
            <Image className={styles.aiRightImage2} draggable='false'
                loader={() => '/AiImage2.webp'}
                src='/AiImage2.webp'
                alt={'ai image 2'}
                width={1}
                height={1}
                unoptimized={true}
            />
        </div>
    );
};