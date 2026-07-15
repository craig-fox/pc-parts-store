import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="mx-auto max-w-7xl p-8">
        <h1 className="text-4xl font-bold">
          Welcome to the PC Parts Store
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Build your dream PC from our range of quality components.
        </p>
      </main>
    </div>
  );
}

export default App;