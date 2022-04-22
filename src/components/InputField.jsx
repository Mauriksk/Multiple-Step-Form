import { TextField } from '@mui/material'
import { FieldConfig, useField } from 'formik'
import React from 'react'

export const InputField = ({label, ...props}) => {
  
  const [field, meta] = useField(props)

    return (
    <TextField
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
