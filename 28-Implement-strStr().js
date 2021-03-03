var strStr = function(haystack, needle) {

  if(haystack === needle) return 0;
  if(needle.length === 0) return 0;

  for(var i = 0; i < haystack.length - needle.length; i++) {
    if(needle === haystack.substring(i, i + needle.length)) {
      return i;
    }
  }
  return -1;
};
