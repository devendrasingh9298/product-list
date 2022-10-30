import '../App.css';

function Box(props){

    const item = props.item;

    let handleclick = () => {
        alert(item.name + ' ' + 'Added Your Cart Succesfully....' + 'Price : '+item.price+'.');
    }

    return(
        <div className="App">
            
            <img src={item.img} />
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <h3>{item.size}</h3>
            <p>This Laptop for Sale.</p>
            <button onClick={handleclick}>Add To Cart</button>
        </div>
    );
}

export default Box;