  //Solution for counting the amount of repetitive characters in a string:
  
  function solution(S) {
    let result = 0;
    let checkCurrentCharacter;
    let lastCharacter;
    for (let i = 0; i < S.length; i++) {
      checkCurrentCharacter = S.charAt(i);
      lastCharacter = S.charAt(i - 1);
      if (checkCurrentCharacter === lastCharacter) {
        result++;
      }
    }
    return result;
  }
  
  const S = 'eeehjj';
  solution(S);
