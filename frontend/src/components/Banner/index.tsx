import Image from 'next/image'
import banner from '../../../public/images/hero_1_a.jpg'
import styles from './styles.module.scss'
import { Calculator } from '../Calculator';
export const Banner = () => {
return (
  <div className={styles.banner__block}>
    <Image src={banner} alt='banner' className={styles.img}/>
      <Calculator/>
  </div>
)

}
