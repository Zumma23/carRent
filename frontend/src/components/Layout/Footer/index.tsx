import styles from './styles.module.scss';

export const Footer = () =>{ 

  const listPage = [
    {
      label: 'About',
    },
    {
      label: 'Features'
    },
    {
      label: 'Pricing'
    },
    {
      label: 'Resources'
    },
    {
      label: 'Contacts'
    },
  ];

  return (
    <footer className={styles.footer}>
     <div className={styles.footer__wrap}>
     <div className={styles.footer__logo}>
        Logo
      </div>
      <div
       className={styles.footer__phone}
       >
        </div>

      <ul className={styles.footer__list}>
        {listPage.map(link =>
          <li
           key={link.label}
           className={styles.footer__list_item}
           >
            {link.label}
            </li>
          )}
      </ul>

     </div>
    </footer>
  )
}
