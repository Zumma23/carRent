import styles from './styles.module.scss';

import { listPage } from './constants';

export const Header = () => {
  
  return (
    <header className={styles.header}>
     <div className={styles.header__wrap}>
     <div className={styles.header__logo}>
        Logo
      </div>
      <div
       className={styles.header__phone}
       >
        </div>

      <ul className={styles.header__list}>
        {listPage.map(link =>
          <li
           key={link.label}
           className={styles.header__list_item}
           >
            {link.label}
            </li>
          )}
      </ul>

     </div>
    </header>
  )
}
