import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    key: 1,
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    key: 2,
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    key: 3,
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    key: 4,
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    key: 5,
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    key: 6,
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //   const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  return (
    // <h1  style={style}>
    //   Fast React Pizza Co.
    // </h1>
    <header className="header">
      <h1 className="heading">Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  //we check num bkz empty array is not falsy value
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((data) => {
              return (
                <Pizza
                  key={data.key}
                  name={data.name}
                  ing={data.ingredients}
                  price={data.price}
                  img={data.photoName}
                  sold={data.soldOut}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu.Please come back later:</p>
      )}
    </main>
  );
}

function Pizza({ img, sold, name, ing, price }) {
  // if (sold) return null;

  return (
    <li className={`pizza ${sold ? "sold-out" : ""}`}>
      <img src={img} alt="Error" />
      <div>
        <h3>{name}</h3>
        <p>{ing}</p>
        <span>{sold ? "SOLD OUT!" : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order open={openHour} close={closeHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ open, close }) {
  return (
    <div className="order">
      <p>
        We're open from {open} to {close}:00.Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
//React v-18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
// React.render(<App />);
