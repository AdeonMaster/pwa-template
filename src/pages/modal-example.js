import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';

import Page from './components/page';
import ExampleModal from '~/modals/example-modal';
import { useLocalization } from '~/common/components/localization';
import { openModal } from '~/common/actions/modal-actions';
import { MODAL } from '~/common/constants';

const ModalExample = () => {
  const dispatch = useDispatch();
  const handleModalOpen = useCallback(() => dispatch(openModal(MODAL.EXAMPLE)), [dispatch]);
  const dictionary = useLocalization();

  return (
    <Page title={dictionary.get('page.modal-example')}>
      <div className="container">
        <h5 className="text-center mb-4">Modal example</h5>

        <Button onClick={handleModalOpen}>Open example modal</Button>

        <ExampleModal />
      </div>
    </Page>
  );
};

export default ModalExample;
