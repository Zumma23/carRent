import { Grid } from '@mui/material';
import { stepsList } from './constants';
import styles from './styles.module.scss';

export const Steps = () => {

  return (
    <div className={styles.steps}>
        <div style={{marginBottom: '10px'}}>
          <h3 className={styles.steps__title}>How it works ?</h3>
          <p className={styles.steps__subTitle}>Easy steps to get you started</p>
        </div>
      
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
        {stepsList.map((step)=>
          <div
          className={styles.steps__block}
          key={step.number}
          >
            <p className={styles.steps__block__number}>{step.number}.</p>
            <p className={styles.steps__block__title}>{step.title}</p>
            <p className={styles.steps__block__text}>{step.text}</p>
          </div>
        )}
     </Grid>
    </div>

  )
}
