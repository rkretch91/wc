import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const SelectLanguage = (props) => {
  const languageToggle = (lang) => {
    if (lang.selected == false) {
      if (lang.langKey == "zh") {
        let language = "中"
        return language
      }
      return lang.langKey
    }
  }

  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} style={{
      color: 'white'
    }}>
      <li className="language-selector" selected={lang.selected}>
        {languageToggle(lang)}
      </li>
    </Link>

  );

  return (
    <section style={{float: 'right'}}>
      <ul>
        {links}
      </ul>
    </section>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
