"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const SingleProductPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{type: "tween"}}
      className="flex gap-[50px] mt-5"
    >
      <div className="flex-1 bg-bgDark h-max rounded-md p-5 font-bold">
        <div className="w-full h-[300px] relative rounded-md overflow-hidden mb-5 text-textHard">
          <Image src={"/noproduct.jpg"} alt="" fill />
        </div>
        iphone 16 pro max
      </div>
      <div className="flex-[3] bg-bgDark rounded-md p-5">
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
          <label>title</label>
          <input
            type="text"
            name="title"
            placeholder="title"
          />
          <label>price</label>
          <input type="number" name="number" placeholder="price" />
          <label>stock</label>
          <input type="nubmer" name="stock" placeholder="23" />
          <label>color</label>
          <input type="text" name="color" placeholder="color" />
          <label>size</label>
          <input
            type="number"
            name="size"
            placeholder="size"
          />
          <label>cat</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={true}>
              kitchen
            </option>
            <option value={false} selected={false}>
              computer
            </option>
          </select>
          <label>description</label>
          <textarea
            type="text"
            name="description"
            placeholder="description"
            rows="10"
          />
          <button className="bg-accent transition-all hover:bg-primary p-[10px] rounded-md">
            Update
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default SingleProductPage
