import React from 'react';

import './App.css';

// Add a Class on Function to make it more dynamic

class App extends React.Component {
  state = {
    resources: [],
    selectedResource: null,
  };
  handleSubmit = async (keywordFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: keywordFromSearchBar,
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
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <ResourceDetail video={this.state.selectedResource} />
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
