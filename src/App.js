import './App.css'
import DataComp from './DataComp'
import GodownCount from './GodownCount'
import GodownCounter1 from './GodownCounter1'

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Implement Redux on Own</h1>
        <h2>Godown Counter</h2>
        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <GodownCount ></GodownCount>
          <GodownCounter1 className="godown"></GodownCounter1>
        </section>
        <DataComp></DataComp>
      </header>
    </div>
  )
}

export default App
