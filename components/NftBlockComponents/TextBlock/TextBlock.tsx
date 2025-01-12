import { TextBlockProps } from './TextBlock.props';
import styles from './TextBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { Button } from '../../Common/Button/Button';
import cn from 'classnames';


export const TextBlock = ({ title, text1, text2, buttonText1, buttonText2, link1, link2, isWhite, className }: TextBlockProps): JSX.Element => {
    return (
        <div className={cn(styles.textBlock, className, {
            [styles.whiteTextBlock]: isWhite,
        })}>
            <Htag tag='xxl' className={styles.title}>
                {title}
            </Htag>
            <Htag tag='m'>
                {text1}
            </Htag>
            <Htag tag='m'>
                {text2}
            </Htag>
            <div className={styles.buttonsDiv}>
                <Button className={styles.button} text={buttonText1}
                    type='primary' isIcon={true} size='l' onClick={() => window.open(link1, '_blank')} />
                <Button className={styles.button} text={buttonText2}
                    type='white' size='l' onClick={() => window.open(link2, '_blank')} />
            </div>
        </div>
    );
};