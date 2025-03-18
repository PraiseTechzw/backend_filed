export default function Home() {
  return (
    <main>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to CRUD Demo</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Users</h2>
            <p className="mb-4">Manage users with full CRUD operations</p>
            <a
              href="/users"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Manage Users
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Posts</h2>
            <p className="mb-4">Create and manage blog posts</p>
            <a
              href="/posts"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Manage Posts
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
