import styles from './GameBlock.module.css';
import Glow from './glow.svg';;
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { TextBlock } from '../../NftBlockComponents/TextBlock/TextBlock';
import Image from 'next/image';


export const GameBlock = (): JSX.Element => {
    const { router } = useSetup();

    const link1 = process.env.NEXT_PUBLIC_GAME_LINK_1 || '/';
    const link2 = process.env.NEXT_PUBLIC_GAME_LINK_2 || '/';

    return (
        <div className={styles.gameBlock}>
            <Glow className={styles.glow1} />
            <Glow className={styles.glow2} />
            <div className={styles.gameDiv}>
                <TextBlock title={setLocale(router.locale).game_title}
                    text1={setLocale(router.locale).game_text_1}
                    text2={setLocale(router.locale).game_text_2}
                    buttonText1={setLocale(router.locale).play_in_telegram}
                    buttonText2={setLocale(router.locale).learn_more}
                    link1={link1} link2={link2} isWhite={true} />
                <div className={styles.gameImageDiv}>
                    <Image className={styles.gameImage1} draggable='false'
                        loader={() => '/GameImage1.webp'}
                        src='/GameImage1.webp'
                        alt='game image 1'
                        width={1}
                        height={1}
                        unoptimized={true}
                    />
                    <Image className={styles.gameImage2} draggable='false'
                        loader={() => '/GameImage2.webp'}
                        src='/GameImage2.webp'
                        alt='game image 2'
                        width={1}
                        height={1}
                        unoptimized={true}
                    />
                </div>
            </div>
        </div>
    );
};