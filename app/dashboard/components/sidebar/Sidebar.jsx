"use client"

import Image from "next/image"
import MenuLink from "./menuLink/menuLink"

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
  // MdLogout,
} from "react-icons/md"
import { motion } from "framer-motion"

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

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "tween" }}
      className="sticky top-10 bg-bgDark p-5 rounded-lg shadow-md shadow-bg-Light sidebar-container"
    >
      {/* user */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
        className="flex gap-5 items-center mb-5"
      >
        <Image
          width={50}
          height={50}
          alt="image"
          src="/noavatar.png"
          className="rounded-full object-cover"
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
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-textHard text-[13px] my-[10px] cat-title">
              {cat.title}
            </span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Sidebar
