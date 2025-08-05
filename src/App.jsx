import GeneratePrompt from "./utils/generatePrompt";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-700">
            SmartPrompt Mini
          </h1>
          <p className="text-gray-600 mt-2 text-base">
            Generate smarter prompts in seconds
          </p>
        </header>
        <GeneratePrompt />
      </div>
    </>
  );
}

export default App;
