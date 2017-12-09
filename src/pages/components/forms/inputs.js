import React from 'react';

import SGDemoArea from '../../../components/SGDemoArea';

const getInputMarkup = ({...inputProps}) => (
  <div className="field">
    <label htmlFor="">label</label>

    <input {...inputProps} />
  </div>
);
const getTextareaMarkup = ({...inputProps}) => (
  <div className="field">
    <label htmlFor="">label</label>
    <textarea {...inputProps} />
  </div>
);

const Inputs = () => {
  return (
    <div>
      <h1>Inputs</h1>

      <form>
        <SGDemoArea comp={getInputMarkup({defaultValue: 'text value'})} />

        <SGDemoArea comp={getInputMarkup({placeholder: 'placeholder text'})} />
      </form>

      <h2>Passwords</h2>
      <form>
        <SGDemoArea
          comp={getInputMarkup({type: 'password', defaultValue: 'text value'})}
        />

        <SGDemoArea
          comp={getInputMarkup({
            type: 'password',
            placeholder: 'placeholder text',
          })}
        />
      </form>

      <h2>Textareas</h2>

      <form>
        <SGDemoArea
          comp={getTextareaMarkup({
            rows: 5,
            cols: 30,
            placeholder: 'placeholder text',
          })}
        />
      </form>
    </div>
  );
};

export default Inputs;
