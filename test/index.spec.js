/* global describe, it, before */
import chai from 'chai';
import {compile} from '../lib/ginstr-language';

const assert = chai.assert;

const equalFn = function(test){
    const name = test.script + ' ' + (test.expect || '');
    it(name, function () {
        const expression = compile(test.script);
        const result = expression(test.argument);
        assert.equal(result, test.result, '= ');
    })
};
const deepEqualFn = function(test){
    const name = test.script + ' ' + (test.expect || '');
    it(name, function () {
        const expression = compile(test.script);
        const result = expression(test.argument);
        assert.deepEqual(result, test.result, '= ');
    })
};

describe('Compiler', () => {
    describe('Math ', () => {
        const tests = [
            {script: `1 + 2`, argument: {}, result: 3, expect: ' = 3 '},
            {script: '2 + 2 * 2;', argument: {}, result: 6, expect: ' = 6 '},
            {script: '(2 + 2) * 2;', argument: {}, result: 8, expect: ' = 8 '},
            {script: '10 % 9', argument: {}, result: 1, expect: ' = 1 '},
            {script: 'max(1,2,3,4,5)', argument: {}, result: 5, expect: ' = 5 '},
            {script: 'abs(-11)', argument: {}, result: 11, expect: ' = 11 '},
        ];
        tests.forEach(equalFn);
    });
    describe('Logic ', () => {
        const tests = [
            {script: 'true && true;', argument: {}, result: true, expect: ' -> true'},
            {script: 'true && false;', argument: {}, result: false, expect: ' -> false '},
            {script: 'true || false;', argument: {}, result: true, expect: ' -> true '},
            {script: 'false || false;', argument: {}, result: false, expect: ' -> fasle '},
        ];
        tests.forEach(equalFn);
    });
    describe('comparison ', () => {
        const tests = [
            {script: 'now() > today();', argument: {}, result: true, expect: ' -> true '},
            {script: '1 > 2;', argument: {}, result: false, expect: ' -> false '},
            {script: '1 < 2;', argument: {}, result: true, expect: ' -> true '},
            {script: '1 == 1;', argument: {a: 10}, result: true, expect: ' -> true '},
        ];
        tests.forEach(equalFn);
    });
    describe('Object property accessor {a: 10}', () => {
        const tests = [
            {script: 'record.a;', argument: {record: {a: 10}}, result: 10, expect: ' = 10 '},
            {script: 'record.a == 10;', argument: {record: {a: 10}}, result: true, expect: ' -> true '},
            {script: 'record.a && record.a.b && record.a.b.c == null;', argument: {record: {a: 10}}, result: null, expect: ' -> true '},
        ];
        tests.forEach(equalFn);
    });
    describe('Deep accessor {a: {b: "c" } ', () => {
        const tests = [
            {script: 'record;', argument: {record:{a: {b: 'c'}}}, result: {a: {b: 'c'} }, expect: 'deep equality'},
            {script: 'record.a;', argument: {record: {a: {b: 'c'}}}, result: {b: 'c'}, expect: 'deep equality'},
            {script: `record['a'];`, argument: {record:{a: {b: 'c'}}}, result: {b: 'c'}, expect: 'deep equality'},
            {script: `{'qwe':"asd"};`, argument: {record: {a: 10}}, result: {qwe:"asd"}, expect: '{"qwe":"asd"}'},
        ];
        tests.forEach(deepEqualFn)
    });
    describe('String value {a: "a"}', () => {
        const tests = [
            {script: 'record.a == "a";', argument: {record: {a: 'a'}}, result: true, expect: ' = true '},
            {script: 'record.a == "b";', argument: {record: {a: 'a'}}, result: false, expect: ' = false '},
            {script: 'record.a;', argument: {record: {a: 'a'}}, result: 'a', expect: 'a'},
        ];
        tests.forEach(equalFn);
    });
    describe('boolean & null {a:true, b: false, c: null, d: undefined} ', () => {
        const argument = {record: {a:true, b: false, c: null, d: undefined}};
        const tests = [
            {script: 'record.a == true;', argument, result: true, expect: ' -> true'},
            {script: 'record.a == false;', argument, result: false, expect: '-> false'},
            {script: 'record.c == null;', argument, result: true, expect: ' -> true'},
            {script: 'record.d == null;', argument, result: true, expect: ' -> true'},
        ];
        tests.forEach(equalFn);
    });
    describe(' if ', () => {
        const tests = [
            {script: 'record.b > 5 ? 1 : 3 ;', argument: {record: {b: 10}}, result: 1 },
            {script: 'record.b > 5 ? 1 : 3 ;', argument: {record: {b: 0}}, result: 3 },
        ];
        tests.forEach(deepEqualFn)
    });
    describe(' realLife ', () => {
        const tests = [
            // {script: `record['a'] > 5 ? { color: 'red'} : { color: 'green'} ;`, argument: {a: 10}, result: { color: "red"} },
            // {script: `record['a'] < 5 ? { color: 'red'} : { color: 'green'} ;`, argument: {a: 10}, result: { color: "green"} },
            {script: `record['a'] == false ? {color: record.b == true ? 'yellow' : 'green' } : { color: 'red'};`,
                argument: {record: {a: false, b: false}},
                result: {color: "green"}
            },
            {script: `record['a'] == true ? record.b == true ? { color:'yellow'} : {color: 'green' } : { color: 'red'};`,
                argument: {record: {a: true, b: true}},
                result: {color: "yellow"}
            },
            {script: `record['a'] == true ? record.b == false ? { color:'yellow'} : {color: 'green' } : { color: 'red'};`,
                argument: {record: {a: true, b: true}},
                result: {color: "green"}
            },
            {script: `record['a'] == false ? record.b == false ? { color:'yellow'} : {color: 'green' } : { color: 'red'};`,
                argument: {record: {a: true, b: true}},
                result: {color: "red"}
            },
            {script: `record['a'] == true ? {color: 'red'} : (record.b == true ? {color: 'green' } : null) ;`,
                argument: {record: {a: true, b: true}},
                result: {color: "red"}
            },

        ];
        tests.forEach(deepEqualFn)
    });

});
