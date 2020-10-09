import React from 'react';
import { Button } from 'reactstrap';

import useDictionary from '~/@adeon/localization/hooks/use-dictionary';
import Page from '~/pages/common/components/page';
import {
  askUserForNotificationPermissions,
  sendPushNotification,
} from '~/common/utils/push-notification';

const PushNotificationExample = () => {
  const dictionary = useDictionary();

  const handleAskPermissions = () => {
    askUserForNotificationPermissions().then((value) => {
      // eslint-disable-next-line no-console
      console.log(value);
    });
  };

  const handleSendPushNotification = () => {
    sendPushNotification({
      title: 'Example push notification',
      body: 'This is example push notification',
      icon: '/img/icons/192x192.png',
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      sound: 'default',
    });
  };

  const handleSendTimeoutPushNotification = () => {
    setTimeout(() => {
      sendPushNotification({
        title: 'Example push notification with timeout',
        body: 'This is example push notification with timeout',
        icon: '/img/icons/192x192.png',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        sound: 'default',
      });
    }, 5000);
  };

  return (
    <Page title={dictionary.get('page.push-notification-example')}>
      <div className="container">
        <h5 className="text-center mb-4">{dictionary.get('page.push-notification-example')}</h5>

        <div className="d-flex flex-wrap justify-content-center">
          <Button className="mr-2 mb-2" color="danger" onClick={handleAskPermissions}>
            Ask for permissions
          </Button>

          <Button className="mr-2 mb-2" color="primary" onClick={handleSendPushNotification}>
            Send Push Notification
          </Button>

          <Button className="mr-2 mb-2" color="primary" onClick={handleSendTimeoutPushNotification}>
            Send Timeout Push Notification
          </Button>
        </div>
      </div>
    </Page>
  );
};

export default PushNotificationExample;
