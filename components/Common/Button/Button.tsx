import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../../Common/Htag/Htag';
import TgIcon from './tg.svg'
import StonfiIcon from './stonfi.svg'
import cn from 'classnames';


export const Button = ({ text, type, isIcon, isStonfi, size, className, onClick }: ButtonProps): JSX.Element => {
    let Icon = TgIcon;

    if (isStonfi) {
        Icon = StonfiIcon
    }

    return (
        <button className={cn(styles.button, className, {
            [styles.whiteButton]: type === 'white',
            [styles.grayButton]: type === 'gray',
            [styles.chartButton]: type === 'chart',
            [styles.iconButton]: isIcon,
            [styles.sizeS]: size === 's',
        })} onClick={onClick}>
            {
                isIcon && <Icon />
            }
            <Htag tag={size} className={styles.text}>
                {text}
            </Htag>
        </button>
    );
};
