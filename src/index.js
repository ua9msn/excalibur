import parser from '../lib/ginstr-parser.js';
import escodegen from 'escodegen';
const fns = {
    max:   Math.max,
    min:   Math.min,
    round: Math.round,
    now:   Date.now,
    today: () => {
        let x = new Date();
        x.setHours(0, 0, 0, 0);
        return x.getTime();
    }
};

export function compile(script) {
    const ast = parser.parse(script); // AST
    const fnBody = escodegen.generate(ast);
    const expression = new Function('record', 'column', 'fns', fnBody);
    return function ({record = {}, column = {}}) {
        return expression(record, column, fns);
    };
}
