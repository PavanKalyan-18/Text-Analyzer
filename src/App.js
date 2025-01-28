import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" AboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils"/>
      <div className="conatiner my-3">
      <TextForm heading="Enter The Text to Analyze Below"/>
      </div>
    </>
  );
}

export default App;

