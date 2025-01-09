import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { Htag } from '../../Common/Htag/Htag';
import TgIcon from './tg.svg'
import cn from 'classnames';


export const Button = ({ text, type, isIcon, size, className, onClick }: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, className, {
            [styles.whiteButton]: type === 'white',
            [styles.grayButton]: type === 'gray',
            [styles.iconButton]: isIcon,
            [styles.sizeS]: size === 's',
        })} onClick={onClick}>
            {
                isIcon && <TgIcon />
            }
            <Htag tag={size} className={styles.text}>
                {text}
            </Htag>
        </button>
    );
};
