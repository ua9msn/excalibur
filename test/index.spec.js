/* global describe, it, before */
import chai from 'chai';
import {compile} from '../lib/ginstr-compiler.js';

chai.expect();
const expect = chai.expect;
describe('Compiler', () => {
    describe('no vars ', () => {
        it('now() > today()', () => {
            const script = 'now() > today();';
            const expression = compile(script);
            const result = expression();
            expect(result).to.be.true;
        });
        it('1 < 2;', () => {
            const script = '1 < 2 ;';
            const expression = compile(script);
            const result = expression();
            expect(result).to.be.true;
        });
        it('1 > 2;', () => {
            const script = '1 > 2 ;';
            const expression = compile(script);
            const result = expression();
            expect(result).to.be.false;
        });
    });
});
