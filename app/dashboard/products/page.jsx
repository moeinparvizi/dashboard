"use client"

import Link from "next/link"
import Search from "../components/search/search"
import { motion } from "framer-motion"
import Image from "next/image"
import Pagination from "../components/pagination/pagination"

const UsersPage = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "tween" }}
      className="bg-bgDark rounded-lg mt-5 p-5"
    >
      <div className="flex justify-between items-center">
        <Search placeholder="use search" />
        <Link href="/dashboard/products/add">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="capitalize hover:bg-accent rounded-md p-3 bg-primary"
          >
            add new
          </motion.button>
        </Link>
      </div>
      <table className="w-full [&>tbody>tr>td]:p-[10px] [&>thead>tr>td]:p-[10px]">
        <thead>
          <tr className="[&>td]:capitalize text-semibold">
            <td>title</td>
            <td>description</td>
            <td>price</td>
            <td>created at</td>
            <td>stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <figure className="flex gap-[10px] items-center">
                <Image
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                  alt="nothing"
                  src="/noproduct.jpg"
                />
                iphone 16 pro max
              </figure>
            </td>
            <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, distinctio!</td>
            <td>$1500</td>
            <td className="capitalize">oct 28 2023</td>
            <td className="capitalize">34</td>
            <td>
              <div className="flex gap-[10px]">
                <Link href="/dashboard/producs/test">
                  <button className="px-[10px] py-[5px] rounded-md text-text border-none bg-[teal]">view</button>
                </Link>
                <button className="px-[10px] py-[5px] rounded-md text-text border-none bg-[crimson]">delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </motion.div>
  )
}

export default UsersPage