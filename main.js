const nameContext = React.createContext('name');

function Component1(){
    const myName = 'Abner 123';
      return (
          <nameContext.Provider value={myName}>
            <div className="component-1">
                <Component2/>
            </div>
          </nameContext.Provider>
      )
}
function Component2(){
    return (
        <div className="component-2">
            <Component3/>
        </div>
    ) 
}
function Component3(){
    return (
        <div className="component-3">
            <Component4/>
        </div>
    )  ;
}
function Component4(){
    return(
        <nameContext.Consumer>
            {
                (name) => ( 
                    <div className="component-4">
                        <p className="paragraph">{name}</p>
                    </div>
                )
            }
        </nameContext.Consumer>
    );
}
function MeuComponente(){
    return (
        <div app="components">
            <Component1/>
        </div>
    );
}

ReactDOM.render(
    <MeuComponente/>,
    document.getElementById("app")
);