"use client"

import Circlechart from "./components/circlechart"
import Linechart from "./components/linechart"

const Chart = () => {
  return (
    <div className="max-h-[450px] flex gap-3 [&>div]:rounded-xl [&>div]:p-5 [&>div]:bg-bgDark">
      <Linechart />
      <Circlechart />
    </div>
  )
}

export default Chart
