import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';

import useDictionary from '~/@adeon/localization/hooks/use-dictionary';
import Page from '~/pages/common/components/page';
import ExampleModal from '~/modals/example-modal';
import { openModal } from '~/common/actions/modal-actions';
import { MODAL } from '~/common/constants';

const modalParams = {
  body: 'Example body content',
};

const ModalExample = () => {
  const dispatch = useDispatch();
  const dictionary = useDictionary();

  const handleClick = useCallback(() => dispatch(openModal(MODAL.EXAMPLE, modalParams)), [
    dispatch,
  ]);

  return (
    <Page title={dictionary.get('page.modal-example')}>
      <div className="container">
        <h5 className="text-center mb-4">{dictionary.get('page.modal-example')}</h5>

        <Button color="primary" onClick={handleClick}>
          Open example modal
        </Button>

        <ExampleModal />
      </div>
    </Page>
  );
};

export default ModalExample;
