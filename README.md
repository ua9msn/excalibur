## Client expression calculator

Ex(pression)Cal(culator)bur  

Sometimes we have to let the user create the deducible expressions himself.
These can be formulas in tables like you have seen in Excel, or custom filters, or, for example, rules to check permissions.
Just letting the user program would be too dangerous.
So, we need some kind of language that is safe to embed in the site and, in fact, it should be an expression calculator, not a language.  
JS is a good candidate for it, since we already have the interpreter inside, but we need to exclude statements, like `if` `for` etc 

### How to

First of all, we need to build the language parser. Clone the repo and run `npm build:parser` to do that. 
It will create the `parser.js` file in the `src` directory. It's an intermediary file that we will use. 
The reason why it is not included into the distributive is that we can change the lex and grammatical definitions.  
Now we can build the compiler. The command `npm run build:compiler` does it. 
This will create the file we will include into the source code of the client application.

Here below is the function and operators already included into the language definition.

### Grammar

##### Math and Logic operators
   
Math ` + - * / %`      
Relational operators: `>, >=, <, <=`  
Logical operators  ` &&, ||`  
Equality operators  `==, !=`  
Please notice, the Equality operators are equal to JS `===` and `!==` operators respectively, so   
``` 1 === "1" ``` returns `false`  

##### Conditional (ternary) expresstion
Due to the limitation of the language (no statements) the only way to work with conditions is the ternary operator.  
`condition ? true_expression : false_expression`  
for example: 
```
 a > b ? {color: #FFFFFF} : {color: #000000}    
```


#### Internal functions
                                      
Inside the formula the next "global" functions are avalable:

| Function | Example |      |
|----------|---------|------|
| `abs` | `abs(-1) -> 1` | Return the absolute value of number |  
| `max` | `max(1,3,5) -> 5` | Return the max value from it's numeric arguments |  
| `min` | `min(1,3,5) -> 1` | Return the max value from it's numeric arguments |   
| `round` | `round(1.2) -> 1`  <br> `round(1.6) -> 2`  | Return rounded number |  
| `now()` | `now() -> 1566917051141` | Return current timestamp|  
| `today()` | `today() -> 1566853200000` |  Return today's midnight in current user timezone| 



### Usage in your code

##### Core: 
All scripts going to be compiled into the next function:  
```
function(data){
   return <your_compiled_script>;
}
```

The `data` is a usual JS object.   
Accessing an any filed could be done in two ways: `data.field` or `data["field"]`  
Both ways are equal except in first case it's not possible to access the field containing dash in the name.


