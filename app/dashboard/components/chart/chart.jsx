"use client"

import { motion } from "framer-motion"
import Circlechart from "./components/circlechart"
import Linechart from "./components/linechart"

const Chart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{type: "tween"}}
      className="flex flex-wrap w-full relative z-0 gap-3 [&>div]:rounded-xl [&>div]:p-5 [&>div]:bg-bgDark"
    >
      <Linechart />
      <Circlechart />
    </motion.div>
  )
}

export default Chart
