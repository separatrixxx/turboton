import { AiArtsBlock } from '../../components/AiArtsComponents/AiArtsBlock/AiArtsBlock';
import { Footer } from '../../components/Common/Footer/Footer';
import { MainBlock } from '../../components/MainBlockComponents/MainBlock/MainBlock';
import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';


export const MainPage = (): JSX.Element => {   
    return (
        <>
            <Toaster
				position="top-center"
				reverseOrder={true}
				toastOptions={{
					duration: 2000,
				}}
			/>
            <div className={styles.wrapper}>
                <MainBlock />
                <AiArtsBlock />
                <Footer />
            </div>
        </>
    );
};
