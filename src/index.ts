import parser from '../lib/excalibur-parser.js';
import escodegen from 'escodegen';
const fns = {
    abs:   Math.abs,
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
    const expression = new Function('data', 'fns', fnBody);
    return function ({record = {}}) {
        return expression(record, fns);
    };
}
