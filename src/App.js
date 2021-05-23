import React, {Component} from 'react';
import {CardList} from './Component/card-list/card-list.component';
import './App.css';
import {SearchBox} from './Component/search-box/search-box.component';

class App extends Component{

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled:''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
   
  }
  
  handleChange = e => {
    this.setState({searchFiled: e.target.value})
  }

  render(){
    const { monsters, searchFiled } = this.state;
    // const monsters = this.state.monsters;
    //  const searchFiled = this.state.searchFiled;
    const filteredMonsters = monsters.filter(monsters =>
        monsters.name.toLowerCase().includes(searchFiled.toLowerCase())
      );

    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
       placeholder='Search Monsters'
      handleChange={this.handleChange
          }
      />
      
      <CardList monsters={filteredMonsters} />
     
      </div>
    )
  }
}

export default App;
