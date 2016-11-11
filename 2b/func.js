import xregexp from 'xregexp';

export function deleteExtraSpaces(str) {
  return str.trim().replace(/\s+/g, ' ');
}

export function formatName(inputName) {
  const [surname, secondname = '', name = ''] = inputName.split(' ').reverse();

  return surname[0].toUpperCase() + surname.slice(1).toLowerCase() +
    (name[0] != undefined ?  ' ' + name[0].toUpperCase() + '.' : '') +
    (secondname[0] != undefined ? ' ' + secondname[0].toUpperCase() + '.' : '');
}

export function validateInputName(inputName) {
  const nameParts = inputName.split(' ');
  const reg = xregexp('^[\\pL\\s\'\\-]+$');

  return nameParts.length &&
      nameParts.length <= 3 &&
      reg.test(inputName);
}
