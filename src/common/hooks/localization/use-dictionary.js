import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import { pathOr } from 'ramda';

import { getLang } from '~/common/selectors/app-selectors';
import { GLOBAL_LOCALE_WINDOW_PATH } from '~/common/constants';

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

const useDictionary = (lang) => {
  const currentLang = useSelector(getLang);

  const content = useMemo(
    () => pathOr({}, [GLOBAL_LOCALE_WINDOW_PATH, lang !== undefined ? lang : currentLang], window),
    [lang, currentLang],
  );
  const get = useMemo(() => getTranslatedString(content), [content]);

  return { get, content };
};

export default useDictionary;
