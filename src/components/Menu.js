import React from 'react';
import Link from 'gatsby-link';

const Menu = ({pages}) => {
  const dirs = pages
    .map(p => p.relativeDirectory)
    .filter((dir, i, arr) => arr.indexOf(dir) === i)
    .sort();

  return (
    <nav>
      {dirs.map(dir => {
        const dirPages = pages.filter(p => p.relativeDirectory === dir);

        return (
          <div key={dir}>
            {dir
              ? <h4 style={{marginBottom: 0}}>
                  {dir}
                </h4>
              : null}

            <div>
              {dirPages.map(dp => {
                const name = dp.name === 'index' ? '' : dp.name;

                return (
                  <div key={dp.name}>
                    <Link to={`${dp.relativeDirectory}/${name}`}>
                      {dp.name.replace('-', ' ')}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </nav>
  );
};

export default Menu;
