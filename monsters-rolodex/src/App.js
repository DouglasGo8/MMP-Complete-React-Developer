import { Component } from "react";
import "./App.css";

import CardList from "./components/cardList/CardList";
import SearchBox from "./components/searchBox/SearchBox";

/**
 *
 * @returns App first Main Component
 */
class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };

  async componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ monsters: users }));
  }

  searchBoxHandler = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );
    //  console.log(filteredMonster);
    return (
      <div className="app">
        <h1 className="heading"> Monsters Rolodex </h1>
        <SearchBox
          placeholder="search..."
          handleChange={this.searchBoxHandler}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
