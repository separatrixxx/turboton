import styles from './MainPage.module.css';
import { Toaster } from 'react-hot-toast';
import { AiArtsBlock } from '../../components/AiArtsComponents/AiArtsBlock/AiArtsBlock';
import { Footer } from '../../components/Common/Footer/Footer';
import { GameBlock } from '../../components/GameBlockComponents/GameBlock/GameBlock';
import { MainBlock } from '../../components/MainBlockComponents/MainBlock/MainBlock';
import { NftBlock } from '../../components/NftBlockComponents/NftBlock/NftBlock';
import { ChartBlock } from '../../components/ChartBlockComponents/ChartBlock/ChartBlock';


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
                <ChartBlock />
                <GameBlock />
                <NftBlock />
                <AiArtsBlock />
                <Footer />
            </div>
        </>
    );
};
