/* global describe, it, before */
import chai from 'chai';
import {compile} from '../lib/ginstr-compiler.js';

const assert = chai.assert;

describe('Compiler', () => {
    describe(' comapartion ', () => {
        const tests = [
            {script: 'now() > today();', argument: {}, result: true, expect: ' = true '},
            {script: '1 > 2;', argument: {}, result: false, expect: ' = false '},
            {script: '1 < 2;', argument: {}, result: true, expect: ' = true '},
            {script: '1 == 1;', argument: {a: 10}, result: true, expect: ' = true '},
            {script: 'record.a > 0;', argument: {a: 10}, result: true, expect: ' = true '},
            {script: 'record.a < 0;', argument: {a: 10}, result: false, expect: ' = false '},
            {script: 'record.a && record.a.b && record.a.b.c == null;', argument: {a: 10}, result: null, expect: ' true '},
            {script: 'record.a == "a";', argument: {a: 'a'}, result: true, expect: ' = true '},
            {script: 'record.a;', argument: {a: 'a'}, result: 'a', expect: 'property accessor ok'},
            {script: 'record.a * 10;', argument: {a: 10}, result: 100, expect: ' = 100 '},
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
    describe(' objects ', () => {
        const tests = [
            {script: 'record;', argument: {a: 10}, result: {a: 10}, expect: 'propery accessor'},
            {script: 'record;', argument: {a: {b: 'c'}}, result: {a: {b: 'c'} }, expect: 'deep equality'},
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
