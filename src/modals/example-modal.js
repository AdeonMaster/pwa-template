import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import withModal from '~/common/hocs/with-modal';
import { MODAL } from '~/common/constants';

const ExampleModal = ({ isOpen, toggle }) => (
  <Modal isOpen={isOpen} toggle={toggle} size="lg">
    <ModalHeader toggle={toggle}>Header</ModalHeader>
    <ModalBody>Body text</ModalBody>
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

ExampleModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default withModal(MODAL.EXAMPLE)(ExampleModal);
