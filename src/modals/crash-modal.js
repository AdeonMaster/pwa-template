import { useMemo } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

import useModal from '~/common/hooks/use-modal';
import { MODAL } from '~/common/constants';
import MarkupText from '~/common/components/markup-text';

const buildErrorStackMarkupText = (errorInfo) => {
  return errorInfo?.componentStack
    ? errorInfo.componentStack
        .replace(/ {4}/g, '')
        .split(/\n/g)
        .slice(1)
        .map((line) => `<div class="ml-3 text-break">${line}</div>`)
        .join('')
    : '';
};

const CrashModal = () => {
  const {
    isOpen,
    toggle,
    onOpened,
    onClosed,
    params: { error, errorInfo },
  } = useModal(MODAL.CRASH);

  const errorStack = useMemo(() => buildErrorStackMarkupText(errorInfo), [errorInfo]);

  return (
    <Modal isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} size="lg">
      <ModalHeader toggle={toggle}>Application has crashed</ModalHeader>
      <ModalBody>
        <p>An unexpected error occured. Please contact support.</p>

        <div className="text-danger mb-3">
          {error}
          <MarkupText tag="div" content={errorStack} />
        </div>
      </ModalBody>
    </Modal>
  );
};

export default CrashModal;
