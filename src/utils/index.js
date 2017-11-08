export const getYamlNode = (data, name) =>
  data.allDataYaml.edges.find(e => e.node[name]).node[name];

export const splitCamelCaseString = (joiner = '-') => str =>
  str
    .split('')
    .reduce((acc, c) => {
      const isUpperCase = /[A-Z]/.test(c);
      const newAcc = isUpperCase
        ? acc.concat([c.toLowerCase()])
        : acc
            .slice(0, -1)
            .concat((acc.slice(-1)[0] ? acc.slice(-1)[0] : []).concat(c));

      return newAcc;
    }, [])
    .join(joiner);
