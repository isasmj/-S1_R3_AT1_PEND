import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./App.css";

import type { ShoppingItem } from "./interface/ShoppingItem";

import { ShoppingList } from "./components/ShoppingList/ShoppingList";

function App() {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);
  
  const [productName, setProductName] = useState<string>("");
  const [productQuantity, setProductQuantity] = useState<number | "">("");

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setProductName(e.target.value);
  }

  function handleQuantityChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setProductQuantity(value === "" ? "" : Number(value));
  }

  function handleAddItem(e: FormEvent) {
    e.preventDefault();

    if (!productName.trim() || !productQuantity || productQuantity <= 0) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    const newItem: ShoppingItem = {
      id: Date.now(), 
      name: productName,
      quantity: Number(productQuantity),
    };

    setShoppingItems([...shoppingItems, newItem]);
    
    setProductName("");
    setProductQuantity("");
  }

  function handleRemoveItem(id: number) {
    const updatedList = shoppingItems.filter((item) => {
      return item.id !== id;
    });

    setShoppingItems(updatedList);
  }

  return (
    <div className="container">
      <h1>Lista de Compras</h1>

      <form onSubmit={handleAddItem} className="form-add">
        <div className="form-group">
          <label htmlFor="nameInput">Nome do Produto:</label>
          <input 
            id="nameInput"
            type="text" 
            value={productName} 
            onChange={handleNameChange} 
            placeholder="Ex: Arroz"
          />
        </div>

        <div className="form-group">
          <label htmlFor="qtyInput">Quantidade:</label>
          <input 
            id="qtyInput"
            type="number" 
            value={productQuantity} 
            onChange={handleQuantityChange} 
            placeholder="Ex: 2"
            min="1"
          />
        </div>

        
        <button type="submit" className="addBtn">Adicionar à Lista</button>
      </form>

      
      <ShoppingList items={shoppingItems} onRemoveItem={handleRemoveItem} />
    </div>
  );
}

export default App;
