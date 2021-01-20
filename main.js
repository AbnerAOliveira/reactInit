const nameContext = React.createContext('name');

function Component1(){
    const myName = 'Abner 123';
      return (
            <div className="component-1">
                <Component2>
                    <Component4 name={myName}/>
                </Component2>
            </div>
      )
}
function Component2(props){
    return (
        <div className="component-2">
            {props.children}
        </div>
    ) 
}
function Component3(){
    return (
        <div className="component-3">
            <Component4/>
        </div>
    )
}
function Component4(props){
    return(
        <div className="component-4">
            <p className="paragraph">{props.name}</p>
        </div>
    )
}
function MeuComponente(){
    return (
        <div app="components">
            <Component1/>
        </div>
    )
}

ReactDOM.render(
    <MeuComponente/>,
    document.getElementById("app")
);