# Design pattern

### what is a design pattern ?

A design pattern is a general repeteable solution to a commonly occuring problem in software design

In react it is mostly to solve an issue regarging and passing props with ease

renderd prop and HOC are two design patterns in react these are used by a lot of libraries like react router , redux connect

### the term " rendered prop " refers to a technique for sharing code between react components using props whose value is a function

- a render prop is a function prop that a component uses to know what to render.

- lets assume there are two components <Mouse/> amd <Cat mouse={} />
  the mouse component has the code to find (x,y)[mouse] of a mouse and cat component aslo need the mouse coordinates as props so now in order to reuse the code
  of mouse component we can hard code the Cat component inside the mouse component and pass te [mouse] value
- but this is not really code reuse
  Now lets say there is another component <Dog mouse={} /> whihc also requires [mouse] props
- so it we do it by the previous approch we have to create anothe component <MouseDog/> which makes no sence as out goal is code reuse .
- to come around this problem we can use dynamically rendered props . We make a base component <WithMouse/>

```

const WithMouse = ({render}) => {

    const [mouse,setMouse] = useState({
        x : 0 ,
        y : 0
    })
    const handel = (event) => {
        setMouse({
            x : event.clientX ,
            y : event.clientY
        })
    }
    return <div  onMouseMove={hande}>
        {render(mouse)}
    </div>
}

export default WithMouse ;

```

so now we can dynamically pass <Cat/> and <Dog/>

```
    <WithMouse render={ mouse =>  <Cat mouse={mouse} /> } >
    <WithMouse render={ mouse =>  <Dog mouse={mouse} /> } >

```
