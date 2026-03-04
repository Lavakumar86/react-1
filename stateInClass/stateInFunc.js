

function MyComp(){
    //hooks - all activates from class comp is able to do func
    //comp with hooks,"use"

    //use syntax
    const [uName, setUName] = React.useState("lava");
    const [age, setAge] = React.useState(22);


    const [items, setItems] = React.useState({
        id : 1,
        itemName :"pen",
        price: 100
    });
    return (<div>
        <h1>name is {uName} age is{age}</h1>
        <button onClick={() => setUName("david")}>change</button>

        <h2>
            item no {items.id} Item is {items.itemName} and price is {items.price}
        </h2>
        <button onClick={() => setItems({...items, itemName:"pencil"})}>Change item</button>
    </div>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<MyComp />)



// function MyComp() {

//     const [uName, setUName] = React.useState("lava");
//     const [age, setAge] = React.useState(22);

//     const [items, setItems] = React.useState({
//         id: 1,
//         itemName: "pen",
//         price: 100
//     });

//     return (
//         <div>
//             <h1>Name is {uName} and age is {age}</h1>

//             <button onClick={() => setUName("david")}>
//                 Change Name
//             </button>

//             <h2>
//                 Item no {items.id} Item is {items.itemName} and price is {items.price}
//             </h2>

//             <button onClick={() => setItems({ ...items, itemName: "pencil" })}>
//                 Change Item
//             </button>
//         </div>
//     );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<MyComp />);