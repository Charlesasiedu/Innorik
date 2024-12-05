import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredient = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredients = formData.get("items").trim(); // Trim to avoid whitespace-only entries

    // Validate input: Add only if not empty
    if (newIngredients) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredients]);
    }

    // Clear the input field after validation
    event.currentTarget.reset();
  };

  return (
    <main className="">
      <form
        onSubmit={addIngredient}
        className="flex justify-center gap-4 mx-4 pt-10"
      >
        <input
          type="text"
          name="items"
          placeholder="eg. Oregano"
          aria-label="Add Ingredients"
          className="border-2 rounded-md border-gray-200 h-9 py-1 px-3 flex-grow min-w-40 max-w-96"
        />
        <button
          type="submit"
          className="border-2 rounded-md border-gray-200 px-6 font-semibold bg-gray-700 text-white before:content-['+'] before:mr-2"
        >
          Add Ingredients
        </button>
      </form>

      {ingredients.length > 0 && (
        <section className="flex flex-col justify-center items-center pt-5">
          <h1 className="font-bold text-2xl mb-2">Ingredients at Hand:</h1>

          <div className="mb-10">
            <ul className="list-disc pl-4">
              {ingredients.map((item) => (
                <li key={item} className="">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {ingredients.length > 3 && (
            <div className="bg-gray-200 p-4 rounded-md flex">
              <div className="">
                <h1 className="text-base">Ready for recipe?</h1>
                <p className="py-4">
                  Generate a recipe from the list of your ingredients
                </p>
              </div>
              <button className="bg-cpurple p-1 rounded-md h-8 font-semibold text-white">
                Get a recipe
              </button>
            </div>
          )}
        </section>
      )}
    </main>
  );
};

export default Main;
