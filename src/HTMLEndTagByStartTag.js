function solution(startTag) {
    return '</' + startTag.match(/<(\w+)/)[1] + '>';
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test HTMLEndTagByStartTag

// alternative solution
