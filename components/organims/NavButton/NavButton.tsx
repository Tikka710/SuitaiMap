import classNames from 'classnames';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import { FC, useEffect, useContext } from 'react'
import styles from './styles.module.scss';



export const NavButton: FC = () => {
    const onClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {

    }

    return (
        <nav className="fixed left-0 bottom-0 z-20 w-full bg-back border-t border-t-shadow">
         <ul className="flex justify-center max-w-md sm:max-w-xl mx-auto">
         <li className="flex-auto w-1/2">
          <Link href="/my">
            <a className={styles.button}>
              <HomeIcon className="text-2xl" />
              ホーム
            </a>
          </Link>
        </li>
         </ul>

        </nav>
    )
}