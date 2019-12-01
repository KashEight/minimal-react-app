import React, { useState } from "react"

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Clicked {count} time{count > 1 ? "s" : ""}</p>
      <button onClick={() => setCount(count + 1)}>
        Click!
      </button>
    </div>
  )
}

class ClassComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <p>Clicked {this.state.count} time{this.state.count > 1 ? "s" : ""}</p>
        <button onClick={ this.handleClick }>
          Click!
        </button>
      </div>
    )
  }
}

export { FunctionalComponent, ClassComponent }
