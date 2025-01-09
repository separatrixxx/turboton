import styles from './RightImagesGrid.module.css';
import Image from 'next/image';


export const RightImagesGrid = (): JSX.Element => {
    return (
        <div className={styles.rightImagesGrid}>
            <Image className={styles.aiRightImage} draggable='false'
                loader={() => '/AiImage1.webp'}
                src='/AiImage1.webp'
                alt={'ai image 1'}
                width={1}
                height={1}
                unoptimized={true}
            />
            <div>
                <Image className={styles.aiRightImage} draggable='false'
                    loader={() => '/AiImage2.webp'}
                    src='/AiImage2.webp'
                    alt={'ai image 2'}
                    width={1}
                    height={1}
                    unoptimized={true}
                />
                <Image className={styles.aiRightImage} draggable='false'
                    loader={() => '/AiImage3.webp'}
                    src='/AiImage3.webp'
                    alt={'ai image 3'}
                    width={1}
                    height={1}
                    unoptimized={true}
                />
            </div>
        </div>
    );
};