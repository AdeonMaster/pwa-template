import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import useModal from '~/common/hooks/use-modal';
import { MODAL } from '~/common/constants';

const ExampleModal = () => {
  const { isOpen, toggle, params, onOpened, onClosed } = useModal(MODAL.EXAMPLE);

  return (
    <Modal isOpen={isOpen} toggle={toggle} onOpened={onOpened} onClosed={onClosed} size="lg">
      <ModalHeader toggle={toggle}>Header</ModalHeader>
      <ModalBody>{params.body}</ModalBody>
      <ModalFooter>
        <Button color="primary" size="sm" onClick={toggle}>
          Ok
        </Button>
        <Button color="link" size="sm" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ExampleModal;
