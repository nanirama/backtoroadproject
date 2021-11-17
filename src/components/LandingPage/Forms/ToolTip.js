import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import styled from 'styled-components'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "top",
      type: "light",
      effect: "float",
      condition: false
    };
  }

  changePlace(place) {
    this.setState({
      place: place
    });
  }

  changeType(type) {
    this.setState({
      type: type
    });
  }

  changeEffect(effect) {
    this.setState({
      effect: effect
    });
  }

  _onClick() {
    this.setState({
      condition: true
    });
  }

  render() {
    const { place, type, effect } = this.state;
    return (
      <>
          <div className="demonstration">
            <ToolTipAnchor
              data-for="main"
              data-tip={this.props.content}
              data-iscapture="true"
            >
              {this.props.title}
            </ToolTipAnchor>
          </div>
          <ReactTooltip
          data-class="mytooltip"
          className="mytooltip"
          id="main"
          place={place}
          type={type}
          effect={effect}
          multiline={true}
        />
      </>
    )
  }
}

const ToolTipAnchor = styled.div`
  background: #8AADD1;
  padding: 0.25rem 0.5rem;
  font-size:9px; 
  line-height:12px;
  width: 100%;
  height:20px;
  color:#ffffff;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
`