// import React from "react";
// import ReactDOM from "react-dom/client";

function Parent(){
    const [gift, setGift] = React.useState("time");
    return (
        <div>
            <h2>parent Component</h2>
            <Child gift={gift}/>
        </div>
    );
}
function Child(props){
    return (
        <div>
            <h2>child component</h2>
            <h3>gift from parents {props.gift}</h3>
        </div>
    );
}

ReactDOM.render(<Parent />, document.getElementById("root"))

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Parent />);