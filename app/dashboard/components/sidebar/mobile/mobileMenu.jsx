"use client"

import Image from "next/image"
import MenuLink from "../menuLink/menuLink"

// import icons
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdClose,
  MdMenu,
  // MdLogout,
} from "react-icons/md"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
]
const SidebarMobile = () => {
  const { push } = useRouter()
  const ref = useRef()

  const toggleMenu = () =>
    ref.current.classList.toggle("top-[-2000px]")

  return (
    <>
      <MdMenu
        size={40}
        className="fixed top-1 left-1 bg-bgDark p-2 rounded-full"
        onClick={toggleMenu}
      />
      <motion.div
        ref={ref}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className="fixed transition-all top-0 left-0 flex md:hidden flex-col h-screen w-screen bg-bgDark p-5 overflow-y-scroll no-scrollbar"
      >
        <MdClose
          onClick={toggleMenu}
          size={24}
          className="m-5 absolute left-[80%]"
        />
        {/* user */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.4 },
          }}
          className="flex gap-5 items-center mb-5"
        >
          <Image
            width={50}
            height={50}
            alt="image"
            src="/me.jpeg"
            className="rounded-full w-12 h-12 object-cover bg-top"
          />
          {/* user Detail */}
          <div className="flex flex-col">
            <span className="username text-2x text-primary">
              moein parvizi
            </span>
            <span className="sub-username text-sm">
              administatrator
            </span>
          </div>
        </motion.div>
        <ul className="flex flex-col">
          {menuItems.map((cat) => (
            <li className="flex flex-col gap-2" key={cat.title}>
              <span className="text-textHard text-[13px] my-[10px] cat-title">
                {cat.title}
              </span>
              {cat.list.map((item) => (
                <MenuLink item={item} key={item.title} />
              ))}
            </li>
          ))}
        </ul>
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="capitalize bg-primary hover:bg-accent hover:text-text text-bg mt-2 flex items-center p-3 rounded-md gap-2"
          onClick={() => push("/")}
        >
          <MdLogout />
          logout
        </motion.div>
      </motion.div>
    </>
  )
}

export default SidebarMobile
