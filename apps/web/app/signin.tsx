import Link from 'next/link'

export default function SignIn() {
  return (
    <div className="flex-grow flex justify-center items-center">
      <div className="w-96 p-6 shadow-lg rounded-lg bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Input your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Input your password"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Sign In
          </button>
          <p className="text-center text-sm text-gray-600 mt-3">
            Don&apost have account?
            <Link href="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
