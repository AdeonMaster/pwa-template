import React from 'react';
import PropTypes from 'prop-types';
import { Form as ReactstrapForm } from 'reactstrap';
import { useForm, FormProvider } from 'react-hook-form';

const Form = ({ onSubmit, defaultValues, className, children }) => {
  const formMethods = useForm({ defaultValues });

  const { handleSubmit } = formMethods;

  const handleFormSubmit = handleSubmit((formValues) => onSubmit(formValues, formMethods));

  return (
    <FormProvider {...formMethods}>
      <ReactstrapForm className={className} onSubmit={handleFormSubmit}>
        {children}
      </ReactstrapForm>
    </FormProvider>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Form.defaultProps = {
  defaultValues: {},
};

export default Form;
