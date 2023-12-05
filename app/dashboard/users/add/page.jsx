"use client"

import { motion } from "framer-motion"

const AddUserPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{type: "tween"}}
      className="p-5 w-full bg-bgDark rounded-lg mt-5"
    >
      <form
        action=""
        className="
        flex
        flex-wrap
        justify-between
      "
      >
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <input
          type="email"
          id="email"
          placeholder="email"
          name="price"
          required
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <input
          type="phone"
          placeholder="phone"
          name="phone"
          required
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          name="color"
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
        />
        <select
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
          name="cat"
          id="cat"
        >
          <option
            disabled
            selected
            className="capitalize"
            value={false}
          >
            is admin?
          </option>
          <option className="capitalize" value={true}>
            yes
          </option>
          <option className="capitalize" value={false}>
            no
          </option>
        </select>
        <select
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-[45%]"
          name="cat"
          id="cat"
        >
          <option
            disabled
            selected
            className="capitalize"
            value={true}
          >
            is active?
          </option>
          <option className="capitalize" value={true}>
            yes
          </option>
          <option className="capitalize" value={false}>
            no
          </option>
        </select>
        <textarea
          required
          name="address"
          id="address"
          rows="11"
          placeholder="address"
          className="p-5 bg-[#43178459] text-text rounded-md mb-[30px] w-full"
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-md -none transition-all bg-accent hover:bg-primary p-5"
        >
          Submit
        </button>
      </form>
    </motion.div>
  )
}

export default AddUserPage
