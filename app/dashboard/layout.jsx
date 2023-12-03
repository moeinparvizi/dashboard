import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"

const layout = ({ children }) => {
  return (
    // container
    <div className="flex">
      {/* menu */}
      <div className="flex-1 p-5">
        <Sidebar />
      </div>
      {/* contents */}
      <div className="flex-[4] p-5">
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default layout