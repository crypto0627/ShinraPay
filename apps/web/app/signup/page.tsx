'use client'
import { useRef } from 'react'
import Footer from '../footer'
import SignUp from './signup'

export default function SignUpHome() {
  const userState = useRef<boolean>(false)
  return (
    <div className="bg-white flex flex-col min-h-screen">
      {userState ? (
        <>true</>
      ) : (
        <>
          <SignUp />
        </>
      )}
      <Footer />
    </div>
  )
}
