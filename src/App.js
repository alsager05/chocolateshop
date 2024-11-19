import './App.css';
import storeImage from "./images/chocolatestore.png";
import darkchocolateImage from "./images/dark chocolate.jpg";
import milkchocolateImage from "./images/milk chocolate.jpg";
import whitechocolateImage from"./images/whitechocolate.jpg";

function App(){
  const products =[{
    name:"Dark Chocolate",
    price:"4 KWD",
    image: darkchocolateImage,
    },
    {
    name:"Milk Chocolate",
    price:"5 KWD",
    image: milkchocolateImage,
    },
    {
    name:"White Chocolate",
    price:"3 KWD",
    image: whitechocolateImage,
    }
  ];

  const productList=products.map((product,index) => {
    return(
      <div key={index}>
        <img className="product-Image" src={product.image} alt={product.name} />
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    );
  });
 
  return (
    <div className="App">
      <h1>Welcome to the Chocolate Shop</h1>     
      <p> Your One stop destination for the finest belgian chocolates</p>
      <img className="storeImage"
      src={storeImage} alt="chocolate"></img>
     <div className="Product-List">{productList}</div>
    </div>
  );
}

export default App;
