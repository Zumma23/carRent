import { FC, ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

import styles from './styles.module.scss';

export type LayoutProps = {
  children: ReactNode
}


export const Layout: FC<LayoutProps>  = ({children}) =>{

  return (
    <div className={styles.Layout}>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}
