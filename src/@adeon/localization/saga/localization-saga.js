import { all, call } from 'redux-saga/effects';

import { globalWindowPath } from '../constants';
import { getLocalizationFileRequest } from '../requests';

export function* loadLocalizationSaga(lang) {
  const [response, error] = yield call(getLocalizationFileRequest, lang);

  if (!window[globalWindowPath]) {
    window[globalWindowPath] = {};
  }

  if (error) {
    // eslint-disable-next-line no-console
    console.error(`Localization: Can't load localization file (${lang})`);

    window[globalWindowPath][lang] = {};
    return;
  }

  window[globalWindowPath][lang] = response.data;
}

export function* loadAllLocalizationSaga(langs) {
  yield all(langs.map((lang) => call(loadLocalizationSaga, lang)));
}
