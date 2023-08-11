import {Button as MuiButton, ButtonProps} from '@mui/material'
import { FC } from 'react';

export const Button: FC<ButtonProps> = ({
  title,
  color,
  variant = 'contained',
  size,
}) => (
  
  <MuiButton
   color={color}
   variant={variant}
   size={size}
   >
    {title}
    </MuiButton>

)
