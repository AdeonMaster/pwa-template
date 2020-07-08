import React from 'react';

import { Modal, Button } from '~/@adeon/bootstrap';
import Page from './components/page';

const ModalExample = () => {
  return (
    <Page title="Modal example">
      <div className="container">
        <h5 className="text-center mb-4">Modal example</h5>

        <Button>Toggle modal</Button>

        <Modal
          isOpen={true}
          onShow={() => console.log('show')}
          onShown={() => console.log('shown')}
          onHide={() => console.log('hide')}
          onHidden={() => console.log('hidden')}
        >
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Modal title
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">Test body text</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Understood
            </button>
          </div>
        </Modal>
      </div>
    </Page>
  );
};

export default ModalExample;
