export default function getUsername(input) {
  const regProtocol = /^\w*:?\/\//i;
  const regDomain = /^(?:[а-я\w\d\-\.]+)?\//i;
  const regUsername = /([\w\d_\.]+)/i;

  const result = input.trim().replace(regProtocol, '').replace(regDomain, '').match(regUsername);

  return result && result[1];
}
