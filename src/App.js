import artworks from "./helper/data";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
    <Homepage artwork={artworks}/>
    </div>
  );
}

export default App;
