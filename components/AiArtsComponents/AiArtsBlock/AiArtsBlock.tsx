import styles from './AiArtsBlock.module.css';
import Image from 'next/image';
import { useSetup } from '../../../hooks/useSetup';
import { Htag } from '../../Common/Htag/Htag';
import { setLocale } from '../../../helpers/locale.helper';
import { Button } from '../../Common/Button/Button';
import { RightImagesGrid } from '../RightImagesGrid/RightImagesGrid';
import { LeftImagesGrid } from '../LeftImagesGrid/LeftImagesGrid';


export const AiArtsBlock = (): JSX.Element => {
    const { router } = useSetup();

    const link = process.env.NEXT_PUBLIC_AI_ARTS_LINK;

    return (
        <div className={styles.aiArtsBlock}>
            <div className={styles.aiArtsDiv1}>
                <Htag tag='xxl' className={styles.aiArtsTitle}>
                    {setLocale(router.locale).ai_arts}
                </Htag>
                <Htag tag='l' className={styles.aiArtsText}>
                    {setLocale(router.locale).ai_arts_text}
                </Htag>
                <Button className={styles.aiArtsButton} text={setLocale(router.locale).choose_you_weekly_art}
                    type='gray' size='l' onClick={() => window.open(link, '_blank')} />
                <LeftImagesGrid />
            </div>
            <RightImagesGrid />
        </div>
    );
};