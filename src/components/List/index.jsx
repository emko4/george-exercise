import React from 'react';
import PropTypes from 'prop-types';

import CurrencyItem from '../CurrencyItem';

import hocConnect from './hocConnect';

import './style.scss';

const List = (props) =>  {
  const { data, searchText } = props;

  const regex = new RegExp(searchText, 'i');

  const items = data.filter(({ currency, currencyName }) => (
    regex.test(currency) || regex.test(currencyName)
  )).map((item) => (
    <CurrencyItem
      key={item.currency}
      item={item}
    />
  ));

  return (
    <div className="List">
      { items }
    </div>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    currency: PropTypes.string.isRequired,
    countryCode: PropTypes.string,
    countryName: PropTypes.string,
    precision: PropTypes.number.isRequired,
    currencyName: PropTypes.string,
    exchangeRate: PropTypes.shape({
      buy: PropTypes.number,
      middle: PropTypes.number,
      sell: PropTypes.number,
    }).isRequired,
  })).isRequired,
  searchText: PropTypes.string.isRequired,
};

export default hocConnect(List);
