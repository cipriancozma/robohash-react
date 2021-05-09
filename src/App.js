import "./App.scss";
import "tachyons";
import CardList from "./components/CardList";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import Scroll from "./components/Scroll";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './components/ErrorFallback';

function App() {
  const [robots, setRobots] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.data;
        setRobots(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredRobots =  robots.filter((robot) => {
    return robot.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className="App">
      <h1 className="title">RoboHash</h1>
      <Search searchChange={handleChange} />
      {robots.length === 0 ? (
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading...</div>
          </div>
          <p></p>
        </div>
      ) : (
        <Scroll>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <CardList robohash={filteredRobots} />
            </ErrorBoundary>
        </Scroll>
      )}
    </div>
  );
}

export default App;
