import React from 'react';

import fontVars from '!!sass-variable-loader!../../../shared/css/variables/_fonts.scss';
import WithComputedStyle from '../../../components/WithComputedStyle';
import {splitCamelCaseString} from '../../../utils';

const Fonts = ({data}) => {
  const fontSizes = Object.keys(fontVars).map(key => /fs-/.test(key)).reduce();

  return (
    <div>
      <h1>Margins And Padding</h1>

      <h2>Margins</h2>

      {Object.keys(marPads).map(key =>
        <MarginItemStyled margin={marPads[key]} key={key}>
          ${splitCamelCaseString()(key)}
        </MarginItemStyled>
      )}

      <h2>Padding</h2>

      {Object.keys(marPads).map(key =>
        <PaddingItemStyled padding={marPads[key]} key={key}>
          ${splitCamelCaseString()(key)}
        </PaddingItemStyled>
      )}
    </div>
  );
};

export default Fonts;
