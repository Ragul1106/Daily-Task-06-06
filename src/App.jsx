import React from 'react';
import './App.css';

import ControlledForm from './components/ControlledForm';
import CheckboxForm from './components/CheckboxForm';
import SelectForm from './components/SelectForm';
import UncontrolledForm from './components/UnControlledForm';
import ValidationForm from './components/ValidationForm';
import MultiFieldForm from './components/MultiFieldForm';
import RadioButtonForm from './components/RadioButtonForm';
import CustomHookForm from './components/useForm';
import ComplexForm from './components/formReducer';

const App = () => {
  return (
    <div className="py-5">
      <ControlledForm />
      <CheckboxForm/>
      <SelectForm/>
      <MultiFieldForm/>
      <RadioButtonForm/>
      <UncontrolledForm/>
      <CustomHookForm/>
      <ValidationForm/>
      <ComplexForm/>
    </div>
  );
};

export default App;