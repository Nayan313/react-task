import logo from './logo.svg';
import './App.css';
import List from './Components/List';
import ConditionalList from './Components/ConditionalList';
import EventHandle from './Components/EventHandle';
import MyForm from './Components/MyForm';
import Layout from './Layout';
function App() {
  return (
    <div className="App">
      <List />
      <ConditionalList />
      <EventHandle />
<MyForm />
<Layout />
    </div>
  );
}

export default App;
