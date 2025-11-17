import ShoppingItem from "../ShoppingItem/ShoppingItem";

export default function Home({ todayList, onToggleTaken, onAddManual, onClearList, onRemoveItem }) {
  // Funzione interna per gestire l'input manuale
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.elements.newItem;
    const value = input.value.trim();
    if (value) {
      onAddManual(value); // chiama la funzione passata da App.jsx
      input.value = ""; // resetta l'input
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista di oggi</h1>

      {/* Bottone per cancellare tutta la lista */}
      <button
        onClick={onClearList}
        className="bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded mb-4"
      >
        🗑️ Cancella lista
      </button>
      {/* Form per aggiungere manualmente un alimento */}
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          name="newItem"
          placeholder="Aggiungi alimento..."
          className="border p-2 rounded flex-1"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          ➕
        </button>
      </form>

      {/* Lista degli alimenti di oggi */}
      <ul className="space-y-2">
        {todayList.length === 0 ? (
          <p className="text-gray-500">Nessun alimento nella lista.</p>
        ) : (
          todayList.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onToggle={() => onToggleTaken(item.id)}
              onRemove={() => onRemoveItem(item.id)}
              context="home"
            />
          ))
        )}
      </ul>
    </div>
  );
}
