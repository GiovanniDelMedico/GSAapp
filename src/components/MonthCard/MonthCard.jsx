export default function MonthCard({ mese, verdure, frutte }) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h1 className="text-xl font-bold mb-4">{mese}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Verdura</h2>
          <p className="text-gray-700">{verdure}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Frutta</h2>
          <p className="text-gray-700">{frutte}</p>
        </div>
      </div>
    </div>
  );
}
