import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";


function Parent() {
  // var data = 100
 var [data, setData] = useState()
  function test(x) {
    console.log('test')
    console.log(x)
    // data = x\
    setData(x)
  }
  return <div>
    <h3>Parent: data of child1: {data}</h3>
    <Child1 test={test} />
    <Child2 />
  </div>
}

export default Parent