## Typescript  
- ts basics 
- util types 
- tsconfig.josn basics 
- compiling ts with webpack
- how to use ts with React (installation) 
- basics of TS-React / things to know 


## ts-basic 
- typescript provides all the features of javascript with additioal layers on top of it ( type checking , attribute hinting / suggestion /inferred types , hinting errors before they occure)
- simple example of declaring a variable . In JS `const name = "arif"` , in TS `const name : string = "arif"`
- primitive types are `string` `number` `boolean` . some advance types are Union (for custom types), Enume (for primitive types)
- `any` is used to assign multiple types to a variable 
- to declare array is TS we can use `type[]` or `Array<type>`
Example :
```
const numArray : number[] = [1,2,3] // or 
const nums : Array<number> = [1,2,3] // bothe are almost same 
```
- custom types can be declared with `type` or `interface` keyword  , TS can aslo figureout custom types from objects / datas structure 
Example : 
```
interface User {
    id : number , 
    name : string ,
}
const user : User = { id : 1 , name : "arif" }
```
```
type User {
    
}
```


- typescript allows us to build new types based on existing types with the help of unions 
```
const ID = string | number 
// header ID can be of type string or number
// the type of ID can retrived with typeof operator 
typeof ID 
```
- enumes are declared as 
```
type name = 'arif' | 'sarif' | 'sihab' | 'amit' | 'abid' ;
const personName : name = 'arif' // ✅
const manName : name = 'tipu' // ❌
```
- type alias is used to provide name for a custom type 
```
type Point = {
    x : number ;
    y : number ;
}
type ID = number | string ;
```

- interface and type alias are very similar , the key difference between them are
    - interface are extendable we can add new properties to them but not to type alias 
        ```
        interface Animal {
            species : string ;
        }

        interface Cat extends Animal {
            color : string ;
        }

        const  cat : Cat = getCat() ;

        cat.species 

        cat.color 

        ```
         for type alias

        ``` 
        type Animal = {
            species : string ; 
        }

        type Cat = Animal & {
            color : string ;
        }

        ```

    - adding new types 
        ```
        interface Animal {
            species : string ;
        }

        interface Animal {
            location : string ;
        }

        ```

        but in type alias 

        ```
        type Point {
            x : number ;
            y : number ;
        }

        type Point {
            x : number ; // this is not possible and will cause error
        }
        ```
- `Function` is a type in typescript 