"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

// import react icons
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween" }}
      className="bg-bgDark p-5 rounded-lg flex items-center justify-between"
    >
      <span className="capitalize pathname">
        {pathname.split("/").pop()}
      </span>

      <div className="flex gap-3 items-center">
        <motion.label
          className="gap-2 rounded-md p-2"
          whileTap={{backgroundColor:'#43178489'}}
          whileHover={{backgroundColor:'#43178489'}}
          htmlFor="search"
        >
          <MdSearch size={20} />
          <input
            placeholder="search"
            id="search"
            name="search"
            type="text"
            className="bg-transparent w-40"
          />
        </motion.label>
        <div className="flex gap-3 [&>svg]:cursor-pointer">
          <MdPublic size={20} />
          <MdNotifications size={20} />
          <MdOutlineChat size={20} />
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
