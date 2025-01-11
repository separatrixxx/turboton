import styles from './MainLogo.module.css';
import Logo from './logo.svg';
import LogoText1 from './logoText1.svg';
import LogoText2 from './logoText2.svg';


export const MainLogo = (): JSX.Element => {
    return (
        <div className={styles.mainLogo}>
            <Logo className={styles.logo} />
            <div className={styles.logoTextDiv}>
                <LogoText1 className={styles.logoText1} />
                <LogoText2 className={styles.logoText2} />
            </div>
        </div>
    );
};