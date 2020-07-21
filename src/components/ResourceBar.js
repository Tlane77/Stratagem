import React, {useState} from "react";

class Resourcebar extends React.Component {
  state = {
    term: "Default text",
  };
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="resource-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label htmlFor="resource-search">Resource Search</label>
            <input
              onChange={this.handleChange}
              name="resource-search"
              type="text"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default Resourcebar;
