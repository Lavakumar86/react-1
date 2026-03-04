let unme = "lava"
let greet = <h1>good morning {unme} </h1>
let hobbies =["travelling","dancing","swimming","talking"]

let hob = <ul>
    <li>travelling</li>
    <li>dancing</li>
    <li>swimming</li>
    <li>talking</li>
</ul>

// let hobb = hobbies.map((hobb, ind) =>{
//     return <li>{hobb}</li>
// });st


// let mainele = React.createElement("div", null,greet, hob);
ReactDOM.render(<div>{greet} {hob}</div>, document.getElementById("root"));
