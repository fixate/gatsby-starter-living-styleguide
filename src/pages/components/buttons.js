import React from 'react';

import {getYamlNode} from '../../utils';
import withPseudoClass from '../../components/hocs/withPseudoClass';

const Button = () => <button>button</button>;

const Buttons = ({data}) => {
  const {modifiers, pseudos, states, types} = getYamlNode(data, 'buttons');

  const makeButtonsMarkup = (type, additional, pseudoClass) => {
    const className = `${type} ${additional || ''}`;
    const text = [`.${type}`, additional || pseudoClass].join(
      additional ? '.' : ':'
    );
    const ButtonWithPseudoClass = withPseudoClass(props =>
      <button className={className} {...props}>
        button{text}
      </button>
    );
    const AnchorWithPseudoClass = withPseudoClass(props =>
      <a className={className} {...props} href="#" onClick={() => {}}>
        a{text}
      </a>
    );
    const LabelWithPseudoClass = withPseudoClass(props =>
      <label className={className} {...props}>
        label{text}
      </label>
    );
    const InputWithPseudoClass = withPseudoClass(props =>
      <input
        type="submit"
        className={className}
        value={`input.${type}.${additional}`}
        {...props}
      />
    );

    return (
      <div key={`${type}${additional}`}>
        {additional || pseudoClass
          ? <h3>
              {text}
            </h3>
          : null}

        <div className="btn-container">
          <AnchorWithPseudoClass pseudoClass={pseudoClass} />{' '}
          <ButtonWithPseudoClass pseudoClass={pseudoClass} />{' '}
          <LabelWithPseudoClass pseudoClass={pseudoClass} />{' '}
          <ButtonWithPseudoClass pseudoClass={pseudoClass} disabled />{' '}
        </div>
        <br />
      </div>
    );
  };

  return (
    <div>
      <h1>Buttons</h1>

      {types.map(type =>
        <div key={type}>
          <h2>
            .{type}
          </h2>
          {makeButtonsMarkup(type)}

          {Object.keys(modifiers).map(mkey =>
            <div key={`${type}${mkey}`}>
              {modifiers[mkey].map(val => makeButtonsMarkup(type, val))}
            </div>
          )}

          {states.map(state =>
            <div key={`${type}${state}`}>
              {makeButtonsMarkup(type, state)}
            </div>
          )}

          {pseudos.map(pseudo =>
            <div key={`${type}${pseudo}`}>
              {makeButtonsMarkup(type, undefined, pseudo)}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Buttons;

export const query = graphql`
  query ButtonsQuery {
    allDataYaml {
      edges {
        node {
          buttons {
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
