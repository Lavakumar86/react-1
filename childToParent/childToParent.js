// import React from "react";

// function Parent(){
//     const [fruits, setFruits] = React.useState([])
//     const giftfromChild = (data) => {
//         console.log("gift from child", data);
//         setFruits(data);
        
//     }
//     return(
//         <div>
//             <h2>Parent component</h2>
//             <Child giftFromChild = {giftFromChild}/>
//         </div>
//     );
// }

// function Child(props){
//     const[gifts, setGift] =React.useState(["straberry", "chiko", "mango","banana"]);
//     return (
//         <div>
//             <h2>child component</h2>
//             {fruits.map((val, ind) => {
//                 return <li>{val}</li>
//             })}
//         </div>
//     )
// }




// import React from "react";
// import ReactDOM from "react-dom/client";

function Parent() {
    const [fruits, setFruits] = React.useState([]);

    // Function that receives data from child
    const giftFromChild = (data) => {
        console.log("Gift from child:", data);
        setFruits(data);
    };

    return (
        <div>
            <h2>Parent Component</h2>

            <Child giftFromChild={giftFromChild} />

            <h3>Fruits received from child:</h3>
            <ul>
                {fruits.map((val, ind) => (
                    <li key={ind}>{val}</li>
                ))}
            </ul>
        </div>
    );
}

function Child(props) {
    const [gifts] = React.useState([
        "strawberry",
        "chiko",
        "mango",
        "banana"
    ]);

    return (
        <div>
            <h2>Child Component</h2>

            <button onClick={() => props.giftFromChild(gifts)}>
                Send Fruits to Parent
            </button>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Parent/>)
