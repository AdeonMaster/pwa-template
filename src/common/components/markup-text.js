import { createElement } from 'react';
import PropTypes from 'prop-types';

const MarkupText = ({ content, tag }) =>
  createElement(tag, {
    dangerouslySetInnerHTML: { __html: content },
  });

MarkupText.propTypes = {
  content: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

MarkupText.defaultProps = {
  tag: 'span',
};

export default MarkupText;
