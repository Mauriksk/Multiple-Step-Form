import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function RadioButtons({setHorarioValue, horarioValue}) {
  return (
    <FormControl >
      <FormLabel style={{margin:"10px auto", padding:'20px 5px'}} id="demo-row-radio-buttons-group-label">Escoja Un horario</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="12:00-14:00" control={<Radio />} label="12:00-14:00"  disabled={horarioValue.de12a14.disabled} labelPlacement="bottom"  />
        <FormControlLabel value="14:00-16:00" control={<Radio />} label="14:00-16:00"  disabled={horarioValue.de14a16.disabled} labelPlacement="bottom"  />
        <FormControlLabel value="16:00-18:00" control={<Radio />} label="16:00-18:00"  disabled={horarioValue.de16a18.disabled} labelPlacement="bottom"  />
        <FormControlLabel
          value="18:00-20:00"
          disabled={horarioValue.de18a20.disabled}
          control={<Radio />}
          label="18:00-20:00"
          labelPlacement="bottom" 
        />
        <FormControlLabel
          value="20:00-22:00"
          disabled={horarioValue.de20a22.disabled}
          control={<Radio />}
          label="20:00-22:00"
          labelPlacement="bottom" 
        />
      </RadioGroup>
    </FormControl>
  );
}