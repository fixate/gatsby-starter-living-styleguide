import React from 'react';

const SmallText = () => {
  const makeSmallText = (fontStyle, fontWeight) =>
    <p key={`${fontStyle}${fontWeight}`}>
      <small
        style={{
          fontStyle,
          fontWeight,
        }}>
        Esse consequuntur in doloremque? Nisi quos beatae voluptates velit eaque
        voluptatum.
      </small>
    </p>;

  const fontStyles = ['normal', 'italic'];
  const smallContent = ['normal', 'bold'].map((fontWeight, i) =>
    fontStyles
      .map((fontStyle, j) => makeSmallText(fontStyle, fontWeight))
      .reduce((acc, text) => acc.concat(text), [])
  );

  return (
    <div>
      <h1>Small Text</h1>

      {smallContent.map((s, i) =>
        <div key={i}>
          {s}
        </div>
      )}
    </div>
  );
};

export default SmallText;
