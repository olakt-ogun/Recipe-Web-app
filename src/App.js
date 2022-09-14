import './App.css';
import PropTypes  from 'prop-types';
import Info from './info.js';

function App() {
  return (
    <div className="App">
      <h1>Kitan's app.</h1>
      <Info title= "This is a practice website."></Info> 
      {/* <Info /> another way to write line 7*/}
      <AddItem text= 'default' number = {2}></AddItem>
      <Info></Info> 
      <AddItem text = 'Type something...'/>
      <AddItem text= 'Hello, welcome!'/>
    </div>
  );
}

function AddItem(props){
  
  return(
    <form>
      <label for= 'text-form'>Type Something: </label>
      <input type= 'text' value= {props.text} id= 'text-form' ></input>
    </form>
  )
}

AddItem.defaultProps = {
  number: 2,
  text: 'default',
}

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
}
export default App;
