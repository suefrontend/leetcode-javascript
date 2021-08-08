var checkIfPangram = function(sentence) {
  let allAlphas = 'abcdefghijklmnopqrstuvwxyz';
  for(let i=0; i<26; i++){
     if(!sentence.includes(allAlphas[i])) return false;
  }
  return true;
};
