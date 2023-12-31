import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MenuLink = ({ item }) => {
  const pathname = usePathname()

  return (
    // container
    <motion.div whileTap={{scale:0.9}} className="">
      <Link
        className={`p-4 transition hover:bg-bgLight ${
          pathname == item.path ? "bg-bgLight" : ""
        } flex items-center gap-[10px] rounded-md`}
        href={item.path}
      >
        {item.icon}
        {item.title}
      </Link>
</motion.div>
  )
}

export default MenuLink
