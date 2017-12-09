import React from 'react';

import SGDemoArea from '../../../components/SGDemoArea';

const Selects = ({data}) => {
  return (
    <div>
      <h1>Selects</h1>

      <SGDemoArea
        comp={
          <select name="" id="">
            {Array.apply(null, Array(6)).map((_, i) => (
              <option key={i} value={`${i}`}>
                Option {i}
              </option>
            ))}
          </select>
        }
      />
    </div>
  );
};

export default Selects;
