'use client'
import { useState } from 'react'
import Footer from './footer'
import SignIn from './signin'

export default function Home() {
  const [userState, setUserState] = useState<boolean>(false)
  return (
    <div className="bg-white flex flex-col min-h-screen">
      {userState ? (
        <>1</>
      ) : (
        <>
          <SignIn />
        </>
      )}
      <button className="bg-black" onClick={() => setUserState(true)}>
        Change State
      </button>
      <Footer />
    </div>
  )
}
