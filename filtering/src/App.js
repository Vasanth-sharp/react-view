import react, { useEffect, useState } from "react";
function App() {
  const [items, setItems] = useState([
    "arun",
    "vinoth",
    "vasanth",
    "shewag",
    "saran",
    "kamlesh",
  ]);
  const [filtered, setFiltered] = useState([]);
  const [pattern, setPattern] = useState("");

  useEffect(() => {
    setFiltered(
      items.filter((item) => {
        return item.includes(pattern);
      })
    );
  }, [pattern]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Enter a text"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
      />
      <ul>{filtered.length > 0 && filtered.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
}

export default App;
