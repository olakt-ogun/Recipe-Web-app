import {useState} from "react"

function AddItem(props){
    const[name, setName] = useState("")
    const[price, setPrice] = useState(0)
    const[type, setType] = useState("")
    const[brand, setBrand] = useState("")

    const addItemButtonPressed = () => {
        props.addItem({data:name, price:price, type:type, brand:brand})
        setName('');
        setPrice(0);
        setType('');
        setBrand('');
    }

    return(
        <div className="container">
            <div className="row"><h2>Add an Item</h2></div>
            <div className="row">
                <label htmlFor="name-field">Name:</label>
                <input 
                    id="name-field" 
                    type="text" 
                    value = {name} 
                    onChange= {(e) => setName(e.target.value)} 
                />
                <label htmlFor="price-field">Price:</label>
                <input id="price-field" className="form-control" type="number" value = {price} onChange= {(e) => setPrice(e.target.value)} ></input>
                <label htmlFor="type-field">Type:</label>
                <input id="type-field" classsName="form-control" type="text" value = {type} onChange= {(e) => setType(e.target.value)} ></input>
                <label htmlFor="brand-field">Brand:</label>
                <input id="brand-field" className="form-control" type="text" value = {brand} onChange= {(e) => setBrand(e.target.value)} ></input>
            </div>
            <div className="row mt-3">
                <button type= "button" className="btn btn-primary" onClick = {addItemButtonPressed}>Add Item</button>
            </div>
            <p>Name: {name}</p>
            <p>Max Price: {price}</p>
            <p>Type: {type}</p>
            <p>Brand: {brand}</p>
        </div>
    )
}

export default AddItem;