import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import useModal from '~/common/hooks/use-modal';
import { MODAL } from '~/common/constants';
import useDictionary from '~/@adeon/localization/hooks/use-dictionary';

const handleRefreshButtonClick = () => {
  window.location.reload();
};

const NewVersionModal = () => {
  const { isOpen, toggle, onOpened, onClosed } = useModal(MODAL.NEW_VERSION);
  const dictionary = useDictionary();

  return (
    <Modal isOpen={isOpen} toggle={toggle} onOpened={onOpened} onClosed={onClosed} size="lg">
      <ModalHeader toggle={toggle}>{dictionary.get('modal.new-version.header')}</ModalHeader>
      <ModalBody>{dictionary.get('modal.new-version.body')}</ModalBody>
      <ModalFooter>
        <Button color="primary" size="sm" onClick={handleRefreshButtonClick}>
          {dictionary.get('refresh')}
        </Button>
        <Button color="link" size="sm" onClick={toggle}>
          {dictionary.get('later')}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default NewVersionModal;
