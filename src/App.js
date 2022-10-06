import './App.css';
import SearchBar from './SearchBar';
import PropTypes  from 'prop-types';
import Info from './info.js';
import {useState} from 'react';
import AddItem from './AddItem';
import ItemsDisplay from './ItemsDiaplay';


function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: [] });

  const updateFilters = (searchparams) => {
    setFilters(searchparams);
  };

  const addItemToData = (item) => {
    let items = data['items'];
    item.id = items.length;
    items.push(item);
    setData({items: items});
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Kitan's app.</h1>
      <SearchBar updateSearchParams={updateFilters}></SearchBar>
      <ItemsDisplay items={data['items']}/>
      <AddItem addItem={ addItemToData}/>
    </div>
  );
}

export default App;
