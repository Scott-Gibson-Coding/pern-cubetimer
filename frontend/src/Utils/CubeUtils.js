// returns random int in [0, arrLen)
const getRandomInt = (arrLen) => {
  return Math.floor(Math.random() * arrLen);
};

/*
 * returns true if side1 and side2 are opposite faces
 *
 * assumes sides=["R", "L", "U", "D", "F", "B"]
 */
const isOpposite = (side1, side2) => {
  return Math.floor(side1 / 2) === Math.floor(side2 / 2);
};

/*
 * Return a scramble of length 20 from available moves.
 * Note: There are some rules to follow when providing a
 * unique scramble.
 *   - The same letter can't be used two turns in a row
 *   - Parallel letters can't be used three turns in a row
 */
export const getScramble = (length = 20) => {
  // a move consists of a side, direction, and amount
  const sides = ["R", "L", "U", "D", "F", "B"];
  const directions = ["", "'", "2"];

  let scramble = [];
  let last_side = -1;
  let last_last_side = -2;
  while (scramble.length < 20) {
    let side = getRandomInt(sides.length);

    if (side === last_last_side && isOpposite(side, last_side)) {
      continue;
    }

    if (side !== last_side) {
      let move = sides[side] + directions[getRandomInt(directions.length)];
      scramble.push(move);

      console.log(move);
      console.log(isOpposite(last_side, side));

      last_last_side = last_side;
      last_side = side;
    }
  }

  return scramble.join(" ");
};
