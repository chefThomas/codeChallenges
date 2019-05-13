// https://leetcode.com/problems/robot-return-to-origin/
/**
 * There is a robot starting at position (0, 0), 
 * the origin, on a 2D plane. Given a sequence of its moves, 
 * judge if this robot ends up at (0, 0) after it completes its moves.
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;

    for(let char of moves) {
        if(char === 'U') y++;
        if(char === 'D') y--;
        if(char === 'R') x++;
        if(char === 'L') x--;
    }

    return x === 0 && y === 0;
};

