import React, { Component } from "react";

class StatusProfile extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  deActivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };

  setStatusValue = (value) => {
    this.setState({ status: value });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <span onDoubleClick={this.activateEditMode}>
            {this.props.status || "click here to add your status"}
          </span>
        )}
        {this.state.editMode && (
          <input
            autoFocus={true}
            onBlur={this.deActivateEditMode}
            value={this.state.status}
            onChange={(e) => this.setStatusValue(e.target.value)}
          />
        )}
      </div>
    );
  }
}

export default StatusProfile;
