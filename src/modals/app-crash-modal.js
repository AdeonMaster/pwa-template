import React, { useCallback, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Collapse } from 'reactstrap';

import useModal from '~/common/hooks/use-modal';
import { MODAL } from '~/common/constants';
import MarkupText from '~/common/components/markup-text';

const TEXT = {
  COLLAPSE: 'Collapse',
  EXPAND: 'Expand',
};

const buildErrorStackMarkupText = (errorInfo) => {
  return errorInfo?.componentStack
    ? errorInfo.componentStack
        .replace(/ {4}/g, '')
        .split(/\n/g)
        .slice(1)
        .map((line) => `<span class="ml-3">${line}</span>`)
        .join('<br />')
    : '';
};

const AppCrashModal = () => {
  const {
    isOpen,
    toggle,
    onOpened,
    onClosed,
    params: { error, errorInfo },
  } = useModal(MODAL.APP_CRASH);

  const [isCollapseOpen, setIsCollapseOpen] = useState(false);

  const handleCollapseToggle = useCallback(() => setIsCollapseOpen(!isCollapseOpen), [
    isCollapseOpen,
    setIsCollapseOpen,
  ]);

  const errorStack = buildErrorStackMarkupText(errorInfo);

  return (
    <Modal isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} size="lg">
      <ModalHeader toggle={toggle}>Application has crashed</ModalHeader>
      <ModalBody>
        <p>An unexpected error occured. Please contact support.</p>

        <Collapse isOpen={isCollapseOpen}>
          <div className="text-danger mb-3">
            {error}
            <MarkupText tag="div" content={errorStack} />
          </div>
        </Collapse>

        <Button color="primary" size="sm" onClick={handleCollapseToggle}>
          {isCollapseOpen ? TEXT.COLLAPSE : TEXT.EXPAND}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default AppCrashModal;
