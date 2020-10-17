import { getFormState, getFormMessage } from '~/common/selectors/form-selectors';
import useExtendedSelector from '~/common/hooks/use-extended-selector';

const useForm = (type) => {
  const props = { form: { type } };

  const state = useExtendedSelector(getFormState, props);
  const message = useExtendedSelector(getFormMessage, props);

  return {
    state,
    message,
  };
};

export default useForm;
