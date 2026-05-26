import type { ShoppingItem } from "../../interface/ShoppingItem";
import styles from "./ItemCard.module.css";

interface ItemCardProps {
  item: ShoppingItem;
  onRemoveItem: (id: number) => void;
}

export function ItemCard({ item, onRemoveItem }: ItemCardProps) {
  return (
    <li className={styles.itemCard}>
      <div className={styles.itemInfo}>
        <h4 className={styles.itemName}>{item.name}</h4>
        <p className={styles.itemQuantity}>Quantidade: {item.quantity}</p>
      </div>
      <button 
        className={styles.removeBtn} 
        onClick={() => onRemoveItem(item.id)}
      >
        Remover
      </button>
    </li>
  );
}
