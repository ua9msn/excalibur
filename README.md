## ginstr language


The main idea is to provide the ability to create business logic for the UI side from the Android application definition (config.xml)

Core: All scripts is compiled into the next function  
```
function(record){
   return <your_compiled_script>;
}
```
This function will be wrapped into another function, based on purpose. We'll return to this point later.
 
The record is a usual JS object, as it comes from server to UI, with all fields, including the servce ones.   
Accessing an any filed could be done in two ways: `record.<field_name>` and `record["field_name"]`  
Both ways are equal except in first case it's not possible to access the field containing minus sign.

#### Internal functions
                                      
Apart the record object, inside the function you will have next "global" functions:

| Function | Example |      |
|----------|---------|------|
| `max` | `max(1,3,5) -> 5` | Return the max value from it's numeric arguments |  
| `min` | `min(1,3,5) -> 1` | Return the max value from it's numeric arguments |   
| `round` | `round(1.2) -> 1`  <br> `round(1.6) -> 2`  | Return rounded number |  
| `now()` | `now() -> 1566917051141` | Return current timestamp|  
| `today()` | `today() -> 1566853200000` |  Return today's midnight in current user timezone| 



### Usage in ginstr

#### Validation 

Any expression could be a validation function. It's not necessary to return boolean value, 
this will be done automatically, in according to the JS "Falsy/Truthy" values  
So, `false, 0, "", '', null, undefined, NaN` will be treated as `false`, everything else as `true`                                      



#### Grammar

Basic math operations

``` 
1 + 2 = 3
2 + 2 * 2 = 6
(2 + 2) * 2 = 8
```
 
#### Caveats

 It is needed to be careful with accessing a deep property. JS doesn't support the fault tolerance access yet.
 So, instead of getting `record.a.b.c.d` it's much more safe to get
 `record.a && record.a.b && record.a.b.c && record.a.b.c.d`  



