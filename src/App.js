import { useState } from "react";
import ItemApi from "./components/ItemApi";
import ItemCard from "./components/ItemCard";

function App() {

  const [itemData, setItemData] = useState(ItemApi)
  
  return (
    <>
      <div className="container">
      <h2 className="my-3">Welcome To Our Restaurant</h2>
        <div className="row">
          <ItemCard itemData={itemData} />
        </div>
      </div>
    </>
  );
}

export default App;
