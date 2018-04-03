import React from 'react';

import SGDemoArea from '../../components/SGDemoArea';

import {getYamlNode} from '../../utils';
import SGPseudoStyles from '../../components/SGPseudoStyles';

const ButtonWithPseudo = ({children, className, pseudoClass, ...restProps}) => (
  <SGPseudoStyles
    className={className}
    pseudoClass={pseudoClass}
    render={({style}) => (
      <button className={className} style={style} {...restProps}>
        button{children}
      </button>
    )}
  />
);

const AnchorWithPseudo = ({
  children = '',
  className,
  pseudoClass,
  ...restProps
} = {}) => (
  <SGPseudoStyles
    className={className}
    pseudoClass={pseudoClass}
    render={({style}) => (
      <a
        href="javascript: void(0)"
        className={className}
        style={style}
        {...restProps}>
        a{children}
      </a>
    )}
  />
);

const LabelWithPseudo = ({
  children = '',
  className,
  pseudoClass,
  ...restProps
} = {}) => (
  <SGPseudoStyles
    className={className}
    pseudoClass={pseudoClass}
    render={({style}) => (
      <label className={className} style={style} {...restProps}>
        label{children}
      </label>
    )}
  />
);

const InputWithPseudo = ({className, pseudoClass, ...restProps}) => (
  <SGPseudoStyles
    className={className}
    pseudoClass={pseudoClass}
    render={({style}) => (
      <input className={className} style={style} {...restProps} />
    )}
  />
);

const getButtonsMarkup = ({
  classNames = [],
  pseudoClass = '',
  ...restProps
} = {}) => {
  const className = classNames.join(' ');
  const text = classNames
    .map(c => `.${c}`)
    .join('')
    .concat(pseudoClass ? `:${pseudoClass}` : '');

  return (
    <div key={className}>
      <h3>{text}</h3>

      <div className="btn-container">
        <AnchorWithPseudo
          className={className}
          pseudoClass={pseudoClass}
          {...restProps}>
          {text}
        </AnchorWithPseudo>{' '}
        <ButtonWithPseudo
          className={className}
          pseudoClass={pseudoClass}
          {...restProps}>
          {text}
        </ButtonWithPseudo>{' '}
        <LabelWithPseudo
          className={className}
          pseudoClass={pseudoClass}
          {...restProps}>
          {text}
        </LabelWithPseudo>{' '}
        <InputWithPseudo
          className={className}
          pseudoClass={pseudoClass}
          type="submit"
          value={`input[type=submit]${text}`}
          {...restProps}
        />
        <ButtonWithPseudo
          className={className}
          pseudoClass={pseudoClass}
          disabled
          {...restProps}>
          {text}[disabled]
        </ButtonWithPseudo>{' '}
        <SGDemoArea
          hideComp
          comp={
            <a className={className} {...restProps}>
              {text}
            </a>
          }
        />
      </div>
    </div>
  );
};

const Buttons = ({data}) => {
  const {modifiers, pseudos, states, types} = getYamlNode(
    data,
    'componentsButtons'
  );

  return (
    <div>
      <h1>Buttons</h1>

      {types.map(type => (
        <div key={type}>
          <h2>.{type}</h2>
          {getButtonsMarkup({classNames: [type]})}

          {Object.keys(modifiers).map(mkey => (
            <div key={`${type}${mkey}`}>
              {modifiers[mkey].map(val =>
                getButtonsMarkup({classNames: [type, val]})
              )}
            </div>
          ))}

          {states.map(state => (
            <div key={`${type}${state}`}>
              {getButtonsMarkup({classNames: [type, state]})}
            </div>
          ))}

          {pseudos.map(pseudo => (
            <div key={`${type}${pseudo}`}>
              {getButtonsMarkup({classNames: [type], pseudoClass: pseudo})}
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
