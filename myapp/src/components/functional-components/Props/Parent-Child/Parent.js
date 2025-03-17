import Child1 from "./Child1";
import Child2 from "./Child2";


function Parent() {
  // var data = [{name: 'laptop', price: 20000}, {name: 'tab', price: 3000}]
  var data = 'sachin'
  return <div>
    <h3>Name: {data}</h3>
    <Child1 data = {data} />
    <Child2 data={data} />
  </div>
}

export default Parent