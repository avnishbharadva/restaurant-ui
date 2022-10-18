import { useState } from "react";
import ItemApi from "./components/ItemApi";
import ItemCard from "./components/ItemCard";
import Navbar from "./components/Navbar";

const uniqueCat = [
    ...new Set(ItemApi.map((curElm) => {
      return curElm.time
    }))
    ,"All"
].sort()

// console.log(uniqueCat)

function App() {

  const [itemData, setItemData] = useState(ItemApi)
  const [navItem, setNavItem] = useState(uniqueCat)

  const filterItem = (category) => {

    if(category==="All"){
        setItemData(ItemApi)
        return
    }

    const updatedList = ItemApi.filter((curElm) => {
      return curElm.time === category
    })
    setItemData(updatedList)
  }
  return (
    <>
      <Navbar filterItem = {filterItem} navItem = {navItem} />

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
