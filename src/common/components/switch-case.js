import { Children, useMemo } from 'react';
import { values } from 'ramda';

const CASE_COMPONENT = 'Case';
const DEFAULT_COMPONENT = 'Default';

const ERROR_MULTIPLE_CASES_FOUND = 'Error: Each case should have an uniq value';
const ERROR_MULTIPLE_DEFAULT_CASES_FOUND = 'Error: Multiple default cases found';
const ERROR_NOT_A_VALID_NODE = "Error: Non case component won't be rendered";
const ERROR_DEFAULT_CASE_NOT_FOUND = 'Error: Default case is not found';

const Switch = ({ condition, children }) => {
  /* eslint-disable-next-line sonarjs/cognitive-complexity */
  return useMemo(() => {
    const cases = {};
    let defaultCase = null;

    Children.forEach(children, (item) => {
      switch (item.type.displayName) {
        case CASE_COMPONENT: {
          const { value } = item.props;

          if (value === condition) {
            if (cases[value] === undefined) {
              cases[value] = item;
            } else {
              throw new Error(ERROR_MULTIPLE_CASES_FOUND);
            }
          }

          break;
        }

        case DEFAULT_COMPONENT: {
          if (defaultCase) {
            throw new Error(ERROR_MULTIPLE_DEFAULT_CASES_FOUND);
          } else {
            defaultCase = item;
          }

          break;
        }

        default: {
          throw new Error(ERROR_NOT_A_VALID_NODE);
        }
      }
    });

    const caseNodes = values(cases);

    if (caseNodes.length) {
      return caseNodes;
    }

    if (!defaultCase) {
      throw new Error(ERROR_DEFAULT_CASE_NOT_FOUND);
    }

    return defaultCase;
  }, [children, condition]);
};

const Case = ({ children }) => children;

const Default = ({ children }) => children;

Switch.displayName = 'Switch';
Case.displayName = 'Case';
Default.displayName = 'Default';

export { Switch, Case, Default };
