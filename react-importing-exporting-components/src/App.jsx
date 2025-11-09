import './App.css'
import Gallery from './Gallery'
import { Profile } from './Gallery';


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 space-y-10">
      <section className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center">
        <h1 className="text-2xl font-bold text-indigo-600 mb-4">Name Export</h1>
        <div className="border-t border-gray-200 my-4" />
        <Profile />
      </section>

      <section className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Default Export</h1>
        <div className="border-t border-gray-200 my-4" />
        <Gallery />
      </section>
    </div>
  );
}


export default App
