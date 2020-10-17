import request from '~/common/utils/request';

export const getLocalizationFileRequest = (lang) =>
  request({
    method: 'GET',
    url: `${window.location.origin}/locale/${lang}.locale.json`,
  });

export const getTranslatedString = (content) => (path, check = true) => {
  if (check) {
    if (content[path]) {
      return content[path];
    }

    if (content[path] === undefined) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.error(`Localization: Unknown dictionary path (${path})`);
      }
      return path;
    }

    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error(`Localization: Dictionary path (${path}) exists but is empty`);
    }
    return path;
  }

  return content[path];
};
