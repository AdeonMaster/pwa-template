import React, { useCallback } from 'react';
import { CustomInput, FormText } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { values } from 'ramda';

import { LANG, LANG_NAME } from '~/common/constants';
import useDictionary from '~/@adeon/localization/hooks/use-dictionary';

import { getLang } from '~/common/selectors/app-selectors';
import { setLang } from '~/common/actions/app-actions';

const langValues = values(LANG);

const LanguageTab = () => {
  const dictionary = useDictionary();
  const dispatch = useDispatch();
  const lang = useSelector(getLang);

  const handleLanguageChange = useCallback(({ target: { value } }) => dispatch(setLang(value)), [
    dispatch,
  ]);

  return (
    <>
      <p className="font-weight-medium">{dictionary.get('language')}</p>
      <CustomInput
        type="select"
        id="language"
        name="language"
        onChange={handleLanguageChange}
        defaultValue={lang}
      >
        {langValues.map((lang) => (
          <option key={lang} value={lang}>
            {LANG_NAME[lang]}
          </option>
        ))}
      </CustomInput>
      <FormText>{dictionary.get('preferences.language.tip')}</FormText>
    </>
  );
};

export default LanguageTab;
