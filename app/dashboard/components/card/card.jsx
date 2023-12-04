"use client"

import { motion } from "framer-motion"
import { MdSupervisedUserCircle } from "react-icons/md"

const Card = () => {
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{type: "tween"}}
      className="bg-bgDark rounded-md p-5 flex gap-5 cursor-pointer hover:bg-accent"
    >
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span>total user</span>
        <span className="text-[24px] number">10.273</span>
        <span>
          <span className="text-[14px] flex gap-1 items-center">
            <span className="percent-positive">12%</span>
            more than previous week
          </span>
        </span>
      </div>
    </motion.div>
  )
}

export default Card
