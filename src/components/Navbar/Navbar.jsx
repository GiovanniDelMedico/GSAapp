import { NavLink } from "react-router-dom";

function Navbar({ categories }) {
  return (
    <nav className="bg-gray-100 p-4 shadow">
      <ul className="grid grid-cols-3 gap-4">
        {/* Colonna dedicata a Home */}
        <li className="col-span-1 flex justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center p-6 rounded-lg shadow-md transition 
       ${
         isActive
           ? "bg-green-300 text-orange-400 font-bold"
           : "bg-green-200 text-orange-400 hover:bg-gray-300"
       }`
            }
          >
            {/* SVG icona Home */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            {/* Testo Home */}
            <span className="text-lg font-semibold tracking-wide">Home</span>
          </NavLink>
   

         {/* Link Stagionalità */}
          <NavLink
            to="/stagionalita"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center  rounded-lg shadow-md transition ml-3
       ${
         isActive
           ? "bg-green-400 text-white font-bold"
           : "bg-green-200 text-green-700 hover:bg-green-300"
       }`
            }
          >
            {/* Icona calendario */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 7.5h18M4.5 21h15a1.5 1.5 0 001.5-1.5V7.5H3v12a1.5 1.5 0 001.5 1.5z"
              />
            </svg>
            <span className="text-lg font-semibold tracking-wide">Stagionalità</span>
          </NavLink>
        </li>

        {/* Colonne dedicate alle categorie */}
        <li className="col-span-2">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <li key={cat.id}>
                <NavLink
                  to={`/${cat.id}`}
                  className={({ isActive }) =>
                    isActive
                      ? " text-orange-400 font-bold"
                      : "text-gray-600 hover:text-orange-400 font-semibold"
                  }
                >
                  {cat.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
