import { Button } from '@mui/material'
import React from 'react'

export const FormNavigation = (props) => {
  return (
    <div
        style={{
            display: 'flex',
            marginTop: 50,
            justifyContent: 'space-between'
        }}
    >
        {props.hasPrevious && <Button onClick={props.onBackClick} type='button' variant='contained' >Back</Button>}

        <Button variant='outlined' type='submit' color='primary' >{props.isLastStep ? 'Submit' : 'Next'}</Button>
    </div>
  )
}
