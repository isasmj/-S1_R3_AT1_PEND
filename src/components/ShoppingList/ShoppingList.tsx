import type { ShoppingItem } from "../../interface/ShoppingItem";
import { ItemCard } from "../ItemCard/ItemCard";
import styles from "./ShoppingList.module.css";

interface ShoppingListProps {
  items: ShoppingItem[];
  onRemoveItem: (id: number) => void;
}

export function ShoppingList({ items, onRemoveItem }: ShoppingListProps) {
  return (
    <div className={styles.listContainer}>
      <h2>Itens Adicionados</h2>
      
      {items.length === 0 ? (
        <p className={styles.emptyMessage}>Nenhum item na lista.</p>
      ) : (
        <ul className={styles.shoppingList}>
          {items.map((item) => (
            <ItemCard 
              key={item.id} 
              item={item} 
              onRemoveItem={onRemoveItem} 
            />
          ))}
        </ul>
      )}
    </div>
  );
}
