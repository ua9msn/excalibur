## ginstr language
The main idea is to provide the ability to create business logic for the UI side from the Android application definition.  
The main difference between the regular programming language and ginstr language is, in fact, that the ginstr 
language is a kind of a calculator. There is no statements - no `return`, no `if`, no `for`, etc. 
The ginstr language can evaluate expressions only (at least in current version). 

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



### Usage in ginstr

##### Core: 
All scripts going to be compiled into the next function:  
```
function(record, column?){
   return <your_compiled_script>;
}
```

RECORD and ROW functions will get `record` as first parameter.  
FIELD and CELL functions will get `record` as first parameter and `column` as the second one.  
`column` is the definition of table column and contains all settings as they are defined in the table.
 
The `record` is a usual JS object, which comes from server to UI, with all fields, including the servce ones.   
Accessing an any filed could be done in two ways: `record.field_name` and `record["field_name"]`  
Both ways are equal except in first case it's not possible to access the field containing dash in the name.

##### Event types
Any formula defined in the logic must return the appropriate value type.
Incorrect types will be either transformed either ignored, in any case it may break the logic.

| Event              | Run case | returned value |
|--------------------|------|------|
| RECORD_IS_VALID    | Runs before record going to be saved to serverside | boolean or error object|
| RECORD_IS_EDITABLE | Runs at the moment when user tries to open editor for any cell | boolean |
| RECORD_ON_CHANGE   | Not used yet | mutator object|
| ROW_STYLE          | Runs on every cell render (row added/modified/scrolled into view)| style object|
| FIELD_IS_VALID     | Not used yet| boolean |
| FIELD_IS_EDITABLE  | Run at the moment when user tries to open editor for this cell| boolean |
| FIELD_ON_CHANGE    | Runs right after user finished editing of the cell| mutator object |
| CELL_STYLE         | Runs on every cell render (row added/modified/scrolled into view) | style object |

##### Error object
example: 

     {
        result: 'value is incorrect as ${name} think',
        attributes: {
          name: 'Dejan'
        } 
     }

##### Style object
example: 

     {
        background: #FFFFFF,
        color: #FFFFFF
     }
     
Only `background`  and `color` are allowed. Other properties will be ignored. Properties are not mandatory.
Colors must be defined as standard HTML/CSS hex color.      

##### Mutator object
This object will be merged with the record. The result of merge is the new record.
example: 
```
 // record
  {
    "$attachments": [],
    "$createdBy": "110806",
    "column-text1": "AAA",
    "column-text2": "BBB",
    "$company": "mainUser110806",
    "_rev": "2-5e467c3551b009887551c6d069f76801",
    "counter-C": 17,
    "$timestamp": 1575992978758,
    "$references": [],
    "_id": "1d1d9087b11a0889b69d4b8054799625",
    "$createdOn": 1574405066606,
    "$info": {
      "actor": "ua9msn@mail.ru",
      "comment": "null // isPreserveActor: false",
      "actorId": "110806",
      "time": 1575992978758,
      "platform": "BACKEND"
    },
    "$uniqueKeys": [],
    "$tableId": "mainUser110806__924f3e44c2b646779c901a0ce452b360"
}

``` 
After the user stops his editing, the function can caculate new value for any column and return the  
Merge object

```
{
   "column-text2": "XXX",
}
```
After merge, the resulting record is going to be the next: 
```
   {
      "$attachments": [],
      "$createdBy": "110806",
      "column-text1": "AAA",
      "column-text2": "XXX",
      "$company": "mainUser110806",
      "_rev": "2-5e467c3551b009887551c6d069f76801",
      "counter-C": 17,
      "$timestamp": 1575992978758,
      "$references": [],
      "_id": "1d1d9087b11a0889b69d4b8054799625",
      "$createdOn": 1574405066606,
      "$info": {
        "actor": "ua9msn@mail.ru",
        "comment": "null // isPreserveActor: false",
        "actorId": "110806",
        "time": 1575992978758,
        "platform": "BACKEND"
      },
      "$uniqueKeys": [],
      "$tableId": "mainUser110806__924f3e44c2b646779c901a0ce452b360"
  }
```
It's not possible to modify any field which is not defined as a column in the table, 
e.g. it's not possible to modify `_id` or `$createdBy`
But, it is possible to modify field which is forbidden for modification at UI side and is allowed at Server side.
So, be careful.

##### Validation 

Any expression could be a validation function. It's not necessary to return boolean value, 
this will be done automatically, in according to the JS "Falsy/Truthy" values  
So, `false, 0, "", '', null, undefined, NaN` will be treated as `false`, everything else as `true`                                      

##### Defining formula in the application

Example:  
```
{
  "stopPoints": [
    {
      "name": "disable render service if denied by user",
      "type": "FIELD_IS_EDITABLE",
      "field": "stopPoint_driverStopPointHasBeenServiced",
      "source": "record['stopPoint_deliveryCustomerDeniesDelivery'] != true; "
    },
    {
      "name": "reset render service by change",
      "type": "FIELD_ON_CHANGE",
      "field": "stopPoint_deliveryCustomerDeniesDelivery",
      "source": "{ stopPoint_driverStopPointHasBeenServiced : false } ;"
    },
    {
      "name": "row style",
      "type": "ROW_STYLE",
      "source": "record[stopPoint_deliveryCustomerDeniesDelivery] == true ? { color:'#FF0000' } : ( record[stopPoint_driverStopPointHasBeenServiced] == true ? { color: '#007700' } : null ) ;"
    }
  ]
}
```

Formulas must be defined in the `src/web/webMvc.json` in the application zip.  
The file must be valid JSON file.  
Logic is defined per table. In the example the `stopPoints` is the table id, as it is defined in `configuration.xml`.   
`source` and `type` is always required.  
`name` can contain arbitrary text.  
For FIELD and CELL types the `field` property is required.  
 
 
#### Caveats

 It is needed to be careful with accessing a deep property. JS doesn't support the fault tolerance access yet.
 So, instead of getting `record.a.b.c.d` it's much more safe to get it in the way:  
 `record.a && record.a.b && record.a.b.c && record.a.b.c.d`  


### Changelog
#####2.1.0
* Added `%` operator. 
* Added `abs` function.
* Validation can return error object    

