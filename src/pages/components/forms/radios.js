import React from 'react';

import SGDemoArea from '../../../components/SGDemoArea';

const RadioGroup = ({id, numRadios = 2}) => (
  <SGDemoArea
    comp={
      <div className="field">
        {Array.apply(null, Array(numRadios)).map((_, i) => (
          <div key={i}>
            <input
              className=""
              defaultChecked={i === 0}
              id={`${id}-${i}`}
              name={id}
              type="radio"
            />{' '}
            <label htmlFor={`${id}-${i}`}>radio</label>
          </div>
        ))}
      </div>
    }
  />
);

const RadioGroupCustom = ({id, numRadios = 2}) => (
  <SGDemoArea
    comp={
      <div className="field">
        {Array.apply(null, Array(numRadios)).map((_, i) => (
          <div key={i}>
            <input
              className="visuallyhidden"
              defaultChecked={i === 0}
              id={`${id}-${i}`}
              name={id}
              type="radio"
            />{' '}
            <label htmlFor={`${id}-${i}`}>
              <i className="custom-check-radio">
                <i className="custom-check-radio__icon--false">
                  <i className="custom-check-radio__icon__inner">
                    <svg>
                      <use xlinkHref="#icon-radio-false" />
                    </svg>
                  </i>
                </i>

                <i className="custom-check-radio__icon--true">
                  <i className="custom-check-radio__icon__inner">
                    <svg>
                      <use xlinkHref="#icon-radio-true" />
                    </svg>
                  </i>
                </i>
              </i>
              custom radio
            </label>
          </div>
        ))}
      </div>
    }
  />
);

const Radios = ({data}) => {
  return (
    <div>
      <h1>Radios</h1>

      <h2>Standard Radios</h2>
      <RadioGroup id="radio" />

      <h2>Custom Radios</h2>
      <RadioGroupCustom id="radio-custom" />
    </div>
  );
};

export default Radios;
