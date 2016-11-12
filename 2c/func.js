export default function getUsernameFromUrl(url) {
  const regProtocol = /^\w*:?\/\//i;
  const regDomain = /^([а-я\w\d\-\.]+)?\/?/i;
  const regUsername = /([\w\d_\.]+)/i;

  const noEndSlashUrl = url.trim().replace(/\/$/, '');

  let urlSuffix = noEndSlashUrl;
  if (urlSuffix.match(regProtocol)) {
    urlSuffix = urlSuffix.replace(regProtocol, '').replace(regDomain, '');
  } else if (urlSuffix.match(/\//)) {
    urlSuffix = urlSuffix.replace(regDomain, '');
  }

  const result = urlSuffix.match(regUsername);

  return result && result[1];
}
