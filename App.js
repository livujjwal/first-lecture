/*
const heading  = React.createElement("h1",{id:"heading",a:"hello"},"Welcome to React");
Nesting Elements => 3rd argument use to nesting another element single or array

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "tag h1"),
    React.createElement("h2", { id: "heading" }, "tag h2"),
  ]), React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "tag h1"),
    React.createElement("h2", { id: "heading" }, "tag h2"),
  ])]
);
*/
import React from "react";
import  ReactDOM  from "react-dom/client";

//React Element with  React.createElement
// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//    React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", { id: "heading" }, "tag h1"),
//       React.createElement("h2", { id: "heading2" }, "tag h2"),
//     ])
//   );

//JSX => syntax looks like html real not html/JS
//JSX => React.createElement (with the help of babel)
//Babel => package inside Parcel which transpiled JSX to reactElement(i.e., object in JS)

//React Element with JSX
// reactElement    <= JSX {with help of Babel}
// const jsxhead = <h1>Welcome to JSX</h1>


// const jsxhead = (<h1 className="heading">
//   Welcome to JSX</h1>)      //use small bracket () for code of more than 1 line

//React Components
//1.>React Object Components -> Old way not much used now
//2.>React Functional Components -> mostly used

// React Functional Components
// const Head = () => {
//   return <h1 className="heading"> Welcome to JSX</h1>
// }
// const Head = () =>  <h1 className="heading"> Welcome to JSX heading 1</h1>

//render 2 components togather
//1.> pass as array of components
// const Head = () =>  <h1 className="heading"> Welcome to JSX heading 1</h1>
// const Head2 = () =>  <h1 className="heading"> Welcome to JSX heading 2</h1>


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render([<Head/>,<Head2/>]
// );

//2.> Component composition
// const Head = () =>  <h1 className="heading"> Welcome to JSX heading 1</h1>
// const Head2 = () =>  {
//   return (<div>
//     {Head() /** inside JSX components can be call as function */} 
// {/* <Head/> */}
//     <h1 className="heading"> Welcome to JSX heading 2</h1>
//   </div>)
//      }

// reactElement inside functional componets
// const head =   <h1 className="heading"> Welcome to JSX heading 1</h1>
// const Head2 = () =>  {
//   return (<div>
//     {head}
//     <h1 className="heading"> Welcome to JSX heading 2</h1>
//   </div>)
//      }

//   functional componets inside  reactElement
const Head2 = () =>  {
  return (<div>
    
    <h1 className="heading"> Welcome to JSX heading 2</h1>
  </div>)
     }
const head =   <h1 className="heading"> Welcome to JSX heading 1{<Head2/>}</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(head);
