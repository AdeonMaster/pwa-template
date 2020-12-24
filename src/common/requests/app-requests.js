import request from '~/common/utils/request';

export const getLocalizationFileRequest = (lang) =>
  request({
    method: 'GET',
    url: `${window.location.origin}/locale/${lang}.locale.json`,
  });
