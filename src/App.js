import React from 'react';
//import logo from './logo.svg';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import Yelp from './util/Yelp';

import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {businesses: []};
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy){
      Yelp.search(term, location, sortBy).then(response => {
        this.setState({businesses: response})
        //console.log("sY businesses: " + response.businesses);

      });

  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}



export default App;
