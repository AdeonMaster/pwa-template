import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCog } from '@fortawesome/free-solid-svg-icons';

import { MODAL } from '~/common/constants';
import useDictionary from '~/@adeon/localization/hooks/use-dictionary';
import useModal from '~/common/hooks/use-modal';

import { Switch, Case } from '~/common/components/switch-case';
import LanguageTab from './tabs/language-tab';
import ThemeTab from './tabs/theme-tab';

const TabList = ({ children }) => <div className="tab-list">{children}</div>;
TabList.propTypes = {
  children: PropTypes.node.isRequired,
};

const TabListItem = ({ onClick, active, children }) => (
  <Button onClick={onClick} color={active ? 'primary' : 'white'} block className="text-left">
    {children}
  </Button>
);
TabListItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

const PreferencesModal = () => {
  const { isOpen, toggle, onOpened, onClosed } = useModal(MODAL.PREFERENCES);
  const dictionary = useDictionary();
  const [tab, setTab] = useState('language');

  return (
    <Modal isOpen={isOpen} toggle={toggle} onOpened={onOpened} onClosed={onClosed} size="lg">
      <ModalHeader toggle={toggle}>{dictionary.get('preferences')}</ModalHeader>
      <ModalBody style={{ minHeight: '30vh' }}>
        <Row>
          <Col xs={4}>
            <TabList>
              <TabListItem active={tab === 'language'} onClick={() => setTab('language')}>
                <FontAwesomeIcon icon={faCog} className="mr-1" />
                {dictionary.get('preferences.language')}
              </TabListItem>
              <TabListItem active={tab === 'theme'} onClick={() => setTab('theme')}>
                <FontAwesomeIcon icon={faPalette} className="mr-1" />
                {dictionary.get('preferences.theme')}
              </TabListItem>
            </TabList>
          </Col>
          <Col xs={8}>
            <Switch condition={tab}>
              <Case value="language">
                <LanguageTab />
              </Case>

              <Case value="theme">
                <ThemeTab />
              </Case>
            </Switch>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default PreferencesModal;
