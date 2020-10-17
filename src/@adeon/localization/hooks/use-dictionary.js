import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { getLang } from '~/common/selectors/app-selectors';

import { globalWindowPath } from '../constants';
import { getTranslatedString } from '../utils';

const useDictionary = (lang) => {
  const currentLang = useSelector(getLang);

  const content = useMemo(
    () => window[globalWindowPath][lang !== undefined ? lang : currentLang] || {},
    [lang, currentLang],
  );
  const get = useMemo(() => getTranslatedString(content), [content]);

  return { get, content };
};

export default useDictionary;
