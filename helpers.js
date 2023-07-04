/*
Copyright 2023 : Utilars™ and Shawn Eary
Licensed via FCML : https://www.utilars.com/Home/FCML
*/
function getParam(iParamName) {
  // See [2]
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(iParamName);
}
