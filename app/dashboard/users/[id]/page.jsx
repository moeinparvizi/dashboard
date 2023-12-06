"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const SingleUserPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{type: "tween"}}
      className="flex justify-center md:justify-start flex-wrap gap-[50px] mt-5"
    >
      <div className="flex-1 bg-bgDark h-max rounded-md p-2 md:p-5 font-bold">
        <div className="w-full h-[300px] relative rounded-md overflow-hidden mb-5 text-textHard">
          <Image src={"/me.jpeg"} alt="" fill />
        </div>
        moein parvizi
      </div>
      <div className="md:flex-[3] bg-bgDark rounded-md p-2 md:p-5">
        <form
          action={""}
          className="
          flex
          flex-col gap-5
          [&>input]:p-[10px]
          [&>input]:rounded-md
          [&>input]:bg-[#43178459]
          [&>textarea]:p-[10px]
          [&>textarea]:rounded-md
          [&>textarea]:bg-[#43178459]
          [&>select]:p-[10px]
          [&>select]:rounded-md
          [&>select]:bg-[#43178459]
          [&>label]:bg-transparent
        "
        >
          <input type="hidden" name="id" value="user id" />
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
          />
          <label>Email</label>
          <input type="email" name="email" placeholder="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="phone" />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            placeholder="address"
          />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={true}>
              Yes
            </option>
            <option value={false} selected={false}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={false}>
              Yes
            </option>
            <option value={false} selected={true}>
              No
            </option>
          </select>
          <button className="bg-accent transition-all hover:bg-primary p-[10px] rounded-md">
            Update
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default SingleUserPage
