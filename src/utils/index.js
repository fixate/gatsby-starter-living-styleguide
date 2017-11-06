export const getYamlNode = (data, name) =>
  data.allDataYaml.edges.find(e => e.node[name]).node[name];
