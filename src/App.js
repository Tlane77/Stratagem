import React from 'react';
import ResourceDetail from "./components/ResourceDetail";
import ResourceList from "./components/ResourceList";
import ResourceBar from "./components/ResourceBar"
import tutorial from "./components/Tutorial"

// import './App.css';

// Add a Class on Function to make it more dynamic

class App extends React.Component {
  state = {
    resources: [],
    selectedResource: null,
  };
  handleSubmit = async (keywordFromResourceBar) => {
    const response = await tutorial.get("/search", {
      params: {
        q: keywordFromResourceBar,
      },
    });
    this.setState({
      resources: response.data.items,
    });
  };
  handleResourceSelect = (resource) => {
    this.setState({ selectedResource: resource });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1em" }}>
        <ResourceBar handleFormSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <ResourceDetail resource={this.state.selectedResource} />
            </div>
            <div className="five wide column">
              <ResourceList
                handleResourceSelect={this.handleResourceSelect}
                resources={this.state.resources}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
