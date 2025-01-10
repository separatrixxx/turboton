import styles from './LinksBlock.module.css';
import { Htag } from '../../Common/Htag/Htag';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import Link from 'next/link';
import Image from 'next/image';


export const LinksBlock = (): JSX.Element => {
    const { router } = useSetup();

    const linksData = [
        { id: 'Tg', url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_1 },
        { id: 'X', url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_2 },
        { id: 'Ds', url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_3 },
        { id: 'Dext', url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_4 },
        { id: 'Dexs', url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_5 },
        { id: 'Gecko', url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_6 },
        { id: 'Cm', url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_7 },
        { id: 'Ig', url: process.env.NEXT_PUBLIC_OFFICIAL_LINK_8 },
    ];

    return (
        <div className={styles.linksBlock}>
            <Htag tag='xl' className={styles.linksText}>
                {setLocale(router.locale).official_links}
            </Htag>
            <div className={styles.linksDiv}>
                {linksData.map(link => (
                    link.url && (
                        <Link key={link.id} href={link.url} className={styles.linkIcon}
                            target="_blank" aria-label={`official link for ${link.id}`}>
                            <Image className={styles.linkImage} draggable='false'
                                loader={() => `/${link.id}Image.webp`}
                                src={`/${link.id}Image.webp`}
                                alt={`${link.id} image`}
                                width={1}
                                height={1}
                                unoptimized={true}
                            />
                        </Link>
                    )
                ))}
            </div>
        </div>
    );
};
