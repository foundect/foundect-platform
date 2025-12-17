export default function AuthPage() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="w-full max-w-md rounded-2xl bg-white/70 backdrop-blur-md shadow-xl p-8">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Welcome to Foundect
          </h1>
  
          <div className="space-y-4">
            <button className="w-full rounded-xl bg-blue-600 text-white py-3 font-medium hover:bg-blue-700 transition">
              Log In
            </button>
  
            <button className="w-full rounded-xl border border-blue-600 text-blue-600 py-3 font-medium hover:bg-blue-50 transition">
              Create New Account
            </button>
          </div>
        </div>
      </main>
    );
  }
  