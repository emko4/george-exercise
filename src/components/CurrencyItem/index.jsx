import React  from 'react';
import PropTypes from 'prop-types';
import round from 'lodash/round';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScaleLeft, faBalanceScale, faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons';

import importAllFlags from '../../helpers/importAllFlags';

import './style.scss';

const flags = importAllFlags(require.context('../../assets/flags', false, /\.png$/));

const CurrencyItem = (props) => {
  const { item: { currency, currencyName, countryCode, countryName, precision, exchangeRate: { buy, middle, sell } } } = props;

  const flagSource = flags[countryCode] || null;

  return (
    <div className="CurrencyItem">
      {flagSource && <img
        className="CurrencyItem--flag"
        alt={countryName}
        src={flags[countryCode]}
      />}
      {(currency || countryName) && <div
        className="CurrencyItem--texts"
      >
        {countryName && <div className="CurrencyItem--texts--countryName">{countryName}</div>}
        {currency && <div className="CurrencyItem--texts--currency">
          <span>{currency}</span>
          {currencyName && <span>{` (${currencyName})`}</span>}
        </div>}
      </div>}
      {(buy || middle || sell) && <div
        className="CurrencyItem--exchangeRates"
      >
        {buy && <div
          className="CurrencyItem--exchangeRates--exchangeRate"
        >
          <div className="CurrencyItem--exchangeRates--exchangeRate--title">Buy</div>
          <div className="CurrencyItem--exchangeRates--exchangeRate--value">
            <FontAwesomeIcon icon={faBalanceScaleLeft} />
            <div className="CurrencyItem--exchangeRates--exchangeRate--value--number">
              { round(buy, precision) }
            </div>
          </div>
        </div>}

        {middle && <div
          className="CurrencyItem--exchangeRates--exchangeRate"
        >
          <div className="CurrencyItem--exchangeRates--exchangeRate--title">Middle</div>
          <div className="CurrencyItem--exchangeRates--exchangeRate--value">
            <FontAwesomeIcon icon={faBalanceScale} />
            <div className="CurrencyItem--exchangeRates--exchangeRate--value--number">
              { round(middle, precision) }
            </div>
          </div>
        </div>}

        {sell && <div
          className="CurrencyItem--exchangeRates--exchangeRate"
        >
          <div className="CurrencyItem--exchangeRates--exchangeRate--title">Sell</div>
          <div className="CurrencyItem--exchangeRates--exchangeRate--value">
            <FontAwesomeIcon icon={faBalanceScaleRight} />
            <div className="CurrencyItem--exchangeRates--exchangeRate--value--number">
              { round(sell, precision) }
            </div>
          </div>
        </div>}
      </div>}
    </div>
  );
};

CurrencyItem.propTypes = {
  item: PropTypes.shape({
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
  }).isRequired,
};

export default CurrencyItem;
