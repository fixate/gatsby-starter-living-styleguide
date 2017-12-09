import React from 'react';

import SGDemoArea from '../../components/SGDemoArea';

import {getYamlNode} from '../../utils';
import sgWithPseudoClass from '../../components/hocs/sgWithPseudoClass';

const ButtonWithPseudo = sgWithPseudoClass(
  ({children = '', ...restProps} = {}) => (
    <SGDemoArea comp={<button {...restProps}>button{children}</button>} />
  )
);
const AnchorWithPseudo = sgWithPseudoClass(
  ({children = '', ...restProps} = {}) => (
    <SGDemoArea
      comp={
        <a href="javascript: void(0)" {...restProps}>
          a{children}
        </a>
      }
    />
  )
);
const LabelWithPseudo = sgWithPseudoClass(
  ({children = '', ...restProps} = {}) => (
    <SGDemoArea comp={<label {...restProps}>label{children}</label>} />
  )
);
const InputWithPseudo = sgWithPseudoClass(props => (
  <SGDemoArea comp={<input {...props} />} />
));

const Buttons = ({data}) => {
  const {modifiers, pseudos, states, types} = getYamlNode(
    data,
    'componentsButtons'
  );

  const makeButtonsMarkup = (classNamesArray, pseudoClass) => {
    const className = classNamesArray.join(' ');
    const text = classNamesArray
      .map(c => `.${c}`)
      .join('')
      .concat(pseudoClass ? `:${pseudoClass}` : '');

    return (
      <div key={className}>
        <h3>{text}</h3>

        <div className="btn-container">
          <AnchorWithPseudo className={className} pseudoClass={pseudoClass}>
            {text}
          </AnchorWithPseudo>{' '}
          <ButtonWithPseudo className={className} pseudoClass={pseudoClass}>
            {text}
          </ButtonWithPseudo>{' '}
          <LabelWithPseudo className={className} pseudoClass={pseudoClass}>
            {text}
          </LabelWithPseudo>{' '}
          <InputWithPseudo
            className={className}
            pseudoClass={pseudoClass}
            type="submit"
            value={`input[type=submit]${text}`}
          />
          <ButtonWithPseudo
            className={className}
            pseudoClass={pseudoClass}
            disabled>
            {text}[disabled]
          </ButtonWithPseudo>{' '}
        </div>
        <br />
      </div>
    );
  };

  return (
    <div>
      <h1>Buttons</h1>

      {types.map(type => (
        <div key={type}>
          <h2>.{type}</h2>
          {makeButtonsMarkup([type])}

          {Object.keys(modifiers).map(mkey => (
            <div key={`${type}${mkey}`}>
              {modifiers[mkey].map(val => makeButtonsMarkup([type, val]))}
            </div>
          ))}

          {states.map(state => (
            <div key={`${type}${state}`}>
              {makeButtonsMarkup([type, state])}
            </div>
          ))}

          {pseudos.map(pseudo => (
            <div key={`${type}${pseudo}`}>
              {makeButtonsMarkup([type], pseudo)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Buttons;

export const query = graphql`
  query ButtonsQuery {
    allDataYaml {
      edges {
        node {
          componentsButtons {
            types
            modifiers {
              size
              width
            }
            states
            pseudos
          }
        }
      }
    }
  }
`;
