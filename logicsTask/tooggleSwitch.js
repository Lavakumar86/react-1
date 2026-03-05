function AdmininUserView(){
    const[adminuser, setAdminUser] = React.useState({
        adminName: "jhon",
        userName: "David",
        isAdmin : true   //setting up the flag
    });

    let renderData;
    const {adminName, userName, isAdmin}= adminuser; //destructuring
    if(adminuser.isAdmin){
        renderData =(
            <div>
                <h1>hello admin{adminName}</h1>
                <h1>home page</h1>
                <h1>product page</h1>
                <h1>product details</h1>
            </div>
        );
    }
    else{
        renderData =(
            <div>
                <h1>hello admin{userName}</h1>
                <h1>home page</h1>
                <h1>product page</h1>
                <h1>product</h1>
            </div>
        );
    }

    return (
        <div>
            {renderData}
            <button onClick = {() => setAdminUser({ ...adminuser, isAdmin : !isAdmin})}>Switch to{isAdmin ? `user` : `admin`}view</button>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<AdmininUserView />)