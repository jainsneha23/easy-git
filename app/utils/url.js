const basename = url =>
  url.substr(url.lastIndexOf('/') + 1).replace('.git', '');

export default basename;
