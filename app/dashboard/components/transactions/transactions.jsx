"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Transactions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{type: "tween"}}
      className="bg-bgDark p-5 rounded-lg"
    >
      <div className="capitalize">latest transactions</div>
      <table className="w-full [&>tbody>tr>td]:p-[10px] [&>thead>tr>td]:p-[10px]">
        <thead>
          <tr className="capitalize">
            <td>name</td>
            <td className="hidden md:flex">status</td>
            <td>date</td>
            <td>amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image
                  height={40}
                  width={40}
                  alt="user"
                  src="/noavatar.png"
                  className="rounded-full object-cover"
                />
                moein parvizi
              </div>
            </td>
            <td className="hidden md:flex">
              <span className="pending rounded-[5px] p-[5px] text-[14px]">
                pending
              </span>
            </td>
            <td>07.02.2001</td>
            <td>$3000.2</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image
                  height={40}
                  width={40}
                  alt="user"
                  src="/noavatar.png"
                  className="rounded-full object-cover"
                />
                moein parvizi
              </div>
            </td>
            <td className="hidden md:flex">
              <span className="done rounded-[5px] p-[5px] text-[14px]">
                done
              </span>
            </td>
            <td>07.02.2001</td>
            <td>$3000.2</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image
                  height={40}
                  width={40}
                  alt="user"
                  src="/noavatar.png"
                  className="rounded-full object-cover"
                />
                moein parvizi
              </div>
            </td>
            <td className="hidden md:flex">
              <span className="cancelled rounded-[5px] p-[5px] text-[14px]">
                cancelled
              </span>
            </td>
            <td>07.02.2001</td>
            <td>$3000.2</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image
                  height={40}
                  width={40}
                  alt="user"
                  src="/noavatar.png"
                  className="rounded-full object-cover"
                />
                moein parvizi
              </div>
            </td>
            <td className="hidden md:flex">
              <span className="pending rounded-[5px] p-[5px] text-[14px]">
                pending
              </span>
            </td>
            <td>07.02.2001</td>
            <td>$3000.2</td>
          </tr>
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image
                  height={40}
                  width={40}
                  alt="user"
                  src="/noavatar.png"
                  className="rounded-full object-cover"
                />
                moein parvizi
              </div>
            </td>
            <td className="hidden md:flex">
              <span className="done rounded-[5px] p-[5px] text-[14px]">
                done
              </span>
            </td>
            <td>07.02.2001</td>
            <td>$3000.2</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  )
}

export default Transactions
