import React from 'react';
import Link from 'gatsby-link';

const recurseCat = catPath => {
  const splitCats = catPath.split('/');
  const hasSubCats = splitCats.length > 1;

  return {
    name: splitCats[0],
    subCat: hasSubCats ? recurseCat(splitCats.slice(1).join('/')) : undefined,
  };
};

const reduceCats = (acc, cat) => {
  const hasCat = acc.some(c => c.name === cat.name);
  let newAcc = hasCat ? acc : acc.concat({name: cat.name, subCats: []});
  newAcc = cat.subCat
    ? newAcc.map(c => {
        const alreadyHasChild = (c.subCats || [])
          .some(subCat => subCat.name === cat.subCat.name);
        c.subCats =
          c.name === cat.name && !alreadyHasChild
            ? c.subCats.concat(cat.subCat).sort((a, b) => a.name > b.name)
            : c.subCats;

        return c;
      })
    : newAcc;

  return newAcc;
};

const Menu = ({pages}) => {
  const cats = pages
    .map(({relativeDirectory}) => relativeDirectory)
    .map(recurseCat)
    .reduce(reduceCats, [])
    .sort((a, b) => a.name > b.name);

  return (
    <nav>
      {cats.map(cat => {
        const isIndex = cat.name.length === 0;
        const catPages = pages.filter(
          p => !isIndex && new RegExp(cat.name).test(p.relativeDirectory)
        );
        const rootCatPages = catPages.filter(
          p => p.relativeDirectory.split('/').length === 1
        );

        return isIndex
          ? <div style={{marginBottom: '1em'}} key={cat.name}>
              <Link to="/">home</Link>
            </div>
          : <div key={cat.name}>
              {cat.name
                ? <h4 style={{marginBottom: 0}}>
                    {cat.name.replace('-', ' ')}
                  </h4>
                : null}

              {rootCatPages.length
                ? <div
                    key={cat.name}
                    style={{marginBottom: '1em', marginLeft: '1em'}}>
                    {rootCatPages.map(cp => {
                      const name = cp.name === 'index' ? '' : cp.name;

                      return (
                        <div key={cp.name}>
                          <Link to={`${cp.relativeDirectory}/${name}`}>
                            {cp.name.replace('-', ' ')}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                : null}

              {cat.subCats.length
                ? cat.subCats.map(subCat => {
                    const subCatPages = catPages.filter(
                      p =>
                        p.relativeDirectory ===
                        [cat.name, subCat.name].join('/')
                    );

                    return (
                      <div
                        key={subCat.name}
                        style={{marginBottom: '1em', marginLeft: '1em'}}>
                        <h4 style={{marginBottom: 0}}>
                          {subCat.name}
                        </h4>

                        {subCatPages.map((cp, i) =>
                          <div key={cp.name}>
                            <Link
                              to={`${cp.relativeDirectory}/${name}${cp.name}`}>
                              {cp.name.replace(/-/g, ' ')}
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  })
                : null}
            </div>;
      })}
    </nav>
  );
};

export default Menu;
