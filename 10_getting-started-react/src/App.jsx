import React from "react";
import "./index.css"; 
import garImg from "./assets/gar.png"; 

const App = () => {
  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/garrell-macarilay-a56a16300/" },
    { label: "Gmail", href: "mailto:gmacarilay1@gmail.com" },
    { label: "Facebook", href: "https://www.facebook.com/garrell.macarilay" },
    { label: "GitHub", href: "https://github.com/garrellmacarilay" },
  ];

  const navItems = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Profile Section */}
            <div className="flex items-center space-x-3">
              <img
                src={garImg} 
                alt="Garrell Macarilay"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold tracking-wide">
                GARRELL MACARILAY
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-800 hover:text-purple-600 transition-colors font-medium text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white border border-gray-200 rounded-r-lg py-4 px-2 shadow">
          <div className="flex flex-col space-y-4">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="p-2 text-gray-600 hover:text-purple-600 transition-colors rounded-md hover:bg-gray-100"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      
      <main className="pt-24 lg:pl-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="min-h-[80vh] flex flex-col justify-center text-center">
            
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900">
                  HEY, I'M GARRELL MACARILAY
                </h1>
                <h2>
                    <strong>Course/Year:</strong> BS Information Technology 3rd Year
                </h2>
                <h2>
                    <strong>Fun Fact:</strong> I can sleep while sitting.
                </h2>
               

              <div>
                 I want to learn <span className="font-semibold text-blue-600">React.js</span> 
              because it is one of the most commonly used front-end libraries in web development, 
              and learning it can help me build effective UI/UX. The front end is an essential 
              part of the web because it is the client side—what the users see. For users, the 
              appearance and usability matter more than the complexity or organization of the 
              backend code. That is why I am looking forward to learning this library.
              </div>

              <div className="pt-4">
                <button className="px-12 py-6 text-lg font-semibold tracking-wide rounded-xl bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200">
                  PROJECTS
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-20 right-6 z-50">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105">
          <span className="font-medium">Chat with me</span>
          <span className="text-xl">👋</span>
        </button>
      </div>
    </div>
  );
};

export default App;
