import React from 'react';

const DefinitionLists = () => {
  const dt = i =>
    <dt key={`dt-${i}`}>
      definition term {i}
    </dt>;
  const dd = i =>
    <dd key={`dd-${i}`}>
      Dolor possimus nesciunt tempora molestiae ea cum quas. Sint quidem ea quo
      architecto sit. Quaerat laborum suscipit voluptatum nostrum natus
      quisquam. Architecto in modi in voluptas consequuntur? Laboriosam quam
      soluta.
    </dd>;
  const dlContent = Array.apply(null, Array(3)).reduce(
    (acc, _, i) => acc.concat(dt(i), dd(i)),
    []
  );

  return (
    <div>
      <h1>Definition Lists</h1>

      <p>
        Adipisicing sed accusantium odit soluta molestias. Sunt ut corporis ab
        dolor nihil ratione sit itaque aliquid natus beatae facilis. Fugiat iure
        deleniti nostrum soluta ullam blanditiis fugiat veniam porro aut.
      </p>

      <dl>
        {dlContent.map(c => c)}
      </dl>

      <p>
        Adipisicing sed accusantium odit soluta molestias. Sunt ut corporis ab
        dolor nihil ratione sit itaque aliquid natus beatae facilis. Fugiat iure
        deleniti nostrum soluta ullam blanditiis fugiat veniam porro aut.
      </p>
    </div>
  );
};

export default DefinitionLists;
