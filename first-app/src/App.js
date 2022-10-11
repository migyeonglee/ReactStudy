import './App.css';
// import ClassState from './class';
// import FunctionState from './function';
// import Map from './map';
function App() {
   let list = ["a","b","c","d","e"];
  //  items => 배열이 담김
   let items = list.map((value , id,arr) => {
    console.log("value : ", value);
    console.log("id : ", id);
    console.log("arr : ", arr);
    return value + id;
   })
console.log('items : ',items)
  //  items = ['a0','b1','c2','d3','e4']

  return (
   <>

   </>
  );
}

export default App;
