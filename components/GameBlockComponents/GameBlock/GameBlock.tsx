import styles from './GameBlock.module.css';
import Glow from './glow.svg';;
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { TextBlock } from '../../NftBlockComponents/TextBlock/TextBlock';


export const GameBlock = (): JSX.Element => {
    const { router } = useSetup();

    const link1 = process.env.NEXT_PUBLIC_GAME_LINK_1 || '/';
    const link2 = process.env.NEXT_PUBLIC_GAME_LINK_2 || '/';

    return (
        <div className={styles.gameBlock}>
            {/* <Glow className={styles.glow} /> */}
            <div className={styles.gameDiv}>
                <TextBlock title={setLocale(router.locale).game_title}
                    text1={setLocale(router.locale).game_text_1}
                    text2={setLocale(router.locale).game_text_2}
                    buttonText1={setLocale(router.locale).play_in_telegram}
                    buttonText2={setLocale(router.locale).learn_more}
                    link1={link1} link2={link2} isWhite={true} />
                <div />
            </div>
        </div>
    );
};