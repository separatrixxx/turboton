import { HeaderMob } from "../HeaderMob/HeaderMob";
import { HeaderWeb } from "../HeaderWeb/HeaderWeb";

export const Header = (): JSX.Element => {
	return (
        <>
            <HeaderWeb />
            <HeaderMob />
        </>
    );
};