import parser from './parser';
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

export function compile(script:string):Function {
    const ast = parser.parse(script); // AST
    const fnBody = escodegen.generate(ast);
    const expression = new Function('data', 'fns', fnBody);
    return function ({data = {}} = {}) {
        return expression(data, fns);
    };
}
