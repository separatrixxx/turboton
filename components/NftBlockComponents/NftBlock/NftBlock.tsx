import styles from './NftBlock.module.css';
import Glow from './glow.svg';
import { NftTape } from '../NftTape/NftTape';
import { TextBlock } from '../TextBlock/TextBlock';
import { setLocale } from '../../../helpers/locale.helper';
import { useSetup } from '../../../hooks/useSetup';
import { useResizeW } from '../../../hooks/useResize';


export const NftBlock = (): JSX.Element => {
    const { router } = useSetup();

    const link1 = process.env.NEXT_PUBLIC_NFT_LINK || '/';
    const link2 = process.env.NEXT_PUBLIC_STICKER_PACK_LINK || '/';

    const width = useResizeW();

    return (
        <div className={styles.nftBlock}>
            <Glow className={styles.glow} />
            <div className={styles.nftDiv}>
                <div className={styles.tapeDiv}>
                    <NftTape direction={width > 1024 ? 'top' : 'right'} speed={1} />
                    <NftTape direction={width > 1024 ? 'bottom' : 'left'} speed={0.5} />
                </div>
                <TextBlock className={styles.nftTextBlock}
                    title={setLocale(router.locale).nft_title}
                    text1={setLocale(router.locale).nft_text_1}
                    text2={setLocale(router.locale).nft_text_2}
                    buttonText1={setLocale(router.locale).get_sticker_pack}
                    buttonText2={setLocale(router.locale).see_the_nft_collection}
                    link1={link1} link2={link2} />
            </div>
        </div>
    );
};