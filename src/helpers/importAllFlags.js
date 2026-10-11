export default (files) => (Object.keys(files).reduce((acc, flagFileName) => ({
  ...acc,
  [flagFileName.replace(/^.*\//, '').replace(/\.png$/, '')]: files[flagFileName],
}), {}));
