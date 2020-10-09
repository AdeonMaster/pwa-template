import React, { useCallback, useState } from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faLanguage, faBell } from '@fortawesome/free-solid-svg-icons';

import { MODAL } from '~/common/constants';
import useDictionary from '~/@adeon/localization/hooks/use-dictionary';
import useModal from '~/common/hooks/use-modal';

import { Switch, Case } from '~/common/components/switch-case';

import LanguageTab from './tabs/language-tab';
import ThemeTab from './tabs/theme-tab';
import NotificationsTab from './tabs/notifications-tab';
import { TabList, TabListItem } from './components/tab-list';

const TAB = {
  LANGUAGE: 'language',
  NOTIFICATIONS: 'notifications',
  THEME: 'theme',
};

const PreferencesModal = () => {
  const { isOpen, toggle, onOpened, onClosed } = useModal(MODAL.PREFERENCES);
  const dictionary = useDictionary();
  const [tab, setTab] = useState('language');

  const handleTabChange = useCallback((tab) => () => setTab(tab), [setTab]);

  return (
    <Modal isOpen={isOpen} toggle={toggle} onOpened={onOpened} onClosed={onClosed} size="lg">
      <ModalHeader toggle={toggle}>{dictionary.get('preferences')}</ModalHeader>
      <ModalBody style={{ minHeight: '30vh' }}>
        <Row>
          <Col lg={4}>
            <TabList className="mb-2">
              <TabListItem active={tab === TAB.LANGUAGE} onClick={handleTabChange(TAB.LANGUAGE)}>
                <FontAwesomeIcon icon={faLanguage} className="mr-2" />
                {dictionary.get('preferences.language')}
              </TabListItem>
              <TabListItem
                active={tab === TAB.NOTIFICATIONS}
                onClick={handleTabChange(TAB.NOTIFICATIONS)}
              >
                <FontAwesomeIcon icon={faBell} className="mr-2" />
                {dictionary.get('preferences.notifications')}
              </TabListItem>
              <TabListItem active={tab === TAB.THEME} onClick={handleTabChange(TAB.THEME)}>
                <FontAwesomeIcon icon={faPalette} className="mr-2" />
                {dictionary.get('preferences.theme')}
              </TabListItem>
            </TabList>
          </Col>
          <Col lg={8}>
            <Switch condition={tab}>
              <Case value={TAB.LANGUAGE}>
                <LanguageTab />
              </Case>

              <Case value={TAB.NOTIFICATIONS}>
                <NotificationsTab />
              </Case>

              <Case value={TAB.THEME}>
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
