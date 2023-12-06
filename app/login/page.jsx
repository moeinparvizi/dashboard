"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

const Login = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const { push } = useRouter()

  const toastDark = (text) =>
    toast(text, {
      style: { background: "#431784", color: "white" },
    })

  const usernameShow = () =>
    toastDark("username is : moeinparvizi")
  const passwordShow = () =>
    toastDark("password is : moeinparvizi")

  const redirectToDashboard = () => push("/dashboard")

  const submit = () => {
    if (username == "moeinparvizi") {
      if (password == "moeinparvizi") {
        redirectToDashboard()
      } else {
        toastDark('you have to fill the inputs')
      }
    }
  }

  return (
    <motion.div
      className="grid place-content-center w-full h-screen"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween" }}
    >
      <Toaster className="bg-bgDark" />
      <motion.form
        initial={{ backgroundColor: "transparent", scale: 0 }}
        animate={{
          backgroundColor: "#1c0b35",
          rotateZ: 360,
          scale: 1,
        }}
        // transition={{ delay: 1.5 }}
        action=""
        className="rounded-lg p-[50px] w-screen h-screen md:w-[500px] md:h-[500px] flex flex-col justify-center gap-7 relative"
      >
        <motion.h2
          initial={{ y: 100, scale: 2 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ delay: 1 }}
          className="text-center font-bold text-2xl capitalize"
        >
          login
        </motion.h2>
        <motion.input
          className="bg-[#43178459] rounded-md p-5"
          type="text"
          placeholder="username"
          onClick={usernameShow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <motion.input
          className="bg-[#43178459] rounded-md p-5"
          type="text"
          placeholder="password"
          onClick={passwordShow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="capitalize text-center hover:bg-primary rounded-md p-3 bg-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={submit}
        >
          login
        </motion.div>
      </motion.form>
    </motion.div>
  )
}

export default Login
