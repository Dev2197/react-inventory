import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
  });
    // Create add and remove functions here that changes the
    // state.

  const books = (value)=>{
      setInv({
          books : inv.books+value,
          notebooks:inv.notebooks,
          pens:inv.pens
      })
  }

  const noteBooks = (value)=>{
    setInv({
        books : inv.books,
        notebooks:inv.notebooks+value,
        pens:inv.pens
    })
}

const pen = (value)=>{
    setInv({
        books : inv.books,
        notebooks:inv.notebooks,
        pens:inv.pens+value
    })
}

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books:  </span>
        <button className="circlularButton" onClick={()=>{books(1)}} >+</button>
        <button className="circlularButton" onClick={()=>{books(-1)}}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{noteBooks(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{noteBooks(-1)}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{pen(1)}} >+</button>
        <button className="circlularButton" onClick={()=>{pen(-1)}}>-</button>
        <span>{inv.pens}</span>
      </div>
      {/* <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>{inkPen(1)}}>+</button>
        <button className="circlularButton" onClick={()=>{inkPen(-1)}}>-</button>
        <span>{inv.inkpens}</span>
      </div> */}
            {/*calculate total and show it*/}
      
      <div>Total: {inv.pens+inv.books+inv.notebooks}</div>

    </div>
  );
};