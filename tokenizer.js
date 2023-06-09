// we assume that any letter=based value is a function name
const LETTERS = /[a-z]/i;
// we skip the whitespace character without collecting it
const WHITESPACE = /\s/;
const NUMBERS = /\d/;
module.exports = function tokenizer(input) {
    const tokens = [];
    let current = 0;
    while (current < input.length) {
        let char = input[current];
        if (char === '(' || char === ')') {
            tokens.push({
                type: 'paren',
                value: char
            });
            current++;
            continue;
        }

        if (LETTERS.test(char)) {
            let value = '';
            while (LETTERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: 'name',
                value
            });
            continue;
        }

        if (WHITESPACE.test(char)) {
            current++;
            continue;
        }

        if (NUMBERS.test(char)) {
            let value = '';
            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: 'number',
                value
            });
            continue;
        }
        throw TypeError(`Unknown char: '${char}'`);
    }
    return tokens;
}