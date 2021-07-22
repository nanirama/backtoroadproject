import React, { Component } from "react"
import ChildComponent from "../components/LandingPage/Child"

class Obj extends Component {
  observer = null

  componentDidMount() {
    this.observer = new IntersectionObserver(this.handleObserverEvent, {})
  }

  componentWillUnmount() {
    this.observer.disconnect()
    this.observer = null
  }

  handleObserverEvent = entries => {
    entries.forEach(entry => console.log(entry))
  }

  observeElement = ref => {
      
    if (this.observer) this.observer.observe(ref)
    alert(this.observer);
  }

  render() {
    const colors = ["red", "orange", "yellow", "green", "blue"]

    return (
      <div>
        {colors.map(color => (
          <ChildComponent
            key={color}
            color={color}
            observeElement={this.observeElement}
          />
        ))}
      </div>
    )
  }
}

export default Obj
