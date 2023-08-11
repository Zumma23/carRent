import {Box, FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectProps} from '@mui/material';
import { FC } from 'react';


export const Select: FC<SelectProps> = () =>{

  return(
   <Box sx={{width: '200px'}}>
    <FormControl fullWidth>
      <InputLabel>Select Type</InputLabel>
      <MuiSelect>
      <MenuItem>Car</MenuItem>
      <MenuItem>Car</MenuItem>
      <MenuItem>Car</MenuItem>
      </MuiSelect>
    </FormControl>
   </Box>
  )

}
