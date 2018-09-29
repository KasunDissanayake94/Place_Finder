import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import SideList from './components/SideList';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Search />
                    <Result />


        </div>
                <div className="col-md-4">
                    <SideList />

                </div>
        </div>

        </div>
    );
  }
}

export default App;
