import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
]

export default function Circlechart() {
  return (
    <div className="md:flex-[1] w-full md:w-auto transition-all md:hover:flex-[5] max-h-[450px]">
      <h3 className="capitalize">group record</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart className="w-40 h-40">
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#431784",
              border: "none",
              borderRadius: "10px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
