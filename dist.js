const nameContext = React.createContext('name');

function Component1() {
  const myName = 'Abner 123';
  return /*#__PURE__*/React.createElement(nameContext.Provider, {
    value: myName
  }, /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(Component2, null)));
}

function Component2() {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, /*#__PURE__*/React.createElement(Component3, null));
}

function Component3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(Component4, null));
}

function Component4() {
  return /*#__PURE__*/React.createElement(nameContext.Consumer, null, name => /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "paragraph"
  }, name)));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    app: "components"
  }, /*#__PURE__*/React.createElement(Component1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponente, null), document.getElementById("app"));
