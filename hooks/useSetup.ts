import { useRouter } from 'next/router';


export const useSetup = () => {
    const router = useRouter();

    return {
        router,
    };
};
