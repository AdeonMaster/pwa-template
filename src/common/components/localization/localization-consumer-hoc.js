import React from 'react';

import LocalizationContext from './localization-context';

export default (Component) =>
  function withLocalization(props) {
    return (
      <LocalizationContext.Consumer>
        {(context) => <Component dictionary={context} {...props} />}
      </LocalizationContext.Consumer>
    );
  };
