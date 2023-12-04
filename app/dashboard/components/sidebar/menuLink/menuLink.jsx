// import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname()
  console.log(pathname);

  return (
    // container
      <Link
        className="p-5 transition hover:bg-bgLight flex items-center gap-[10px] rounded-md"
        href={item.path}
      >
        {item.icon}
        {item.title}
      </Link>
  )
}

export default MenuLink
