const tokenizer = require('./tokenizer');
const parser = require('./parser')
module.exports = function compiler(input) {
    // 1. Lexical Analysis
    //      Breaks the input code (string) into the basic block
    //      of the language (array of objects)
    const tokens = tokenizer(input);
    // 2. Syntactic Analysis
    //      Transformation the tokens (array of objects) into an
    //      AST (tree of objects) which represents our program
    const lispAST = parser(tokens);
    return lispAST;
    // 3. Transformation
    // 4. Code Generation

    // return jsCode


}