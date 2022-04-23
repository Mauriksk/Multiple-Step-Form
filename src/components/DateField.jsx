import { TextField } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { useField } from 'formik'
import React from 'react'


export const DateField = ({setValue,value,label, ...props}) => {
  
    const [field, meta] = useField(props)
    
    console.log(value)
    console.log(props)
    console.log(field)
  
      return (
        <DatePicker
        
          label={label}
          {...field}
          {...props}
          error={ meta.touched && Boolean(meta.error) }
          helperText={meta.touched && meta.error}
          
          onChange={(value) => {
            setValue(value);
            props.value = value
            //props.value = value
          }}
          value={value}
          renderInput={(params) => <TextField fullWidth style={{marginTop:"30px"}}
          {...params}
          />}
        />
    )
  }
  