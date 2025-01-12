import { NftTapeProps } from './NftTape.props';
import styles from './NftTape.module.css';
import Image from 'next/image';
import cn from 'classnames';


export const NftTape = ({ direction, speed }: NftTapeProps): JSX.Element => {
    const animationDuration = 10 / speed;

    const tape = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <div className={styles.nftTape}>
            <div className={cn(styles.tape, styles[direction])}
                style={{ '--animation-duration': `${animationDuration}s` } as React.CSSProperties}>
                <div className={styles.tapeContent}>
                    {tape.map(t => (
                        <div key={t} className={cn(styles.square)}>
                            <Image className={styles.squareImage} draggable='false'
                                loader={() => `/TapeImage${t}.webp`}
                                src={`/TapeImage${t}.webp`}
                                alt={`tape image ${t}`}
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.tapeContent}>
                    {tape.map(t => (
                        <div key={t} className={cn(styles.square)}>
                            <Image className={styles.squareImage} draggable='false'
                                loader={() => `/TapeImage${t}.webp`}
                                src={`/TapeImage${t}.webp`}
                                alt={`tape image ${t}`}
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.tapeContent}>
                    {tape.map(t => (
                        <div key={t} className={cn(styles.square)}>
                            <Image className={styles.squareImage} draggable='false'
                                loader={() => `/TapeImage${t}.webp`}
                                src={`/TapeImage${t}.webp`}
                                alt={`tape image ${t}`}
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
