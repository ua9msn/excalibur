import {compile} from '../lib/excalibur.js';
import {strict as assert} from 'assert';

const equalFn = function(test){
    const name = test.script + ' ' + (test.message || '');
    it(name, function () {
        const expression = compile(test.script);
        const result = expression(test.argument);
        assert.equal(result, test.result, '= ');
    })
};
const deepEqualFn = function(test){
    const name = test.script + ' ' + (test.message || '');
    it(name, function () {
        const expression = compile(test.script);
        const result = expression(test.argument);
        assert.deepEqual(result, test.result, '= ');
    })
};

describe('Compiler', () => {
    describe('Math ', () => {
        const tests = [
            {script: `1 + 2`, argument: {}, result: 3, message: ' = 3 '},
            {script: '2 + 2 * 2;', argument: {}, result: 6, message: ' = 6 '},
            {script: '(2 + 2) * 2;', argument: {}, result: 8, message: ' = 8 '},
            {script: '10 % 9', argument: {}, result: 1, message: ' = 1 '},
            {script: 'max(1,2,3,4,5)', argument: {}, result: 5, message: ' = 5 '},
            {script: 'abs(-11)', argument: {}, result: 11, message: ' = 11 '},
        ];
        tests.forEach(equalFn);
    });
    describe('Logic ', () => {
        const tests = [
            {script: 'true && true;', argument: {}, result: true, message: ' -> true'},
            {script: 'true && false;', argument: {}, result: false, message: ' -> false '},
            {script: 'true || false;', argument: {}, result: true, message: ' -> true '},
            {script: 'false || false;', argument: {}, result: false, message: ' -> fasle '},
        ];
        tests.forEach(equalFn);
    });
    describe('comparison ', () => {
        const tests = [
            {script: 'now() > today();', argument: {}, result: true, message: ' -> true '},
            {script: '1 > 2;', argument: {}, result: false, message: ' -> false '},
            {script: '1 < 2;', argument: {}, result: true, message: ' -> true '},
            {script: '1 == 1;', argument: {a: 10}, result: true, message: ' -> true '},
        ];
        tests.forEach(equalFn);
    });
    describe('Object property accessor {a: 10}', () => {
        const tests = [
            {script: 'data.a;', argument: {data: {a: 10}}, result: 10, message: ' = 10 '},
            {script: 'data.a == 10;', argument: {data: {a: 10}}, result: true, message: ' -> true '},
            {script: '(data.a && data.a.b && data.a.b.c) == null;', argument: {data: {a: 10}}, result: true, message: ' -> true '},
        ];
        tests.forEach(equalFn);
    });
    describe('Deep accessor {a: {b: "c" } ', () => {
        const tests = [
            {script: 'data;', argument: {data:{a: {b: 'c'}}}, result: {a: {b: 'c'} }, message: 'deep equality'},
            {script: 'data.a;', argument: {data: {a: {b: 'c'}}}, result: {b: 'c'}, message: 'deep equality'},
            {script: `data['a'];`, argument: {data:{a: {b: 'c'}}}, result: {b: 'c'}, message: 'deep equality'},
            {script: `{'qwe':"asd"};`, argument: {data: {a: 10}}, result: {qwe:"asd"}, message: '{"qwe":"asd"}'},
        ];
        tests.forEach(deepEqualFn)
    });
    describe('String value {a: "a"}', () => {
        const tests = [
            {script: 'data.a == "a";', argument: {data: {a: 'a'}}, result: true, message: ' = true '},
            {script: 'data.a == "b";', argument: {data: {a: 'a'}}, result: false, message: ' = false '},
            {script: 'data.a;', argument: {data: {a: 'a'}}, result: 'a', message: 'a'},
        ];
        tests.forEach(equalFn);
    });
    describe('boolean & null {a:true, b: false, c: null, d: undefined} ', () => {
        const argument = {data: {a:true, b: false, c: null, d: undefined}};
        const tests = [
            {script: 'data.a == true;', argument, result: true, message: ' -> true'},
            {script: 'data.a == false;', argument, result: false, message: '-> false'},
            {script: 'data.c == null;', argument, result: true, message: ' -> true'},
            {script: 'data.d == null;', argument, result: true, message: ' -> true'},
        ];
        tests.forEach(equalFn);
    });
    describe(' if ', () => {
        const tests = [
            {script: 'data.b > 5 ? 1 : 3 ;', argument: {data: {b: 10}}, result: 1 },
            {script: 'data.b > 5 ? 1 : 3 ;', argument: {data: {b: 0}}, result: 3 },
        ];
        tests.forEach(deepEqualFn)
    });
    describe(' realLife ', () => {
        const tests = [
            // {script: `data['a'] > 5 ? { color: 'red'} : { color: 'green'} ;`, argument: {a: 10}, result: { color: "red"} },
            // {script: `data['a'] < 5 ? { color: 'red'} : { color: 'green'} ;`, argument: {a: 10}, result: { color: "green"} },
            {script: `data['a'] == false ? {color: data.b == true ? 'yellow' : 'green' } : { color: 'red'};`,
                argument: {data: {a: false, b: false}},
                result: {color: "green"}
            },
            {script: `data['a'] == true ? data.b == true ? { color:'yellow'} : {color: 'green' } : { color: 'red'};`,
                argument: {data: {a: true, b: true}},
                result: {color: "yellow"}
            },
            {script: `data['a'] == true ? data.b == false ? { color:'yellow'} : {color: 'green' } : { color: 'red'};`,
                argument: {data: {a: true, b: true}},
                result: {color: "green"}
            },
            {script: `data['a'] == false ? data.b == false ? { color:'yellow'} : {color: 'green' } : { color: 'red'};`,
                argument: {data: {a: true, b: true}},
                result: {color: "red"}
            },
            {script: `data['a'] == true ? {color: 'red'} : (data.b == true ? {color: 'green' } : null) ;`,
                argument: {data: {a: true, b: true}},
                result: {color: "red"}
            },

        ];
        tests.forEach(deepEqualFn)
    });

});
