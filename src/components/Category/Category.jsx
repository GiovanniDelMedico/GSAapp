import ShoppingItem from "../ShoppingItem/ShoppingItem";

export default function Category({ category, todayList, onToggleItem, onAddToCategory }) {
  // Funzione interna per aggiungere un nuovo alimento alla categoria
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.elements.newItem;
    const value = input.value.trim();
    if (value) {
      onAddToCategory(value); // chiama la funzione passata da App.jsx
      input.value = "";       // resetta l’input
    }
  };

  // Helper: controlla se un item della categoria è già nella lista di oggi
  const isInTodayList = (id) => todayList.some((i) => i.id === id);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{category.name}</h1>

      {/* Form per aggiungere un alimento alla categoria */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          name="newItem"
          placeholder={`Aggiungi a ${category.name}...`}
          className="border p-2 rounded flex-1"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          ➕
        </button>
      </form>

      {/* Lista degli alimenti della categoria */}
      <ul className="space-y-4">
        {category.items.length === 0 ? (
          <p className="text-gray-500">Nessun alimento in questa categoria.</p>
        ) : (
          category.items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onToggle={() => onToggleItem(item)}
              context="category"
              checked={isInTodayList(item.id)}
            />
          ))
        )}
      </ul>
    </div>
  );
}