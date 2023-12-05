"use client"

import { usePathname } from "next/navigation"
import Footer from "./dashboard/components/footer/footer"
import Navbar from "./dashboard/components/navbar/Navbar"
import Sidebar from "./dashboard/components/sidebar/Sidebar"
import { FaFaceSadCry } from "react-icons/fa6"
import { motion } from "framer-motion"

const NotFoundPage = () => {
  const url = usePathname()

  return (
    // container
    <div className="flex">
      {/* menu */}
      <div className="flex-1 p-5">
        <Sidebar />
      </div>
      {/* contents */}
      <div className="flex-[4] p-5">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween" }}
          className="bg-bgDark p-[50px] rounded-lg text-text text-[70px] mt-5 grid place-content-center"
        >
          <div className="text-primary flex gap-2 items-center">
            <FaFaceSadCry />
            <span className="font-bold"> i`m sorry</span>
          </div>
          <p>
            not found{" "}
            <span className="text-[#f7737375]">{url}</span> page
            or not create for yet
          </p>
        </motion.div>
        <Footer />
      </div>
    </div>
  )
}

export default NotFoundPage
