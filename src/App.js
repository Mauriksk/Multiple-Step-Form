
import { Formik } from 'formik';
import { Button, Card, TextField } from '@mui/material';
import * as yup from 'yup';
import { InputField } from './components/InputField';
import { FormStep, MultiStepForm } from './components/MultiStepForm';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { theme } from './theme/theme';

const validationSchema = yup.object({
  name: yup.string().required("Nombre es requerido"),
  email: yup.string().email('Email is required').required("Email es requerido")
})

function App() {
  return (

    <ThemeProvider theme={theme} >
      <Card variant="outlined" style={{maxWidth:505, margin:"0 auto", padding:'20px 5px', marginTop:200}}>
    <div className="App">
      <header className="App-header">
        <MultiStepForm
          initialValues={{
            name:'',
            email:'',
            street:'',
            country:''
          }}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
          }}
          
        >

          <FormStep 
            stepName='Person' 
            onSubmit={()=> console.log("Step 1 submit")} 
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
          </FormStep>

          <FormStep 
            stepName='Addres' 
            onSubmit={()=> console.log("Step 2 submit")} 
            validationSchema={yup.object({
              street: yup.string().required('Street is required'),
              country: yup.string().required('Country is required')
            })}
          >
              <InputField 
                name='street' 
                label='Street' 
              />

              <InputField 
                name='country' 
                label='Country' 
              />
          </FormStep>

        </MultiStepForm>
      </header>
    </div>
    </Card>
    </ThemeProvider>
  );
}

export default App;

/*
{(formik) => <form onSubmit={formik.handleSubmit}>
              <InputField 
                name='name' 
                label='Nombre' 
              />

              <InputField 
                name='email' 
                label='Email' 
              />

              <Button 
                type='submit' 
                color='primary' 
                variant='contained' 
                style={{marginTop:30}}
              >Enviar</Button>
            </form>}


*/


/*

import { Formik } from 'formik';
import { Button, TextField } from '@mui/material';
import * as yup from 'yup';
import { InputField } from './components/InputField';

const validationSchema = yup.object({
  name: yup.string().required("Nombre es requerido"),
  email: yup.string().email('Email is required').required("Email es requerido")
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Formik
          initialValues={{
            name:'',
            email:''
          }}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={validationSchema}
        >
          {(formik) => <form onSubmit={formik.handleSubmit}>
              <InputField 
                name='name' 
                label='Nombre' 
              />

              <InputField 
                name='email' 
                label='Email' 
              />

              <Button 
                type='submit' 
                color='primary' 
                variant='contained' 
                style={{marginTop:30}}
              >Enviar</Button>
            </form>}
        </Formik>
      </header>
    </div>
  );
}

export default App;



*/



/* 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Formik
          initialValues={{
            name:'',
            email:''
          }}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={validationSchema}
        >
          {(formik) => <form onSubmit={formik.handleSubmit}>
              <TextField 
                fullWidth 
                id='name' 
                name='name' 
                label='Nombre' 
                value={formik.values.name}
                onChange={formik.handleChange}
                error={ formik.touched.name && Boolean(formik.errors.name) }
                helperText={formik.touched.name && formik.errors.name}
                style={{marginTop:30}}
              />

              <TextField 
                fullWidth 
                id='email' 
                name='email' 
                label='Email' 
                value={formik.values.email}
                onChange={formik.handleChange}
                error={ formik.touched.name && Boolean(formik.errors.email) }
                helperText={formik.touched.name && formik.errors.email}
                style={{marginTop:30}}
              />

              <Button 
                type='submit' 
                color='primary' 
                variant='contained' 
                style={{marginTop:30}}
              >Enviar</Button>
            </form>}
        </Formik>
      </header>
    </div>
  );
}

*/
