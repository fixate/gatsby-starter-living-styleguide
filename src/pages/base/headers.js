import React from 'react';

const Headers = () => {
  const makeHeader = n => {
    const Tag = `H${n}`;

    return (
      <Tag>
        Header {n}
      </Tag>
    );
  };

  const headers = Array.apply(null, Array(6)).reduce(
    (acc, _, i) => acc.concat(makeHeader(i + 1)),
    []
  );

  return (
    <div>
      <h1>Headers</h1>

      {headers.map((h, i) =>
        <div key={i}>
          {h}

          <p>
            Amet blanditiis architecto quae reiciendis eos quo doloribus
            impedit. Reiciendis repellat sit perspiciatis dicta ipsa. Dolorum
            iste consequuntur qui esse aliquam sed, omnis labore. Commodi labore
            enim quidem suscipit explicabo.
          </p>
        </div>
      )}
    </div>
  );
};

export default Headers;
