import "./App.css";
import Navbar from "./components/Navbar";
import data from "./data";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="cards">
        {data.map((item) => (
          <Card
            key={item.id}
            location={item.location}
            imageUrl={item.imageUrl}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
