const nameContext = React.createContext('name');

function Component1() {
  const myName = 'Abner 123';
  return /*#__PURE__*/React.createElement("div", {
    className: "component-1"
  }, /*#__PURE__*/React.createElement(Component2, null, /*#__PURE__*/React.createElement(Component4, {
    name: myName
  })));
}

function Component2(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-2"
  }, props.children);
}

function Component3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-3"
  }, /*#__PURE__*/React.createElement(Component4, null));
}

function Component4(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "component-4"
  }, /*#__PURE__*/React.createElement("p", {
    className: "paragraph"
  }, props.name));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    app: "components"
  }, /*#__PURE__*/React.createElement(Component1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponente, null), document.getElementById("app"));
