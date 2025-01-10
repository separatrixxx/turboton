import styles from './LinksBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import Link from 'next/link';
import XIcon from './XIcon';
import TgIcon from './TgIcon';
import DsIcon from './DsIcon';
import IgIcon from './IgIcon';
import DexsIcon from './DexsIcon';
import DextIcon from './DextIcon';
import GeckoIcon from './GeckoIcon';
import CmIcon from './CmIcon';


export const LinksBlock = (): JSX.Element => {
    const { router } = useSetup();

    const linksData = [
        { id: 'X', icon: XIcon, url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_2 },
        { id: 'Tg', icon: TgIcon, url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_1 },
        { id: 'Ds', icon: DsIcon, url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_3 },
        { id: 'Ig', icon: IgIcon, url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_8 },
        { id: 'Dexs', icon: DexsIcon, url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_5 },
        { id: 'Dext', icon: DextIcon, url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_4 },
        { id: 'Gecko', icon: GeckoIcon, url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_6 },
        { id: 'Cm', icon: CmIcon, url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_7 },
    ];

    return (
        <div className={styles.linksBlock}>
            <Htag tag='xl' className={styles.linksText}>
                {setLocale(router.locale).official_links}
            </Htag>
            <div className={styles.linksDiv}>
                {linksData.map(link => (
                    link.url &&
                        <Link key={link.id} href={link.url} className={styles.linkIcon}
                            target="_blank" aria-label={`official link for ${link.id}`}>
                            <link.icon />
                        </Link>
                ))}
            </div>
        </div>
    );
};
