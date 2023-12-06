"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: -100 }}
      whileInView={{ y: 0 }}
      className="flex justify-between mt-7 text-textHard items-center bg-bgDark p-5 rounded-lg"
    >
      <div className="flex gap-2 items-center">
        create by
        <Link
          className="font-semibold md:text-lg text-accent"
          href="https://linkedin.com/in/moeinparvizi2002"
        >
          moein parvizi
        </Link>
      </div>
      <div className="text-primary">
        <Link href="https://github.com/moeinparvizi">
          see more project
        </Link>
      </div>
    </motion.footer>
  )
}

export default Footer
