/**
 * LR parser generated by the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 *   npm install -g syntax-cli
 *
 *   syntax-cli --help
 *
 * To regenerate run:
 *
 *   syntax-cli \
 *     --grammar ~/path-to-grammar-file \
 *     --mode <parsing-mode> \
 *     --output ~/path-to-output-parser-file.js
 */

'use strict';

/**
 * Matched token text.
 */
let yytext;

/**
 * Length of the matched token text.
 */
let yyleng;

/**
 * Storage object.
 */
let yy = {};

/**
 * Result of semantic action.
 */
let __;

/**
 * Result location object.
 */
let __loc;

function yyloc(start, end) {
  if (!yy.options.captureLocations) {
    return null;
  }

  // Epsilon doesn't produce location.
  if (!start || !end) {
    return start || end;
  }

  return {
    startOffset: start.startOffset,
    endOffset: end.endOffset,
    startLine: start.startLine,
    endLine: end.endLine,
    startColumn: start.startColumn,
    endColumn: end.endColumn,
  };
}

const EOF = '$';

/**
 * List of productions (generated by Syntax tool).
 */
const productions = [[-1,1,(_1) => { __ = _1 }],
[0,1,(_1) => {  __ =  _1  }],
[1,2,(_1,_2) => { 
      __ = {
        type: 'ReturnStatement',
        argument: _1,
      }
     }],
[2,1,(_1) => { __ = _1 }],
[2,1,(_1) => { __ = _1 }],
[3,3,(_1,_2,_3) => {  __ = _2  }],
[4,1,(_1) => { __ = _1 }],
[4,0,() => {  __ = null  }],
[5,2,(_1,_2) => {  __ = _1  }],
[5,0,() => {  __ = []  }],
[6,5,(_1,_2,_3,_4,_5) => {  __ = Ternary(_1, _3, _5)  }],
[7,1,(_1) => { __ = _1 }],
[7,1,(_1) => { __ = _1 }],
[7,1,(_1) => { __ = _1 }],
[8,1,(_1) => { __ = _1 }],
[8,0,() => {  __ = null  }],
[9,1,(_1) => { __ = _1 }],
[9,0,() => {  __ = null  }],
[10,1,(_1) => {  __ = ObjectLiteral(_1)  }],
[11,1,(_1) => { __ = _1 }],
[11,1,(_1) => { __ = _1 }],
[12,3,(_1,_2,_3) => {  __ = _2  }],
[13,1,(_1) => { __ = _1 }],
[14,4,(_1,_2,_3,_4) => {  __ = MemberExpression(_1, _3) }],
[14,3,(_1,_2,_3) => {  __ = MemberExpression(_1, _3) }],
[14,1,(_1) => { __ = _1 }],
[15,1,(_1) => {  __ = [_1]  }],
[15,3,(_1,_2,_3) => {  _1.push(_3); __ = _1  }],
[16,3,(_1,_2,_3) => { 
      __ = {
        type: 'Property',
        key: _1,
        value: _3,
      }
     }],
[17,1,(_1) => {  __ = StringLiteral(_1)  }],
[17,1,(_1) => {  __ = NumLiteral(_1)  }],
[17,1,(_1) => {  __ = Literal(true)  }],
[17,1,(_1) => {  __ = Literal(false)  }],
[17,1,(_1) => {  __ = Literal(null)  }],
[18,1,(_1) => {  __ = {
            type: 'Identifier',
            name: _1,
        }
     }],
[19,1,(_1) => { __ = _1 }],
[19,3,(_1,_2,_3) => {  __ = LogicalExpression(_1, _2, _3)  }],
[20,1,(_1) => { __ = _1 }],
[20,3,(_1,_2,_3) => {  __ = LogicalExpression(_1, _2, _3)  }],
[21,1,(_1) => { __ = _1 }],
[21,3,(_1,_2,_3) => {  __ = BinaryExpression(_1, _2, _3)  }],
[22,1,(_1) => { __ = _1 }],
[22,3,(_1,_2,_3) => {  __ = BinaryExpression(_1, _2, _3)  }],
[23,1,(_1) => { __ = _1 }],
[23,3,(_1,_2,_3) => {  __ = BinaryExpression(_1, _2, _3)  }],
[24,1,(_1) => { __ = _1 }],
[24,3,(_1,_2,_3) => {  __ = BinaryExpression(_1, _2, _3)  }],
[25,1,(_1) => { __ = _1 }],
[25,1,(_1) => { __ = _1 }],
[25,1,(_1) => { __ = _1 }],
[25,2,(_1,_2) => {  __ = UnaryExpression(_1, _2)  }],
[26,2,(_1,_2) => { 
      __ = {
        type: 'CallExpression',
        callee: _1,
        arguments: _2,
      };
     }],
[27,1,(_1) => { __ = _1 }],
[27,1,(_1) => { __ = _1 }],
[28,3,(_1,_2,_3) => {  __ = _2  }],
[29,1,(_1) => { __ = _1 }],
[29,0,() => {  __ = []  }],
[30,1,(_1) => {  __ = [_1]  }],
[30,3,(_1,_2,_3) => {  __ = _1; _1.push(_3)  }],
[31,1,(_1) => {  __ = {
     "type": "Identifier",
     "name": _1
     }
  }],
[32,1,(_1) => {  __ = MemberExpression({
            "type": "Identifier",
            "name": "fns"
            }, _1)
   }]];

/**
 * Encoded tokens map.
 */
const tokens = {"LCURLY":"33","RCURLY":"34","QUESTION":"35","COLON":"36","COMMA":"37","SEMICOLON":"38","LPAREN":"39","RPAREN":"40","LBRACKET":"41","RBRACKET":"42","DOT":"43","STRING":"44","NUMBER":"45","TRUE":"46","FALSE":"47","NULL":"48","IDENTIFIER":"49","LOGICAL_OR":"50","LOGICAL_AND":"51","EQUALITY_OPERATOR":"52","RELATIONAL_OPERATOR":"53","ADDITIVE_OPERATOR":"54","MULTIPLICATIVE_OPERATOR":"55","FN":"56","$":"57"};

/**
 * Parsing table (generated by Syntax tool).
 */
const table = [{"0":1,"1":2,"2":4,"3":28,"4":3,"6":6,"7":14,"10":20,"12":15,"13":5,"14":18,"17":19,"18":21,"19":7,"20":8,"21":9,"22":10,"23":11,"24":12,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","38":"r7","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34","57":"r7"},{"57":"acc"},{"57":"r1"},{"9":35,"38":"s36","57":"r17"},{"35":"s37","38":"r6","57":"r6"},{"34":"r3","35":"r3","36":"r3","37":"r3","38":"r3","40":"r3","42":"r3","57":"r3"},{"34":"r4","35":"r4","36":"r4","37":"r4","38":"r4","40":"r4","42":"r4","57":"r4"},{"34":"r22","35":"r22","36":"r22","37":"r22","38":"r22","40":"r22","42":"r22","50":"s41","57":"r22"},{"34":"r35","35":"r35","36":"r35","37":"r35","38":"r35","40":"r35","42":"r35","50":"r35","51":"s43","57":"r35"},{"34":"r37","35":"r37","36":"r37","37":"r37","38":"r37","40":"r37","42":"r37","50":"r37","51":"r37","52":"s45","57":"r37"},{"34":"r39","35":"r39","36":"r39","37":"r39","38":"r39","40":"r39","42":"r39","50":"r39","51":"r39","52":"r39","53":"s47","57":"r39"},{"34":"r41","35":"r41","36":"r41","37":"r41","38":"r41","40":"r41","42":"r41","50":"r41","51":"r41","52":"r41","53":"r41","54":"s49","57":"r41"},{"34":"r43","35":"r43","36":"r43","37":"r43","38":"r43","40":"r43","42":"r43","50":"r43","51":"r43","52":"r43","53":"r43","54":"r43","55":"s51","57":"r43"},{"34":"r45","35":"r45","36":"r45","37":"r45","38":"r45","40":"r45","42":"r45","50":"r45","51":"r45","52":"r45","53":"r45","54":"r45","55":"r45","57":"r45"},{"34":"r47","35":"r47","36":"r47","37":"r47","38":"r47","40":"r47","42":"r47","50":"r47","51":"r47","52":"r47","53":"r47","54":"r47","55":"r47","57":"r47"},{"34":"r48","35":"r48","36":"r48","37":"r48","38":"r48","40":"r48","42":"r48","50":"r48","51":"r48","52":"r48","53":"r48","54":"r48","55":"r48","57":"r48"},{"34":"r49","35":"r49","36":"r49","37":"r49","38":"r49","39":"r53","40":"r49","42":"r49","50":"r49","51":"r49","52":"r49","53":"r49","54":"r49","55":"r49","57":"r49"},{"3":28,"7":14,"10":20,"12":15,"14":18,"17":19,"18":21,"25":53,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"34":"r11","35":"r11","36":"r11","37":"r11","38":"r11","40":"r11","41":"s54","42":"r11","43":"s55","50":"r11","51":"r11","52":"r11","53":"r11","54":"r11","55":"r11","57":"r11"},{"34":"r12","35":"r12","36":"r12","37":"r12","38":"r12","40":"r12","42":"r12","50":"r12","51":"r12","52":"r12","53":"r12","54":"r12","55":"r12","57":"r12"},{"34":"r13","35":"r13","36":"r13","37":"r13","38":"r13","40":"r13","42":"r13","50":"r13","51":"r13","52":"r13","53":"r13","54":"r13","55":"r13","57":"r13"},{"34":"r25","35":"r25","36":"r25","37":"r25","38":"r25","40":"r25","41":"r25","42":"r25","43":"r25","50":"r25","51":"r25","52":"r25","53":"r25","54":"r25","55":"r25","57":"r25"},{"34":"r34","35":"r34","36":"r34","37":"r34","38":"r34","40":"r34","41":"r34","42":"r34","43":"r34","50":"r34","51":"r34","52":"r34","53":"r34","54":"r34","55":"r34","57":"r34"},{"34":"r29","35":"r29","36":"r29","37":"r29","38":"r29","40":"r29","42":"r29","50":"r29","51":"r29","52":"r29","53":"r29","54":"r29","55":"r29","57":"r29"},{"34":"r30","35":"r30","36":"r30","37":"r30","38":"r30","40":"r30","42":"r30","50":"r30","51":"r30","52":"r30","53":"r30","54":"r30","55":"r30","57":"r30"},{"34":"r31","35":"r31","36":"r31","37":"r31","38":"r31","40":"r31","42":"r31","50":"r31","51":"r31","52":"r31","53":"r31","54":"r31","55":"r31","57":"r31"},{"34":"r32","35":"r32","36":"r32","37":"r32","38":"r32","40":"r32","42":"r32","50":"r32","51":"r32","52":"r32","53":"r32","54":"r32","55":"r32","57":"r32"},{"34":"r33","35":"r33","36":"r33","37":"r33","38":"r33","40":"r33","42":"r33","50":"r33","51":"r33","52":"r33","53":"r33","54":"r33","55":"r33","57":"r33"},{"34":"r18","35":"r18","36":"r18","37":"r18","38":"r18","40":"r18","42":"r18","50":"r18","51":"r18","52":"r18","53":"r18","54":"r18","55":"r18","57":"r18"},{"5":58,"11":61,"15":59,"16":60,"17":62,"18":63,"34":"r9","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22"},{"2":70,"3":28,"6":6,"7":14,"10":20,"12":15,"13":5,"14":18,"17":19,"18":21,"19":7,"20":8,"21":9,"22":10,"23":11,"24":12,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"28":72,"39":"s73"},{"39":"r52"},{"39":"r60"},{"39":"r59"},{"57":"r2"},{"57":"r16"},{"2":38,"3":28,"6":6,"7":14,"10":20,"12":15,"13":5,"14":18,"17":19,"18":21,"19":7,"20":8,"21":9,"22":10,"23":11,"24":12,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"35":"s37","36":"s39"},{"2":40,"3":28,"6":6,"7":14,"10":20,"12":15,"13":5,"14":18,"17":19,"18":21,"19":7,"20":8,"21":9,"22":10,"23":11,"24":12,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"34":"r10","35":"r10/s37","36":"r10","37":"r10","38":"r10","40":"r10","42":"r10","57":"r10"},{"3":28,"7":14,"10":20,"12":15,"14":18,"17":19,"18":21,"20":42,"21":9,"22":10,"23":11,"24":12,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"34":"r36","35":"r36","36":"r36","37":"r36","38":"r36","40":"r36","42":"r36","50":"r36","51":"s43","57":"r36"},{"3":28,"7":14,"10":20,"12":15,"14":18,"17":19,"18":21,"21":44,"22":10,"23":11,"24":12,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"34":"r38","35":"r38","36":"r38","37":"r38","38":"r38","40":"r38","42":"r38","50":"r38","51":"r38","52":"s45","57":"r38"},{"3":28,"7":14,"10":20,"12":15,"14":18,"17":19,"18":21,"22":46,"23":11,"24":12,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"34":"r40","35":"r40","36":"r40","37":"r40","38":"r40","40":"r40","42":"r40","50":"r40","51":"r40","52":"r40","53":"s47","57":"r40"},{"3":28,"7":14,"10":20,"12":15,"14":18,"17":19,"18":21,"23":48,"24":12,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"34":"r42","35":"r42","36":"r42","37":"r42","38":"r42","40":"r42","42":"r42","50":"r42","51":"r42","52":"r42","53":"r42","54":"s49","57":"r42"},{"3":28,"7":14,"10":20,"12":15,"14":18,"17":19,"18":21,"24":50,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"34":"r44","35":"r44","36":"r44","37":"r44","38":"r44","40":"r44","42":"r44","50":"r44","51":"r44","52":"r44","53":"r44","54":"r44","55":"s51","57":"r44"},{"3":28,"7":14,"10":20,"12":15,"14":18,"17":19,"18":21,"25":52,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"34":"r46","35":"r46","36":"r46","37":"r46","38":"r46","40":"r46","42":"r46","50":"r46","51":"r46","52":"r46","53":"r46","54":"r46","55":"r46","57":"r46"},{"34":"r50","35":"r50","36":"r50","37":"r50","38":"r50","40":"r50","42":"r50","50":"r50","51":"r50","52":"r50","53":"r50","54":"r50","55":"r50","57":"r50"},{"2":56,"3":28,"6":6,"7":14,"10":20,"12":15,"13":5,"14":18,"17":19,"18":21,"19":7,"20":8,"21":9,"22":10,"23":11,"24":12,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"18":80,"49":"s22"},{"35":"s37","42":"s57"},{"34":"r23","35":"r23","36":"r23","37":"r23","38":"r23","40":"r23","41":"r23","42":"r23","43":"r23","50":"r23","51":"r23","52":"r23","53":"r23","54":"r23","55":"r23","57":"r23"},{"34":"s64"},{"8":65,"34":"r15","37":"s66"},{"34":"r26","37":"r26"},{"36":"s68"},{"36":"r19"},{"36":"r20"},{"34":"r5","35":"r5","36":"r5","37":"r5","38":"r5","40":"r5","42":"r5","50":"r5","51":"r5","52":"r5","53":"r5","54":"r5","55":"r5","57":"r5"},{"34":"r8"},{"11":61,"16":67,"17":62,"18":63,"34":"r14","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22"},{"34":"r27","37":"r27"},{"2":69,"3":28,"6":6,"7":14,"10":20,"12":15,"13":5,"14":18,"17":19,"18":21,"19":7,"20":8,"21":9,"22":10,"23":11,"24":12,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"34":"r28","35":"s37","37":"r28"},{"35":"s37","40":"s71"},{"34":"r21","35":"r21","36":"r21","37":"r21","38":"r21","40":"r21","42":"r21","50":"r21","51":"r21","52":"r21","53":"r21","54":"r21","55":"r21","57":"r21"},{"34":"r51","35":"r51","36":"r51","37":"r51","38":"r51","39":"r51","40":"r51","42":"r51","50":"r51","51":"r51","52":"r51","53":"r51","54":"r51","55":"r51","57":"r51"},{"3":28,"7":14,"10":20,"12":15,"13":76,"14":18,"17":19,"18":21,"19":7,"20":8,"21":9,"22":10,"23":11,"24":12,"25":13,"26":16,"27":31,"29":74,"30":75,"31":33,"32":32,"33":"s29","39":"s30","40":"r56","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"40":"s77"},{"37":"s78","40":"r55"},{"37":"r57","40":"r57"},{"34":"r54","35":"r54","36":"r54","37":"r54","38":"r54","39":"r54","40":"r54","42":"r54","50":"r54","51":"r54","52":"r54","53":"r54","54":"r54","55":"r54","57":"r54"},{"3":28,"7":14,"10":20,"12":15,"13":79,"14":18,"17":19,"18":21,"19":7,"20":8,"21":9,"22":10,"23":11,"24":12,"25":13,"26":16,"27":31,"31":33,"32":32,"33":"s29","39":"s30","44":"s23","45":"s24","46":"s25","47":"s26","48":"s27","49":"s22","54":"s17","56":"s34"},{"37":"r58","40":"r58"},{"34":"r24","35":"r24","36":"r24","37":"r24","38":"r24","40":"r24","41":"r24","42":"r24","43":"r24","50":"r24","51":"r24","52":"r24","53":"r24","54":"r24","55":"r24","57":"r24"}];

/**
 * Parsing stack.
 */
const stack = [];

/**
 * Tokenizer instance.
 */
let tokenizer;
/**
 * Generic tokenizer used by the parser in the Syntax tool.
 *
 * https://www.npmjs.com/package/syntax-cli
 *
 * See `--custom-tokinzer` to skip this generation, and use a custom one.
 */

const lexRules = [[/^\/\/.*/, function() { /* skip comments */ }],
[/^\/\*(.|\s)*?\*\//, function() { /* skip comments */ }],
[/^\s+/, function() { /* skip whitespace */ }],
[/^\btrue\b/, function() { return 'TRUE' }],
[/^\bfalse\b/, function() { return 'FALSE' }],
[/^\bnull\b/, function() { return 'NULL' }],
[/^\breturn\b/, function() { return 'RETURN' }],
[/^\babs/, function() { return 'FN' }],
[/^\bmax/, function() { return 'FN' }],
[/^\bmin/, function() { return 'FN' }],
[/^\bround/, function() { return 'FN' }],
[/^\bnow/, function() { return 'FN' }],
[/^\btoday/, function() { return 'FN' }],
[/^\(/, function() { return 'LPAREN' }],
[/^\)/, function() { return 'RPAREN' }],
[/^\{/, function() { return 'LCURLY' }],
[/^\}/, function() { return 'RCURLY' }],
[/^\[/, function() { return 'LBRACKET' }],
[/^\]/, function() { return 'RBRACKET' }],
[/^:/, function() { return 'COLON' }],
[/^;/, function() { return 'SEMICOLON' }],
[/^,/, function() { return 'COMMA' }],
[/^\./, function() { return 'DOT' }],
[/^\?/, function() { return 'QUESTION' }],
[/^\|\|/, function() { return 'LOGICAL_OR' }],
[/^&&/, function() { return 'LOGICAL_AND' }],
[/^(\d+(\.\d+)?)/, function() { return 'NUMBER' }],
[/^(=|!)=/, function() { return 'EQUALITY_OPERATOR' }],
[/^(\+|\-)/, function() { return 'ADDITIVE_OPERATOR' }],
[/^(\*|\/|%)/, function() { return 'MULTIPLICATIVE_OPERATOR' }],
[/^(>|<)=?/, function() { return 'RELATIONAL_OPERATOR' }],
[/^"[^"]*"/, function() { yytext = yytext.slice(1, -1); return 'STRING'; }],
[/^'[^']*'/, function() { yytext = yytext.slice(1, -1); return 'STRING'; }],
[/^[a-zA-Z0-9_]+/, function() { return 'IDENTIFIER' }]];
const lexRulesByConditions = {"INITIAL":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]};

const EOF_TOKEN = {
  type: EOF,
  value: '',
};

tokenizer = {
  initString(string) {
    this._string = string;
    this._cursor = 0;

    this._states = ['INITIAL'];
    this._tokensQueue = [];

    this._currentLine = 1;
    this._currentColumn = 0;
    this._currentLineBeginOffset = 0;

    /**
     * Matched token location data.
     */
    this._tokenStartOffset = 0;
    this._tokenEndOffset = 0;
    this._tokenStartLine = 1;
    this._tokenEndLine = 1;
    this._tokenStartColumn = 0;
    this._tokenEndColumn = 0;

    return this;
  },

  /**
   * Returns tokenizer states.
   */
  getStates() {
    return this._states;
  },

  getCurrentState() {
    return this._states[this._states.length - 1];
  },

  pushState(state) {
    this._states.push(state);
  },

  begin(state) {
    this.pushState(state);
  },

  popState() {
    if (this._states.length > 1) {
      return this._states.pop();
    }
    return this._states[0];
  },

  getNextToken() {
    // Something was queued, return it.
    if (this._tokensQueue.length > 0) {
      return this.onToken(this._toToken(this._tokensQueue.shift()));
    }

    if (!this.hasMoreTokens()) {
      return this.onToken(EOF_TOKEN);
    }

    let string = this._string.slice(this._cursor);
    let lexRulesForState = lexRulesByConditions[this.getCurrentState()];

    for (let i = 0; i < lexRulesForState.length; i++) {
      let lexRuleIndex = lexRulesForState[i];
      let lexRule = lexRules[lexRuleIndex];

      let matched = this._match(string, lexRule[0]);

      // Manual handling of EOF token (the end of string). Return it
      // as `EOF` symbol.
      if (string === '' && matched === '') {
        this._cursor++;
      }

      if (matched !== null) {
        yytext = matched;
        yyleng = yytext.length;
        let token = lexRule[1].call(this);

        if (!token) {
          return this.getNextToken();
        }

        // If multiple tokens are returned, save them to return
        // on next `getNextToken` call.

        if (Array.isArray(token)) {
          const tokensToQueue = token.slice(1);
          token = token[0];
          if (tokensToQueue.length > 0) {
            this._tokensQueue.unshift(...tokensToQueue);
          }
        }

        return this.onToken(this._toToken(token, yytext));
      }
    }

    if (this.isEOF()) {
      this._cursor++;
      return EOF_TOKEN;
    }

    this.throwUnexpectedToken(
      string[0],
      this._currentLine,
      this._currentColumn
    );
  },

  /**
   * Throws default "Unexpected token" exception, showing the actual
   * line from the source, pointing with the ^ marker to the bad token.
   * In addition, shows `line:column` location.
   */
  throwUnexpectedToken(symbol, line, column) {
    const lineSource = this._string.split('\n')[line - 1];
    let lineData = '';

    if (lineSource) {
      const pad = ' '.repeat(column);
      lineData = '\n\n' + lineSource + '\n' + pad + '^\n';
    }

    throw new SyntaxError(
      `${lineData}Unexpected token: "${symbol}" ` +
      `at ${line}:${column}.`
    );
  },

  getCursor() {
    return this._cursor;
  },

  getCurrentLine() {
    return this._currentLine;
  },

  getCurrentColumn() {
    return this._currentColumn;
  },

  _captureLocation(matched) {
    const nlRe = /\n/g;

    // Absolute offsets.
    this._tokenStartOffset = this._cursor;

    // Line-based locations, start.
    this._tokenStartLine = this._currentLine;
    this._tokenStartColumn =
      this._tokenStartOffset - this._currentLineBeginOffset;

    // Extract `\n` in the matched token.
    let nlMatch;
    while ((nlMatch = nlRe.exec(matched)) !== null) {
      this._currentLine++;
      this._currentLineBeginOffset = this._tokenStartOffset + nlMatch.index + 1;
    }

    this._tokenEndOffset = this._cursor + matched.length;

    // Line-based locations, end.
    this._tokenEndLine = this._currentLine;
    this._tokenEndColumn = this._currentColumn =
      (this._tokenEndOffset - this._currentLineBeginOffset);
  },

  _toToken(tokenType, yytext = '') {
    return {
      // Basic data.
      type: tokenType,
      value: yytext,

      // Location data.
      startOffset: this._tokenStartOffset,
      endOffset: this._tokenEndOffset,
      startLine: this._tokenStartLine,
      endLine: this._tokenEndLine,
      startColumn: this._tokenStartColumn,
      endColumn: this._tokenEndColumn,
    };
  },

  isEOF() {
    return this._cursor === this._string.length;
  },

  hasMoreTokens() {
    return this._cursor <= this._string.length;
  },

  _match(string, regexp) {
    let matched = string.match(regexp);
    if (matched) {
      // Handle `\n` in the matched token to track line numbers.
      this._captureLocation(matched[0]);
      this._cursor += matched[0].length;
      return matched[0];
    }
    return null;
  },

  /**
   * Allows analyzing, and transforming token. Default implementation
   * just passes the token through.
   */
  onToken(token) {
    return token;
  },
};

/**
 * Expose tokenizer so it can be accessed in semantic actions.
 */
yy.lexer = tokenizer;
yy.tokenizer = tokenizer;

/**
 * Global parsing options. Some options can be shadowed per
 * each `parse` call, if the optations are passed.
 *
 * Initalized to the `captureLocations` which is passed
 * from the generator. Other options can be added at runtime.
 */
yy.options = {
  captureLocations: false,
};

/**
 * Parsing module.
 */
const yyparse = {
  /**
   * Sets global parsing options.
   */
  setOptions(options) {
    yy.options = options;
    return this;
  },

  /**
   * Returns parsing options.
   */
  getOptions() {
    return yy.options;
  },

  /**
   * Parses a string.
   */
  parse(string, parseOptions) {
    if (!tokenizer) {
      throw new Error(`Tokenizer instance wasn't specified.`);
    }

    tokenizer.initString(string);

    /**
     * If parse options are passed, override global parse options for
     * this call, and later restore global options.
     */
    let globalOptions = yy.options;
    if (parseOptions) {
      yy.options = Object.assign({}, yy.options, parseOptions);
    }

    /**
     * Allow callers to do setup work based on the
     * parsing string, and passed options.
     */
    yyparse.onParseBegin(string, tokenizer, yy.options);

    stack.length = 0;
    stack.push(0);

    let token = tokenizer.getNextToken();
    let shiftedToken = null;

    do {
      if (!token) {
        // Restore options.
        yy.options = globalOptions;
        unexpectedEndOfInput();
      }

      let state = stack[stack.length - 1];
      let column = tokens[token.type];

      if (!table[state].hasOwnProperty(column)) {
        yy.options = globalOptions;
        unexpectedToken(token);
      }

      let entry = table[state][column];

      // Shift action.
      if (entry[0] === 's') {
        let loc = null;

        if (yy.options.captureLocations) {
          loc = {
            startOffset: token.startOffset,
            endOffset: token.endOffset,
            startLine: token.startLine,
            endLine: token.endLine,
            startColumn: token.startColumn,
            endColumn: token.endColumn,
          };
        }

        shiftedToken = this.onShift(token);

        stack.push(
          {symbol: tokens[shiftedToken.type], semanticValue: shiftedToken.value, loc},
          Number(entry.slice(1))
        );

        token = tokenizer.getNextToken();
      }

      // Reduce action.
      else if (entry[0] === 'r') {
        let productionNumber = entry.slice(1);
        let production = productions[productionNumber];
        let hasSemanticAction = typeof production[2] === 'function';
        let semanticValueArgs = hasSemanticAction ? [] : null;

        const locationArgs = (
          hasSemanticAction && yy.options.captureLocations
            ? []
            : null
        );

        if (production[1] !== 0) {
          let rhsLength = production[1];
          while (rhsLength-- > 0) {
            stack.pop();
            let stackEntry = stack.pop();

            if (hasSemanticAction) {
              semanticValueArgs.unshift(stackEntry.semanticValue);

              if (locationArgs) {
                locationArgs.unshift(stackEntry.loc);
              }
            }
          }
        }

        const reduceStackEntry = {symbol: production[0]};

        if (hasSemanticAction) {
          yytext = shiftedToken ? shiftedToken.value : null;
          yyleng = shiftedToken ? shiftedToken.value.length : null;

          const semanticActionArgs = (
            locationArgs !== null
              ? semanticValueArgs.concat(locationArgs)
              : semanticValueArgs
          );

          production[2](...semanticActionArgs);

          reduceStackEntry.semanticValue = __;

          if (locationArgs) {
            reduceStackEntry.loc = __loc;
          }
        }

        const nextState = stack[stack.length - 1];
        const symbolToReduceWith = production[0];

        stack.push(
          reduceStackEntry,
          table[nextState][symbolToReduceWith]
        );
      }

      // Accept.
      else if (entry === 'acc') {
        stack.pop();
        let parsed = stack.pop();

        if (stack.length !== 1 ||
            stack[0] !== 0 ||
            tokenizer.hasMoreTokens()) {
          // Restore options.
          yy.options = globalOptions;
          unexpectedToken(token);
        }

        if (parsed.hasOwnProperty('semanticValue')) {
          yy.options = globalOptions;
          yyparse.onParseEnd(parsed.semanticValue);
          return parsed.semanticValue;
        }

        yyparse.onParseEnd();

        // Restore options.
        yy.options = globalOptions;
        return true;
      }

    } while (tokenizer.hasMoreTokens() || stack.length > 1);
  },

  setTokenizer(customTokenizer) {
    tokenizer = customTokenizer;
    return yyparse;
  },

  getTokenizer() {
    return tokenizer;
  },

  onParseBegin(string, tokenizer, options) {},
  onParseEnd(parsed) {},

  /**
   * Allows analyzing, and transforming shifted token. Default implementation
   * just passes the token through.
   */
  onShift(token) {
    return token;
  },
};

/**
 * Creates generic binary expression node.
 */
function BinaryExpression(left, operator, right) {
  return {
    type: 'BinaryExpression',
    operator,
    left,
    right
  };
}

/**
 * Creates generic binary expression node.
 */
function MathExpression(fn, args) {
  return {
    type: 'BinaryExpression',
    operator,
    left,
    right
  };
}

/**
 * Creates logical expression node.
 */
function LogicalExpression(left, operator, right) {
  return {
    type: 'LogicalExpression',
    operator,
    left,
    right
  };
}

/**
 * Creates an unary expression node.
 */
function UnaryExpression(operator, argument) {
  return {
    type: 'UnaryExpression',
    operator,
    argument,
  };
}

/**
 * Creates a literal node.
 */
function Literal(value) {
  return {
             type: 'Literal',
             value: value,
             raw: value
           };
}

/**
 * Creates a NumLiteral node.
 */
function NumLiteral(value) {
  return {
    type: 'Literal',
    value: Number(value),
    raw: value
  };
}

/**
 * Creates a StringLiteral node.
 */
function StringLiteral(value) {
  return {
    type: 'Literal',
    value: value,
    raw: "'" + value + "'"
  };
}

/**
 * Creates treanry.
 */
function Ternary(test, consequent, alternate) {
  return {
    type: 'ConditionalExpression',
    test,
    consequent,
    alternate,
  };
}

function ObjectLiteral(properties) {
  enforceObjectProperties(properties);
  return {
    type: 'ObjectExpression',
    properties,
  }
}

/**
 * Since we use cover grammar to parse blocks and objects,
 * this function checks that all entries in a block are
 * object properties.
 */
function enforceObjectProperties(nodes) {
  nodes.forEach(node => {
    if (node.type !== 'Property') {
      throw new Error(
        'ObjectLiteral: invalid property declaration.'
      );
    }
  });
}

/**
 * MemberExpression.
 */
function MemberExpression(object, property) {
  return {
    type: 'MemberExpression',
    computed: property.type !== 'Identifier',
    object,
    property,
  };
}

function unexpectedToken(token) {
  if (token.type === EOF) {
    unexpectedEndOfInput();
  }

  tokenizer.throwUnexpectedToken(
    token.value,
    token.startLine,
    token.startColumn
  );
}

function unexpectedEndOfInput() {
  parseError(`Unexpected end of input.`);
}

function parseError(message) {
  throw new SyntaxError(message);
}

module.exports = yyparse;
