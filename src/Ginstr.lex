/**
 * Ginstr Language: Lexical Grammar.
 */

{
  macros: {
    id: `[a-zA-Z0-9_]`,
  },

  rules: [
    ["\\/\\/.*",                `/* skip comments */`],
    ["\/\\*(.|\\s)*?\\*\/",     `/* skip comments */`],
    [`\\s+`,                    `/* skip whitespace */`],

    // ------------------------------------------------
    // Keywords.

    [`\\bif\\b`,                   `return 'IF'`],
    [`\\belse\\b`,                 `return 'ELSE'`],
    [`\\btrue\\b`,                 `return 'TRUE'`],
    [`\\bfalse\\b`,                `return 'FALSE'`],
    [`\\bnull\\b`,                 `return 'NULL'`],
    [`\\breturn\\b`,               `return 'RETURN'`],

    // ------------------------------------------------
    // Functions
    [`\\bmax`, `return 'FN'`],
    [`\\bmin`, `return 'FN'`],
    [`\\bround`, `return 'FN'`],
    [`\\bnow`, `return 'FN'`],
    [`\\btoday`, `return 'FN'`],

    // ------------------------------------------------
    // Symbols.

    [`\\(`,                     `return 'LPAREN'`],
    [`\\)`,                     `return 'RPAREN'`],
    [`\\{`,                     `return 'LCURLY'`],
    [`\\}`,                     `return 'RCURLY'`],
    [`\\[`,                     `return 'LBRACKET'`],
    [`\\]`,                     `return 'RBRACKET'`],
    [`:`,                       `return 'COLON'`],
    [`;`,                       `return 'SEMICOLON'`],
    [`,`,                       `return 'COMMA'`],
    [`\\.`,                     `return 'DOT'`],

    // ------------------------------------------------
    // Logical operators: &&, ||

    [`\\|\\|`,                  `return 'LOGICAL_OR'`],
    [`&&`,                      `return 'LOGICAL_AND'`],

    // ------------------------------------------------
    // Assignment operators: =, *=, /=, +=, -=,
    [`=`,                       `return 'SIMPLE_ASSIGN'`],
    [`(\\*|\\/|\\+|\\-)=`,      `return 'COMPLEX_ASSIGN'`],

    // ------------------------------------------------
    // Numbers.
    [`(\\d+(\\.\\d+)?)`,        `return 'NUMBER'`],

    // ------------------------------------------------
    // Equality operators: ==, !=
    [`(=|!)=`,                  `return 'EQUALITY_OPERATOR'`],

    // ------------------------------------------------
    // Math operators: +, -, *, /
    [`(\\+|\\-)`,               `return 'ADDITIVE_OPERATOR'`],
    [`(\\*|\\/)`,               `return 'MULTIPLICATIVE_OPERATOR'`],

    // ------------------------------------------------
    // Relational operators: >, >=, <, <=
    [`(>|<)=?`,                 `return 'RELATIONAL_OPERATOR'`],

    // ------------------------------------------------
    // Strings.
    [`"[^"]*"`,                 `yytext = yytext.slice(1, -1); return 'STRING';`],
    [`'[^']*'`,                 `yytext = yytext.slice(1, -1); return 'CHAR';`],

    [`{id}+`,                   `return 'IDENTIFIER'`],
  ],
}