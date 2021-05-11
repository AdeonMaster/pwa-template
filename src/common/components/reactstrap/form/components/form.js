import PropTypes from 'prop-types';
import { Form as ReactstrapForm } from 'reactstrap';
import { useForm, FormProvider } from 'react-hook-form';

const Form = ({ className, children, onSubmit, ...otherProps }) => {
  const form = useForm({ ...otherProps });

  const handleFormSubmit = form.handleSubmit((formValues) => onSubmit(formValues, form));

  return (
    <FormProvider {...form}>
      <ReactstrapForm className={className} onSubmit={handleFormSubmit}>
        {children}
      </ReactstrapForm>
    </FormProvider>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Form;
