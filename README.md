## Typescript  
- ts basics 
- declare types with typescript (union,intersection,utils)
- tsconfig.josn basics 
- compiling ts with webpack
- how to use ts with React (installation) 
- basics of TS-React / things to know 


## ts-basic 
- typescript provides all the features of javascript with additioal layers on top of it ( type checking , attribute hinting / suggestion /inferred types , hinting errors before they occure)
- simple example of declaring a variable . In JS `const name = "arif"` , in TS `const name : string = "arif"`
- primitive types are `string` `number` `boolean` . some advance types are ...// todo 
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