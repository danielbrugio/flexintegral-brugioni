import { Formik, Form, Field } from 'formik'
import Button from '../Button/Button';
import './ContactForm.css'

  const validateName = value => {
    let error;
    if (!value) {
      error = 'Please type your name';
    } else if (value.length <= 3) {
      error = 'Please type more than 3 caracters';
    }
    return error;
  }

  const validateEmail = value => {
    let error;
    if (!value) {
      error = 'Please type your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email';
    }
    return error;
  }

  const validatePhone = value => {
    let error;
    if (!value) {
      error = 'Please type your phone number';
    } else if (!/^\d+$/.test(value)) {
      error = "Invalid phone. Type only numbers."
    }
    return error;
  }

  const validateAddress = value => {
    let error;
    if (!value) {
      error = 'Please type your delivery address';
    } else if (value.length <= 8) {
      error = "Please type an address with 8 caracters at least"
    }
    return error;
  }
  
const ContactForm = ({ contactFormRef, setContact }) => {
    
    return (     
      <div>
          <h3>Buyer information</h3>
      <Formik initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
      }} 
      onSubmit={values => {
        setContact(values);
        contactFormRef.toggleVisibility()
      }}
      >
      {({ errors, touched, }) => (
      <Form className='ContactForm'>
        <label className='LabelContact'>Name:
        <Field name="name" validate={validateName} className="InputContact"/>
        {errors.name && touched.name && <div>{errors.name}</div>}</label>
        <label className='LabelContact'>Email:
        <Field name="email" validate={validateEmail} className="InputContact"/>
        {errors.email && touched.email && <div>{errors.email}</div>}</label>
        <label className='LabelContact'>Phone:
        <Field name="phone" validate={validatePhone} className="InputContact"/>
        {errors.phone && touched.phone && <div>{errors.phone}</div>}</label>
        <label className='LabelContact'>Address:
        <Field name="address" validate={validateAddress} className="InputContact"/>
        {errors.address && touched.address && <div>{errors.address}</div>}</label>
        <Button name='Confirm information'/>
      </Form>)}
      </Formik>
      </div> )
}

export default ContactForm