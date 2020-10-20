import React from 'react';
import { Button, FormGroup, Label } from 'reactstrap';

import useDictionary from '~/@adeon/localization/hooks/use-dictionary';
import Page from '~/pages/common/components/page';
import Field from '~/pages/common/components/field';
import Form from '~/pages/common/components/form';
import { isNumber } from '~/common/utils/number';

const defaultValues = {
  name: 'Alex',
};

const FormExample = () => {
  const dictionary = useDictionary();

  const handleFormSubmit = (formValues, form) => {
    // eslint-disable-next-line no-console
    console.log(formValues, form);
  };

  return (
    <Page title={dictionary.get('page.form-example')}>
      <div className="container">
        <h5 className="text-center mb-4">{dictionary.get('page.form-example')}</h5>

        <Form onSubmit={handleFormSubmit} defaultValues={defaultValues}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Field
              type="text"
              name="name"
              rules={{
                required: true,
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for="age">Number</Label>
            <Field
              type="text"
              name="age"
              rules={{
                required: true,
                validate: (value) => isNumber(value) || 'Is not a valid number!',
              }}
            />
          </FormGroup>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </div>
    </Page>
  );
};

export default FormExample;
