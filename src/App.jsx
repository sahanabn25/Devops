import actors from "./data"
import Card from "./components/Card.jsx"
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <h1> Heroes</h1>

      <div className="grid">
        {actors.map(actor => (
          <Card key={actor.id} {...actor} />
        ))}
      </div>
    </div>
  )
}

export default App
