import Link from "next/link";
import Card from "./components/card/card";
import Chart from "./components/chart/chart";
import Rightbar from "./components/rightbar/right";
import Transactions from "./components/transactions/transactions";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex-[3] flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          <Card percent={-12} number={"10.276"} />
          <Card percent={24} number={"14.6"} />
          <Card percent={6} number={"9.071"} />
        </div>
        <Chart />
        <Transactions />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
}

export default Dashboard;