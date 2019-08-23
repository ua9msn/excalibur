/* global describe, it, before */

import chai from 'chai';
import {x} from '../lib/ginstr-compiler.js';

chai.expect();

const expect = chai.expect;

describe('Given an instance of my Cat library', () => {
  describe('when I need the name', () => {
    it('should return the name', () => {
        const r = x('a');
        expect(r).to.be.equal('a');
    });
  });
});

// describe('Given an instance of my Dog library', () => {
//   before(() => {
//     lib = new Dog();
//   });
//   describe('when I need the name', () => {
//     it('should return the name', () => {
//       expect(lib.name).to.be.equal('Dog');
//     });
//   });
// });
