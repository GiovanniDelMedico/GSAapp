export default function ShoppingItem({ item, onToggle, onRemove, context, checked }) {
  return (
    <li
      className="flex items-center justify-between gap-3 p-3 border rounded-lg shadow-sm hover:bg-gray-50"
    >
      {/* Parte sinistra: checkbox + nome */}
      <div
        className="flex items-center gap-3 cursor-pointer flex-1"
        onClick={onToggle}
      >
        <input
          type="checkbox"
          checked={context === "home" ? item.taken : checked}
          onChange={onToggle}
          className="w-8 h-8 accent-blue-500 cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        />
        <span
          className={
            context === "home" && item.taken
              ? "line-through text-gray-400 text-xl font-semibold"
              : "text-gray-800 text-xl font-semibold"
          }
        >
          {item.name}
        </span>
      </div>

      {/* Bottone X per rimuovere */}
      {context === "home" && (
        <button
          onClick={() => onRemove(item.id)}
          className="border-2 border-red-500 text-white px-2 py-2 rounded"
        >
          ✖
        </button>
      )}
    </li>
  );
}
