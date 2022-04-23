import React,{useState} from 'react'
import * as yup from 'yup';

import { Card} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import {  InputField } from './InputField';
import { FormStep, MultiStepForm } from './MultiStepForm';
import { RadioButtons } from './RadioButtons';
import { DateField } from './DateField';
import { TextAreaField } from './TextAreacField';


const validationSchema = yup.object({
  name: yup.string().required("Nombre es requerido"),
  email: yup.string().email('Email is required').required("Email es requerido"),
  number: yup.number().required("Numero es requerido")
})

export const ContainerForm = () => {

    const [value, setValue] = useState(new Date())
    const [horarioValue, setHorarioValue] = useState({
    de12a14: {value: '12:00-14:00', disabled:false},
    de14a16: {value: '14:00-16:00', disabled:false},
    de16a18: {value: '16:00-18:00', disabled:false},
    de18a20: {value: '18:00-20:00', disabled:false},
    de20a22: {value: '20:00-22:00', disabled:false}
    })

    console.log(horarioValue)
  return (
    <Card variant="outlined" style={{maxWidth:605,minHeight:205 ,margin:"0 auto", padding:'20px 5px', marginTop:200}}>
    <div className="App">
      <header className="App-header">
        <MultiStepForm
          initialValues={{
            name:'',
            email:'',
            number: 0,
            date: value,
            hora: '',
            pedido:''
          }}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <FormStep 
            stepName='Date' 
            onSubmit={()=> console.log("Step 1 submit")} 
            validationSchema={yup.object({
            })}
          >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateField 
                  name='date' 
                  label='Date'
                  setValue={setValue}
                  value={value}
                />
              </LocalizationProvider>
          </FormStep>

          <FormStep 
            stepName='Hora' 
            onSubmit={()=> console.log("Step 2 submit")} 
            validationSchema={yup.object({
            })}
          >
              <RadioButtons
                horarioValue={horarioValue}
                setHorarioValue={setHorarioValue}
              />
          </FormStep>

          <FormStep 
            stepName='Contacto' 
            onSubmit={()=> console.log("Step 3 submit")} 
            validationSchema={validationSchema}
          >
              <InputField 
                name='name' 
                label='Nombre' 
              />

              <InputField 
                name='email' 
                label='Email' 
              />

          <InputField 
                name='number' 
                label='Phone Number' 
              />
          </FormStep>

          <FormStep 
            stepName='Pedido' 
            onSubmit={()=> console.log("Step 4 submit")} 
            validationSchema={yup.object({
              pedido: yup.string().required('Pedido es requerido')
            })}
          >
              <TextAreaField
                name='pedido' 
                label='Pedido'
              />
          </FormStep>

        </MultiStepForm>
      </header>
    </div>
    </Card>
  )
}
