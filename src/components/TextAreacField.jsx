import { TextField } from '@mui/material'
import { useField } from 'formik'
import React from 'react'


export const TextAreaField = ({label, ...props}) => {
  
    const [field, meta] = useField(props)
  
      return (
      <TextField
          multiline={true}
          minRows={3}
          fullWidth 
          label={label} 
          {...field}
          {...props} 
          error={ meta.touched && Boolean(meta.error) }
          helperText={meta.touched && meta.error}
          style={{marginTop:30}}
      />
    )
  }