import Link from 'next/link'

export default function SignUp() {
  return (
    <div className="flex-grow flex justify-center items-center">
      <div className="w-96 p-6 shadow-lg rounded-lg bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
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
            <label className="block text-gray-700">User name</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Input your username"
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
          <div className="mb-4">
            <label className="block text-gray-700">Confirm password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="check your password"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" className="mr-2" id="rememberMe" />
            <label htmlFor="rememberMe" className="text-gray-700">
              Remeber me
            </label>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-600 mt-3">
            Already have an account？
            <Link href="/" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
