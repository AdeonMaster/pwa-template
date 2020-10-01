export const isPushNotificationSupported = () =>
  window.PushManager && window?.navigator?.serviceWorker;

export const askUserForNotificationPermissions = () => window.Notification.requestPermission();

export const sendPushNotification = async ({ title, ...otherParams }) => {
  const registrations = await window.navigator.serviceWorker.getRegistrations();

  if (!registrations.length) {
    // eslint-disable-next-line no-console
    console.warn('Notification: Not found registered service-workers');
    return;
  }

  await registrations[0].showNotification(title, otherParams);
};
