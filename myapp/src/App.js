// import Child from "./Child"
import Child from "./components/class-components/component/Child"
import Parent from "./components/class-components/component/Parent"
// import Parent from "./components/functional-components/component/Parent"


function App() {
  return <div>
    <h2>App component</h2>
    {/* {Child()} */}
    {/* <Child/> */}
    {/* <Parent/> */}
    {/* {Parent()} */}
    {/* {new Parent().render()} */}
    <Parent/>
    <Child/>
  </div>
}

export default App