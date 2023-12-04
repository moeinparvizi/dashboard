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
      className="max-h-[450px] flex gap-3 [&>div]:rounded-xl [&>div]:p-5 [&>div]:bg-bgDark"
    >
      <Linechart />
      <Circlechart />
    </motion.div>
  )
}

export default Chart
