import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomInput } from 'reactstrap';
import { toggleDarkMode } from '~/common/actions/app-actions';
import { getIsDarkMode } from '~/common/selectors/app-selectors';
// import useDictionary from '~/common/hooks/localization/use-dictionary';

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
  const isDarkMode = useSelector(getIsDarkMode);
  const dispatch = useDispatch();

  const handleThemeChange = useCallback(
    ({ target: { checked } }) => {
      dispatch(toggleDarkMode(checked));
      switchTheme(checked ? 'dark-theme' : 'light-theme');
    },
    [dispatch],
  );

  return (
    <>
      <p className="font-weight-medium">Dark mode</p>
      <CustomInput
        type="switch"
        id="switch-theme"
        name="switch-theme"
        label="Turn on dark bootstrap theme"
        defaultChecked={isDarkMode}
        onChange={handleThemeChange}
      />
    </>
  );
};

export default ThemeTab;
