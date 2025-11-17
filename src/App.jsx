// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Stagionalita from "./components/Stagionalita/Stagionalita";

function App() {
  // 1) Stato della lista di oggi, inizializzato da LocalStorage
  const [todayList, setTodayList] = useState(() => {
    const saved = localStorage.getItem("todayList");
    return saved ? JSON.parse(saved) : [];
  });

  // 2) Salvataggio automatico in LocalStorage ogni volta che cambia todayList
  useEffect(() => {
    localStorage.setItem("todayList", JSON.stringify(todayList));
  }, [todayList]);

  // 3) Stato delle categorie
  const [categories, setCategories] = useState([
    {
      id: "frutta verdura",
      name: "Frutta Verdura",
      items: [
        { id: "pomodori", name: "Pomodori" },
        { id: "carrots", name: "Carote" },
        { id: "patate", name: "Patate" },
        { id: "porro", name: "Porro" },
        { id: "peperoni", name: "Peperoni" },
        { id: "insalata", name: "Insalata" },
        { id: "broccoli", name: "Broccoli" },
        { id: "melanzane", name: "Melanzane" },
        { id: "zucchine", name: "Zucchine" },
        { id: "tegoline", name: "Tegoline(fagiolini verdi)" },
        { id: "banane", name: "Banane" },
        { id: "mele", name: "Mele" },
        { id: "cachi", name: "Cachi" },
      ],
    },
    {
      id: "vegetali",
      name: "Prodotti Vegetali",
      items: [
        { id: "Burger", name: "Burger" },
        { id: "tempeh", name: "tempeh" },
        { id: "seitan", name: "Seitan" },
        { id: "cotoletta", name: "Cotoletta" },
        { id: "humus", name: "Humus" },
        { id: "wuna", name: "Wuna" },
        { id: "Tofu", name: "Tofu" },
        { id: "Salsiccia", name: "Salsiccia" },
        { id: "Affettato", name: "Affettato" },
        { id: "Feta Veg", name: "Feta Veg" },
      ],
    },
    {
      id: "colazione",
      name: "Colazione",
      items: [
        { id: "burro Arachidi", name: "Burro Arachidi" },
        { id: "marmellata", name: "Marmellata" },
        { id: "biscotti", name: "Biscotti" },
        { id: "Cioccolata", name: "Cioccolata" },
        { id: "Latte", name: "Latte" },
        { id: "caffè", name: "Caffè" },
      ],
    },
    {
      id: "oggetti Casa",
      name: "Oggetti Casa",
      items: [
        { id: "carta igienica", name: "Carta igienica" },
        { id: "scottecs", name: "Scottecs" },
        { id: "prodotti pulizia casa", name: "Prodotti pulizia casa" },
        { id: "prodotti lavatrice", name: "Prodotti lavatrice" },
        { id: "assorbenti", name: "Assorbenti" },
        { id: "parafarmacia", name: "Parafarmacia" },
        { id: "Shampoo", name: "Shampoo" },
        { id: "Balsamo", name: "Balsamo" },
        { id: "Detergente Intimo", name: "Detergente Intimo" },
        { id: "Dentifricio", name: "Dentifricio" },
        { id: "Spazzolino", name: "Spazzolino" },
      ],
    },
    {
      id: "legumi",
      name: "Legumi",
      items: [
        { id: "Ceci", name: "Ceci" },
        { id: "fagioli", name: "Fagioli" },
        { id: "Piselli", name: "Piselli" },
        { id: "Lenticchie", name: "Lenticchie" },
        { id: "Mais", name: "Mais" },
      ],
    },
    {
      id: "latticini",
      name: "Latticini",
      items: [
        { id: "Mozzarella", name: "Mozzarella" },
        { id: "Grana", name: "Grana" },
        { id: "Formaggio a fette", name: "Formaggio a fette" },
        { id: "feta", name: "Feta" },
      ],
    },
    {
      id: "carboidrati",
      name: "Carboidrati",
      items: [
        { id: "pasta", name: "Pasta" },
        { id: "pane", name: "Pane" },
        { id: "pane in cassetta", name: "Pane in cassetta" },
        { id: "pinsa", name: "Pinsa" },
        { id: "cous cous", name: "Cous cous" },
        { id: "riso", name: "rRiso" },
        { id: "Crackers", name: "Crackers" },
        { id: "piadine", name: "Piadine" },
      ],
    },
    {
      id: "bevande",
      name: "Bevande",
      items: [
        { id: "acqua", name: "Acqua" },
        { id: "Vino", name: "Vino" },
        { id: "The", name: "The" },
        { id: "Birra", name: "Birra" },
      ],
    },
    {
      id: "sughi e condimenti",
      name: "Sughi e Condimenti",
      items: [
        { id: "Polpa pomodoro", name: "Polpa pomodoro" },
        { id: "Pesto", name: "Pesto" },
        { id: "Sughi vari", name: "Sughi vari" },
        { id: "Olio", name: "Olio" },
        { id: "Salsa soia", name: "Salsa soia" },
        { id: "Senape", name: "Senape" },
      ],
    },
  ]);

  // 4) Helper: verifica se un item è già in todayList
  const isInTodayList = (id) => todayList.some((i) => i.id === id);

  // 5) Aggiungere un item alla lista di oggi
  const addToTodayList = (id, name) => {
    setTodayList((prev) => {
      if (prev.some((i) => i.id === id)) return prev;
      return [...prev, { id, name, taken: false }];
    });
  };

  // 6) Rimuovere un item dalla lista di oggi
  const removeFromTodayList = (id) => {
    setTodayList((prev) => prev.filter((i) => i.id !== id));
  };

  // 7) Toggle “preso” in Home
  const toggleTaken = (id) => {
    setTodayList((prev) =>
      prev.map((i) => (i.id === id ? { ...i, taken: !i.taken } : i))
    );
  };

  // 8) Aggiunta manuale in Home
  const addManualToToday = (name) => {
    const id = name.trim().toLowerCase().replace(/\s+/g, "-");
    if (!id) return;
    addToTodayList(id, name);
  };

  // 9) Aggiunta di un item a una categoria
  const addItemToCategory = (categoryId, name) => {
    const id = name.trim().toLowerCase().replace(/\s+/g, "-");
    if (!id) return;
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id === categoryId
          ? {
              ...cat,
              items: cat.items.some((it) => it.id === id)
                ? cat.items
                : [...cat.items, { id, name }],
            }
          : cat
      )
    );
  };

  // 10) Toggle dalla pagina Category
  const toggleFromCategory = (item) => {
    if (isInTodayList(item.id)) {
      removeFromTodayList(item.id);
    } else {
      addToTodayList(item.id, item.name);
    }
  };

  // 11) Cancellare tutta la lista di oggi
  const clearTodayList = () => {
    setTodayList([]);
    localStorage.removeItem("todayList");
  };

  return (
    <BrowserRouter>
      <Navbar categories={categories} />

      <main className="mx-auto max-w-2xl p-4">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <Home
                todayList={todayList}
                onToggleTaken={toggleTaken}
                onAddManual={addManualToToday}
                onClearList={clearTodayList}
                onRemoveItem={removeFromTodayList}
              />
            }
          />
          {/* Stagionalità */}
          <Route path="/stagionalita" element={<Stagionalita />} />


          {/* Category */}
          {categories.map((cat) => (
            <Route
              key={cat.id}
              path={`/${cat.id}`}
              element={
                <Category
                  category={cat}
                  todayList={todayList}
                  onToggleItem={toggleFromCategory}
                  onAddToCategory={(name) => addItemToCategory(cat.id, name)}
                />
              }
            />
          ))}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
