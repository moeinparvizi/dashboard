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
      className="bg-bgDark rounded-lg mt-5 p-1 md:p-5 text-[10px] md:text-[16px]"
    >
      <div className="flex flex-wrap justify-between items-center">
        <Search placeholder="use search" />
        <Link href="/dashboard/users/add">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="capitalize hover:bg-accent rounded-md p-2 md:p-3 text-[10px] md:text-[16px] bg-primary"
          >
            add new
          </motion.button>
        </Link>
      </div>
      <table className="w-full my-5 relative [&>tbody>tr>td]:p-[2px] [&>tbody>tr>td]:md:p-[10px] [&>thead>tr>td]:p-[2px] [&>thead>tr>td]:md:p-[10px]">
        <thead>
          <tr className="[&>td]:capitalize text-[10px] md:text-[16px] text-semibold">
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <figure className="flex flex-wrap text-[12px] md:text-[16px] gap-[10px] items-center">
                <Image
                  width={40}
                  height={40}
                  className="rounded-full object-cover w-[40px] h-[40px] bg-top"
                  alt="nothing"
                  src="/me.jpeg"
                />
                moein parvizi
              </figure>
            </td>
            <td className="text-[10px] md:text-[16px] flex flex-wrap">giventulip <span>@gmail.com</span></td>
            <td className="text-[10px] md:text-[16px]">2032.7.2</td>
            <td className="capitalize text-[10px] md:text-[16px]">admin</td>
            <td className="capitalize text-[10px] md:text-[16px]">active</td>
            <td>
              <div className="flex flex-wrap gap-[10px]">
                <Link href="/dashboard/users/test">
                  <button className="px-[5px] md:px-[10px] py-[3px] md:py-[5px] text-[10px] md:text-[16px] rounded-md text-text border-none bg-[teal]">view</button>
                </Link>
                <button className="px-[5px] md:px-[10px] py-[3px] md:py-[5px] text-[10px] md:text-[16px] rounded-md text-text border-none bg-[crimson]">delete</button>
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
