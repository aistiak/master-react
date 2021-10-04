## Typescript  
- ts basics 
- creating types form types 
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
            x : number ; // ❌ this is not possible and will cause error
        }
        ```
- `Function` is a type in typescript 


# creating types form types 
- in `Generic` type the type is dynamically taken as a parameter 
// todo ...
# util types 
there are many uitls but we will discuess only `Partial` ,`Readonly`, `Pick`, and `Omit` 
lets say we have a type of Todo 
```
type Todo = {
    title : string ;
    completed : boolean ;
    createdAt : string ;
}
```
`Partial (Partial<Type>)` constructs a type with all properties of Type as optional  
```

type UpdatedTodo = Partial<Todo> ;

```
`Readonly (Readonly<Type>)` constructs a type with all properties of Type as readonly 

```

type ReadOnlyTodo = Readonly<Todo> ;

```
`Pick (Readonly<Type,Keys>)` Constructs a type by picking the set of properties 

```

type ModTodo = Pick<Todo, 'title' | 'completed' > ;

```
`Omit (Omit<Type,Keys>)` Constructs a type by removing the set of properties 
```

type ModTodo = Omit<Todo, 'createdAt' | 'title' > ;

```

# tsconfig.json file 
The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies 
- the root files and 
- the compiler options required to compile the project.
- By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.
- By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.
### Example tsconfig.json files
Example tsconfig.json files:
- Using the files property
    ```
    {
        "compilerOptions": {
            "module": "commonjs",
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "sourceMap": true
        },
        "files": [
            "core.ts",
            "sys.ts",
            "types.ts",
            "scanner.ts",
            "parser.ts",
            "utilities.ts",
            "binder.ts",
            "checker.ts",
            "emitter.ts",
            "program.ts",
            "commandLineParser.ts",
            "tsc.ts",
            "diagnosticInformationMap.generated.ts"
        ]
    }
    ```
- Using the include and exclude properties
    ```
    {
        "compilerOptions": {
            "module": "system",
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "outFile": "../../built/local/tsc.js",
            "sourceMap": true
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules", "**/*.spec.ts"]
    }
    ```

# compile ts with webpack 
webpack is a build-tool / bundler 
- a project using webpack has a webpack.config.js file 
- the file has 5 main sections 
    - entry 
    - output 
    - loaders 
    - plugins 
    - mode 

- mode has the value 'production' | 'development' | 'none'
- entry specifies the entry point , hear webpack starts bundling , this continas value of type string , object or array 
- output attribute tells webpack how and where you want to output your bundeled files 
- plugins specify some task you want to perform after the bundeling finishes 
- loaders specify some task you want to perform before the bundeling starts , and is expressed with `rules` attribute under `module` object  in the config file 
- webpack config has an attribute called `devServer` which provides a development server and can also be used for hotreload with `watchFiles`
    ```
    module.exports = {
        module: {
            rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            ],
        },
    };

    ```
### bundel ts with webpack 
```
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'eval-source-map',
  output: {
    publicPath: 'public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
```

## using `ts` in `React` 
### start a new project with `typescript` 
we can just use `npx create-react-app app-name --template typescript` 
### add `typescript` to existing react project 
