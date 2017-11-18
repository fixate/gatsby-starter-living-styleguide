import React from 'react';

const CheckboxGroup = ({id, numCheckboxes = 2}) =>
  <div className="field">
    {Array.apply(null, Array(numCheckboxes)).map((_, i) =>
      <div key={i}>
        <input
          className=""
          type="checkbox"
          id={`${id}-${i}`}
          defaultChecked={i === 0}
        />{' '}
        <label htmlFor={`${id}-${i}`}>checkbox</label>
      </div>
    )}
  </div>;

const CheckboxGroupCustom = ({id, numCheckboxes = 2}) =>
  <div className="field">
    {Array.apply(null, Array(numCheckboxes)).map((_, i) =>
      <div key={i}>
        <input
          className="visuallyhidden"
          type="checkbox"
          id={`${id}-${i}`}
          defaultChecked={i === 0}
        />{' '}
        <label htmlFor={`${id}-${i}`}>
          <i className="custom-check-radio">
            <i className="custom-check-radio__icon--false">
              <i className="custom-check-radio__icon__inner">
                <svg>
                  <use xlinkHref="#icon-checkbox-false" />
                </svg>
              </i>
            </i>

            <i className="custom-check-radio__icon--true">
              <i className="custom-check-radio__icon__inner">
                <svg>
                  <use xlinkHref="#icon-checkbox-true" />
                </svg>
              </i>
            </i>
          </i>
          custom checkbox
        </label>
      </div>
    )}
  </div>;

const Checkboxes = ({data}) => {
  return (
    <div>
      <h1>Checkboxes</h1>

      <h2>Standard Checkboxes</h2>
      <CheckboxGroup id="checkbox" />
      <br />

      <h2>Custom Checkboxes</h2>
      <CheckboxGroupCustom id="checkbox-custom" />
    </div>
  );
};

export default Checkboxes;
