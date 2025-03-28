import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <Header setQuery={setQuery} />
      <Users query={query} />
    </div>
  );
}

export default App;
