"use client"

import { motion } from "framer-motion"

const Login = () => {
  return (
    <motion.div
      className="grid place-content-center w-full h-screen"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "tween" }}
    >
      <motion.form
          initial={{ backgroundColor: 'transparent',scale:0 }}
          animate={{ backgroundColor: '#1c0b35', rotateZ:360,scale:1 }}
          // transition={{ delay: 1.5 }}
        action=""
        className="rounded-lg p-[50px] w-[500px] h-[500px] flex flex-col justify-center gap-7"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.input
          className="bg-[#43178459] rounded-md p-5"
          type="text"
          placeholder="password"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="capitalize hover:bg-primary rounded-md p-3 bg-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          login
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

export default Login
