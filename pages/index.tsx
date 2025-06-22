import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ${inter.className}`}>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Your Next.js App
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            This is a modern Next.js application with Tailwind CSS, shadcn/ui components, 
            and TypeScript. Ready to build something amazing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Next.js</h3>
            <p className="text-gray-600">
              Full-stack React framework with server-side rendering and static site generation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tailwind CSS</h3>
            <p className="text-gray-600">
              Utility-first CSS framework for rapid UI development with modern design.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">TypeScript</h3>
            <p className="text-gray-600">
              Type-safe JavaScript that scales with better tooling and error catching.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}