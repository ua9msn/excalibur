/* global describe, it, before */
import chai from 'chai';
import {compile} from '../lib/ginstr-compiler.js';

const assert = chai.assert;

describe('Compiler', () => {
    describe(' Math ', () => {
        const tests = [
            {script: '1 + 2;', argument: {}, result: 3, expect: ' = 3 '},
            {script: '2 + 2 * 2;', argument: {}, result: 6, expect: ' = 6 '},
            {script: '(2 + 2) * 2;', argument: {}, result: 8, expect: ' = 8 '},
        ];
        tests
            .forEach(test => {
                const name = test.script + ' ' + (test.expect || '');
                it(name, function () {
                    const expression = compile(test.script);
                    const result = expression(test.argument);
                    assert.equal(result, test.result, '= ');
                })
            })
    });
    describe(' comaparsion ', () => {
        const tests = [
            {script: 'now() > today();', argument: {}, result: true, expect: ' = true '},
            {script: '1 > 2;', argument: {}, result: false, expect: ' = false '},
            {script: '1 < 2;', argument: {}, result: true, expect: ' = true '},
            {script: '1 == 1;', argument: {a: 10}, result: true, expect: ' = true '},
        ];
        tests
            .forEach(test => {
                const name = test.script + ' ' + (test.expect || '');
                it(name, function () {
                    const expression = compile(test.script);
                    const result = expression(test.argument);
                    assert.equal(result, test.result, '= ');
                })
            })
    });
    describe('Object property accessor {a: 10}', () => {
        const tests = [
            {script: 'record.a;', argument: {a: 10}, result: 10, expect: ' = 10 '},
            {script: 'record.a < 0;', argument: {a: 10}, result: false, expect: ' = false '},
            {script: 'record.a && record.a.b && record.a.b.c == null;', argument: {a: 10}, result: null, expect: ' true '},
        ];
        tests
            .forEach(test => {
                const name = test.script + ' ' + (test.expect || '');
                it(name, function () {
                    const expression = compile(test.script);
                    const result = expression(test.argument);
                    assert.equal(result, test.result, '= ');
                })
            })
    });

    describe('Deep accessor {a: {b: "c" } ', () => {
        const tests = [
            {script: 'record;', argument: {a: {b: 'c'}}, result: {a: {b: 'c'} }, expect: 'deep equality'},
            {script: 'record.a;', argument: {a: {b: 'c'}}, result: {b: 'c'}, expect: 'deep equality'},
            {script: `record['a'];`, argument: {a: {b: 'c'}}, result: {b: 'c'}, expect: 'deep equality'},
        ];
        tests
            .forEach(test => {
                const name = test.script + ' ' + (test.expect || '');
                it(name, function () {
                    const expression = compile(test.script);
                    const result = expression(test.argument);
                    assert.deepEqual(result, test.result);
                })
            })
    });


    describe('{a: "a"}', () => {
        const tests = [
            {script: 'record.a == "a";', argument: {a: 'a'}, result: true, expect: ' = true '},
            {script: 'record.a == "b";', argument: {a: 'a'}, result: false, expect: ' = false '},
            {script: 'record.a;', argument: {a: 'a'}, result: 'a', expect: 'property accessor ok'},
        ];
        tests
            .forEach(test => {
                const name = test.script + ' ' + (test.expect || '');
                it(name, function () {
                    const expression = compile(test.script);
                    const result = expression(test.argument);
                    assert.equal(result, test.result, '= ');
                })
            })
    });

    describe(' boolean & null ', () => {
        const tests = [
            {script: 'record.a == undefined;', argument: {b: 10}, result: true, expect: '{b: 10} true'},
            {script: 'record.a == true;', argument: {a: true}, result: true, expect: '{a: true}'},
            {script: 'record.a == false;', argument: {a: false}, result: true, expect: '{a: false}'},
        ];
        tests
            .forEach(test => {
                const name = test.script + ' ' + (test.expect || '');
                it(name, function () {
                    const expression = compile(test.script);
                    const result = expression(test.argument);
                    assert.equal(result, test.result);
                })
            })
    });
    describe(' if ', () => {
        const tests = [
            {script: 'record.b > 5 ? 1 : 3 ;', argument: {b: 10}, result: 1 },
            {script: 'record.b > 5 ? 1 : 3 ;', argument: {b: 0}, result: 3 },
        ];
        tests
            .forEach(test => {
                const name = test.script + ' ' + (test.expect || '');
                it(name, function () {
                    const expression = compile(test.script);
                    const result = expression(test.argument);
                    assert.deepEqual(result, test.result);
                })
            })
    });
    describe(' realLife ', () => {
        const tests = [
            // {script: `record['a'] > 5 ? { color: 'red'} : { color: 'green'} ;`, argument: {a: 10}, result: { color: "red"} },
            // {script: `record['a'] < 5 ? { color: 'red'} : { color: 'green'} ;`, argument: {a: 10}, result: { color: "green"} },
            {script: `record['a'] == false ? {color: record.b == true ? 'yellow' : 'green' } : { color: 'red'};`,
                argument: {a: false, b: false},
                result: {color: "green"}
            },
            {script: `record['a'] == true ? record.b == true ? { color:'yellow'} : {color: 'green' } : { color: 'red'};`,
                argument: {a: true, b: true},
                result: {color: "yellow"}
            },
            {script: `record['a'] == true ? record.b == false ? { color:'yellow'} : {color: 'green' } : { color: 'red'};`,
                argument: {a: true, b: true},
                result: {color: "green"}
            },
            {script: `record['a'] == false ? record.b == false ? { color:'yellow'} : {color: 'green' } : { color: 'red'};`,
                argument: {a: true, b: true},
                result: {color: "red"}
            },
        ];
        tests
            .forEach(test => {
                const name = test.script + ' ' + (test.expect || '');
                it(name, function () {
                    const expression = compile(test.script);
                    const result = expression(test.argument);
                    assert.deepEqual(result, test.result);
                })
            })
    });

});
