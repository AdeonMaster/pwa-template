import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';

import Page from './components/page';
import ExampleModal from '~/modals/example-modal';
import useDictionary from '~/@adeon/localization/hooks/use-dictionary';
import { openModal } from '~/common/actions/modal-actions';
import { MODAL } from '~/common/constants';

const ModalExample = () => {
  const dispatch = useDispatch();
  const dictionary = useDictionary();

  const handleModalOpen = useCallback((type) => () => dispatch(openModal(type)), [dispatch]);

  return (
    <Page title={dictionary.get('page.modal-example')}>
      <div className="container">
        <h5 className="text-center mb-4">{dictionary.get('page.modal-example')}</h5>

        <Button color="primary" onClick={handleModalOpen(MODAL.EXAMPLE)}>
          Open example modal
        </Button>

        <ExampleModal />
      </div>
    </Page>
  );
};

export default ModalExample;
