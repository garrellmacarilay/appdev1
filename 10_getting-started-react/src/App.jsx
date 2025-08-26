import { User, BookOpen, Smile } from "lucide-react"
import "./App.css"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      {/* Card */}
      <div className="max-w-2xl w-full rounded-2xl shadow-lg border border-gray-200 bg-white p-6">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
        </div>

        {/* Info Grid */}
        <div className="space-y-4 text-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              <span>
                <strong>Name:</strong> Garrell B. Macarilay
              </span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-green-600" />
              <span>
                <strong>Course/Year:</strong> BS Information Technology 3rd Year
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Smile className="w-5 h-5 text-yellow-500" />
              <span>
                <strong>Fun Fact:</strong> I can sleep while sitting.
              </span>
            </div>
          </div>

          {/* Separator */}
          <hr className="my-4 border-gray-300" />

          {/* Why React */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Why I Want to Learn React
            </h2>
            <p className="leading-relaxed">
              I want to learn <span className="font-semibold text-blue-600">React.js</span> 
              because it is one of the most commonly used front-end libraries in web development, 
              and learning it can help me build effective UI/UX. The front end is an essential 
              part of the web because it is the client side—what the users see. For users, the 
              appearance and usability matter more than the complexity or organization of the 
              backend code. That is why I am looking forward to learning this library.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
