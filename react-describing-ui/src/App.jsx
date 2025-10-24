import { useState } from 'react';
import './App.css';
import Profile from './components/Profile.jsx';
import Gallery from './components/Gallery.jsx';
import TodoList from  './components/TodoList.jsx';
import TodoListWithJS from './components/TodoListWithJS.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import PackingList from './components/PackingList.jsx';
import ScientistList from './components/ScientistList.jsx';
import TeaSet from './components/TeaSet.jsx';
import TeaSet1 from './components/TeaSet1.jsx';
import TreeDiagram from './components/TreeDiagram.jsx';

function Header() {
  return (
    <header className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl backdrop-blur-md bg-opacity-90 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Describe React UI
      </h1>
      <p className="text-blue-100 mt-3 text-sm sm:text-base">
        Build and explore beautiful React interfaces
      </p>
    </header>
  );
}

function Section({ title, description, children }) {
  return (
    <div className="w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-indigo-100 overflow-hidden">
      <div className="bg-linear-to-r from-indigo-500 to-purple-500 text-white p-4 sm:p-6 rounded-t-2xl text-center">
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
        {description && (
          <p className="text-xs sm:text-sm text-indigo-100 mt-1">{description}</p>
        )}
      </div>
      <div className="bg-gray-50 p-4 sm:p-6 rounded-b-2xl text-center">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center bg-linear-to-br from-gray-100 to-gray-300 p-6">

      <div className="max-w-6xl w-full flex flex-col items-center space-y-8 overflow-y-auto p-6">
        <Header />

        <Section
          title="1. Your First Component"
          description="Creating a simple React component (Gallery with Profile components)"
        >
          <Gallery />
        </Section>

        <Section
          title="2. Writing Markup with JSX"
          description="Using JSX syntax correctly (className, self-closing tags, single parent)"
        >
          <TodoList />
        </Section>

        <Section
          title="3. JavaScript in JSX with Curly Braces"
          description="Using {} to embed JavaScript expressions in JSX"
        >
          <TodoListWithJS />
        </Section>

        <Section
          title="4. Passing Props to a Component"
          description="Using props to pass data between components"
        >
          <ProfileCard />
        </Section>

        <Section
          title="5. Conditional Rendering"
          description="Using && operator to conditionally render elements"
        >
          <PackingList />
        </Section>

        <Section
          title="6. Rendering Lists"
          description="Using map() to render multiple components with keys"
        >
          <ScientistList />
        </Section>

        <Section
          title="7. Keeping Components Pure"
          description="Writing components that don't modify external variables"
        >
          <TeaSet1 />
          <TeaSet />
        </Section>

        <Section
          title="8. Understanding UI as Trees"
          description="Visualizing component hierarchy and relationships"
        >
          <TreeDiagram />
        </Section>
      </div>
    </div>
  );
}
