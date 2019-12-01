import React from "react"
import ReactDOM from "react-dom"
import { FunctionalComponent, ClassComponent } from "./component"

const App = () => (
  <div>
    <div>Hello World</div>
    <div className="test-text">Hello World</div>
    <FunctionalComponent />
    <ClassComponent />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
