let movies = React.createElement("ul",null,
    React.createElement("li",null,"toxic"),
    React.createElement("li",{className:"bhageera"},"bhageera"),
    React.createElement("li",{className:"ugram"},"ugram"),
    React.createElement("li",null,"rathavara"),
    React.createElement("li",null,"bharate")
);
let hobbies =["travelling","dancing","swimming","talking"]

let hob = hobbies.map((hob, ind)=>{
    return React.createElement("li", null, hob);
});

let mainele = React.createElement("div", null,movies, hob);
ReactDOM.render(mainele, document.getElementById("root"))