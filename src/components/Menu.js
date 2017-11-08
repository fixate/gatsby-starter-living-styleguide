import React from 'react';
import Link from 'gatsby-link';

const recurseCat = cat => {
  const splitCats = cat.split('/');
  const hasSubCats = splitCats.length > 1;

  return {
    name: splitCats[0],
    child: hasSubCats ? recurseCat(splitCats.slice(1).join('/')) : undefined,
  };
};

const reduceCats = (acc, cat) => {
  const hasCat = acc.some(c => c.name === cat.name);
  let newAcc = hasCat ? acc : acc.concat({name: cat.name, children: []});
  newAcc = cat.child
    ? newAcc.map(c => {
        const alreadyHasChild = (c.children || [])
          .some(child => child.name === cat.child.name);
        c.children =
          c.name === cat.name && !alreadyHasChild
            ? c.children.concat(cat.child).sort((a, b) => a.name > b.name)
            : c.children;

        return c;
      })
    : newAcc;

  return newAcc;
};

const Menu = ({pages}) => {
  const cats = pages
    .map(p => recurseCat(p.relativeDirectory))
    .reduce(reduceCats, [])
    .sort((a, b) => a.name > b.name);

  return (
    <nav>
      {cats.map(cat => {
        const catPages = pages.filter(
          p =>
            cat.name.length > 0 &&
            new RegExp(cat.name).test(p.relativeDirectory)
        );
        const isIndex = cat.name.length === 0;

        return isIndex
          ? <div style={{marginBottom: '1em'}}>
              <Link to="/">home</Link>
            </div>
          : <div key={cat.name}>
              {cat.name
                ? <h4 style={{marginBottom: 0}}>
                    {cat.name}
                  </h4>
                : null}

              {cat.children.length
                ? cat.children.map(child => {
                    const childPages = catPages.filter(
                      p =>
                        p.relativeDirectory === [cat.name, child.name].join('/')
                    );

                    return (
                      <div
                        key={child.name}
                        style={{marginBottom: '1em', marginLeft: '1em'}}>
                        <h4 style={{marginBottom: 0}}>
                          {child.name}
                        </h4>

                        {childPages.map((cp, i) =>
                          <div key={cp.name}>
                            <Link to={`${cp.relativeDirectory}/${name}`}>
                              {cp.name.replace('-', ' ')}
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  })
                : <div
                    key={cat.name}
                    style={{marginBottom: '1em', marginLeft: '1em'}}>
                    {catPages.map(cp => {
                      const name = cp.name === 'index' ? '' : cp.name;

                      return (
                        <div key={cp.name}>
                          <Link to={`${cp.relativeDirectory}/${name}`}>
                            {cp.name.replace('-', ' ')}
                          </Link>
                        </div>
                      );
                    })}
                  </div>}
            </div>;
      })}
    </nav>
  );
};

export default Menu;
