import React from 'react';
import PropTypes from 'prop-types';

import LocalizationContext from './localization-context';

const LocalizationProdiver = ({ children, lang, dictionaries }) => (
  <LocalizationContext.Provider value={dictionaries[lang]}>{children}</LocalizationContext.Provider>
);

LocalizationProdiver.propTypes = {
  children: PropTypes.node.isRequired,
  lang: PropTypes.string.isRequired,
  dictionaries: PropTypes.object.isRequired,
};

export default LocalizationProdiver;
