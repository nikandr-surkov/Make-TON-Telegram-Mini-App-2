export default function ProtectedPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Protected Page</h1>
        <p className="text-xl">Welcome to the protected page! Only authenticated users can see this.</p>
      </div>
    )
  }