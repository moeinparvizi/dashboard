"use client"

import Image from "next/image"
import MenuLink from "./menuLink/menuLink"
import MobileMenu from "./mobile/mobileMenu"

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
  // MdLogout,
} from "react-icons/md"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

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

const Sidebar = () => {
  const { push } = useRouter()

  return (
    <>
      {/* mobile menu */}
      <MobileMenu />
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween" }}
        className="sticky hidden md:flex flex-col top-5 bg-bgDark p-5 rounded-lg shadow-md shadow-bg-Light sidebar-container overflow-y-scroll no-scrollbar"
      >
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

export default Sidebar
