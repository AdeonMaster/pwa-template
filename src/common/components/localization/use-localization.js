import { useContext } from 'react';

import LocalizationContext from './localization-context';

const useLocalization = () => useContext(LocalizationContext);

export default useLocalization;
