import React from 'react';

const Lists = () => {
  const makeNestedList = TagName =>
    <TagName key={TagName}>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>
        Vestibulum auctor dapibus neque.
        <TagName>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
          <li>
            Vestibulum auctor dapibus neque.
            <TagName>
              <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Vestibulum auctor dapibus neque.</li>
            </TagName>
          </li>
        </TagName>
      </li>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
    </TagName>;
  const nestedLists = ['ul', 'ol'].map(tagName => makeNestedList(tagName));

  return (
    <div>
      <h1>Lists</h1>

      <p>
        Adipisicing sed accusantium odit soluta molestias. Sunt ut corporis ab
        dolor nihil ratione sit itaque aliquid natus beatae facilis. Fugiat iure
        deleniti nostrum soluta ullam blanditiis fugiat veniam porro aut.
      </p>

      {nestedLists.map((list, i) =>
        <div key={i}>
          {list}

          <p>
            Adipisicing sed accusantium odit soluta molestias. Sunt ut corporis
            ab dolor nihil ratione sit itaque aliquid natus beatae facilis.
            Fugiat iure deleniti nostrum soluta ullam blanditiis fugiat veniam
            porro aut.
          </p>
        </div>
      )}
    </div>
  );
};

export default Lists;
