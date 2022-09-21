import {useState} from "react"

function SearchBar(props){
    const[name, setName] = useState("")
    const[price, setprice] = useState(0)
    const[type, settype] = useState("")
    const[brand, setbrand] = useState("")

    return(
        <div>
            <h2>Search for an Item</h2>
            <form>
                <label for="name-field">Name:</label>
                <input 
                    id="name-field" 
                    type="text" 
                    value = {name} 
                    onChange= {(e) => e.target.value} 
                />
                <label for="price-field">Max Price:</label>
                <input id="price-field" type="number" value = {price}></input>
                <label for="type-field">Type:</label>
                <input id="type-field" type="text" value = {type}></input>
                <label for="brand-field">Brand:</label>
                <input id="brand-field" type="text" value = {brand}></input>
                <button type= "button">Search</button>
            </form>
        </div>
    )
}

export default SearchBar