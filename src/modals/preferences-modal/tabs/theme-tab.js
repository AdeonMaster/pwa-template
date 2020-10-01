import React, { useCallback } from 'react';
import { CustomInput } from 'reactstrap';
// import useDictionary from '~/@adeon/localization/hooks/use-dictionary';

const switchTheme = (name) => {
  const node = document.documentElement;
  const currentTheme = [...node.classList].find((value) => /.+-theme/.test(value));

  if (currentTheme) {
    node.classList.toggle(currentTheme, false);
  }

  node.classList.toggle(name, true);
};

const ThemeTab = () => {
  // const dictionary = useDictionary();

  const handleThemeChange = useCallback(
    ({ target: { checked } }) => switchTheme(checked ? 'dark-theme' : 'light-theme'),
    [],
  );

  return (
    <>
      <p className="font-weight-medium">Dark mode</p>
      <CustomInput
        type="switch"
        id="switch-theme"
        name="switch-theme"
        label="Turn on dark bootstrap theme"
        onChange={handleThemeChange}
      />
    </>
  );
};

export default ThemeTab;
