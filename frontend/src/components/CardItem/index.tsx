import Image from 'next/image';
import {items} from './constants';
import car from '../../../public/images/car_1.jpg';
import { Button } from '..';
import styles from './styles.module.scss';
import { Grid } from '@mui/material';

export const CardItem = () =>{

  return (
    <Grid
    container
    display='grid'
    justifyContent='center'
    gridTemplateColumns={{
      xs: 'auto',
      sm:'repeat(2, auto)',
      lg: 'repeat(3, auto)',
    }}
    gap={6}
    >
      {
        items.map((item) =>
        <Grid 
        item
         key={item.photo}
         className={styles.car__wrapper}
         >
         <div
          className={styles.car__img}
         >
         <Image 
          src={car} 
          alt='car'
            />
         </div>

          <p className={styles.car__name}>{item.name}</p>
          <div className={styles.car__price}>${item.price} <span>/ day</span></div>
          <div className={styles.car__options}>
            <div className={styles.car__option}>
              <p className={styles.car__option__text}>Luggage:</p>
              <div>{item.luggage}</div>
            </div>
            <div className={styles.car__option}>
              <p className={styles.car__option__text}>Doors</p>
              <div>{item.doors}</div>
            </div>
            <div className={styles.car__option}>
              <p className={styles.car__option__text}>Passenger:</p>
              <div>{item.passenger}</div>
            </div>
          </div>

          <div className={styles.car__description}>{item.description}</div>

          <Button title='Rent Now'/>

        </Grid>
        )
      }
    </Grid>
  )
}
