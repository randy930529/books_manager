import Authors from "@/components/authors";
import Books from "@/components/books";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <ul className="mx-auto grid max-w-full w-full grid-cols-3 gap-x-5 px-8">
          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="yes"
              name="answer"
              id="yes"
              defaultChecked
            />
            <label
              className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out"
              htmlFor="yes"
            >
              Libros
            </label>

            <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              <Books></Books>
            </div>
          </li>

          <li className="">
            <input
              className="peer sr-only"
              type="radio"
              value="yesno"
              name="answer"
              id="yesno"
            />
            <label
              className="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out "
              htmlFor="yesno"
            >
              Autores
            </label>

            <div className="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
              <Authors></Authors>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
