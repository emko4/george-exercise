export default (r) => (r.keys().reduce((acc, flagFileName) => ({
  ...acc,
  [flagFileName.replace(/^\.\//, '').replace(/\.png$/, '')]: r(flagFileName),
}), {}));
