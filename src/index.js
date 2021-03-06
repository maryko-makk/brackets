module.exports = function check(str, bracketsConfig) {
 for (let i=0; i<bracketsConfig.length; i++) {
 let sequence = bracketsConfig[i].join('');
 if (str.includes(sequence)) {
   str = str.replace(sequence, '');
   i = -1;
  }
}
  return (str.length == 0);
}
