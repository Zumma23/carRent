import { DateTimePicker } from '@mui/x-date-pickers';
import { Button, Select } from '..';
import styles from './styles.module.scss';

export const Calculator = () =>{

  return (
    <div>
       <div className={styles.calculator__title}>
        <span>Rent a car</span> is within your finger tips
        </div>

        <div className={styles.calculator__search_block}>
         <Select/>
         <DateTimePicker label='Pick Up'/>
         <DateTimePicker label='Drop off'/>

          <Button
            title='Search Now'
            variant='contained'
            color='info'
          />

        </div>
    </div>
  )
}
