const isNumber = (string) => {
  string += ''; // 문자열로 변환
  string = string.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
  
  if (string == '' || isNaN(string)) 
    return false;
  
  return true;
}