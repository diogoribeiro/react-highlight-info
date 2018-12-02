import PropTypes from 'prop-types';
import React from 'react'

import './Highlight.css';

const propTypes = {
  className: PropTypes.string,
  searchWords: PropTypes.arrayOf(PropTypes.string),
  text: PropTypes.string,
};

const defaultProps = {
  className: '',
  searchWords: ['.+'],
  text: '',
};

const highlightText = (searchWord, text = '') => (
  text.replace(new RegExp(searchWord, 'gi'), (match) => `<span class='highlight'>${match}</span>`)
);

const renderHiglightedText = (searchWords, text) => {
  const a = searchWords.reduce((newText, searchWord) => (
    highlightText(searchWord, newText)
  ), text);

  return a;
};

const Highlight = ({ className, searchWords, text }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={{ __html: renderHiglightedText(searchWords, text) }}
  />
);

Highlight.propTypes = propTypes;
Highlight.defaultProps = defaultProps;

export default Highlight;
