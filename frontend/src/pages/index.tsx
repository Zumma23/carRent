import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './styles.module.scss'
import { Banner, Calculator, CardItem, Layout, Steps } from '../components';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <main className={`${styles.main}`}>
        <section style={{marginTop: '30px'}}>
          <Calculator/>
        </section>
        <section style={{marginTop: '30px', marginBottom: '170px'}}>
          <Steps/>
        </section>

        <section>
          <CardItem/>
        </section>
      </main>
    </Layout>
  )
}
