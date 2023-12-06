import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"

const layout = ({ children }) => {
  return (
    // container
    <div className="flex">
      {/* menu */}
      <div className="md:flex-1 md:p-5">
        <Sidebar />
      </div>
      {/* contents */}
      <div className="flex-[4] p-5">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default layout