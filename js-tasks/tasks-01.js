//www.codewars.com/kata/55f73be6e12baaa5900000d4
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//www.codewars.com/kata/55685cd7ad70877c23000102
https: function makeNegative(num) {
  return num < 0 ? num : -num;
}

// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2
function move(position, roll) {
  return position + roll * 2;
}

//www.codewars.com/kata/5772da22b89313a4d50012f7
function greet(name, owner) {
  if (name === owner) return "Hello boss";
  else return "Hello guest";
}

//www.codewars.com/kata/582cb0224e56e068d800003c
function litres(time) {
  return Math.floor(time * 0.5);
}

//www.codewars.com/kata/555086d53eac039a2a000083
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  )
    return true;
  else return false;
}