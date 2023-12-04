import Card from "./components/card/card";
import Chart from "./components/chart/chart";
import Rightbar from "./components/rightbar/right";
import Transactions from "./components/transactions/transactions";

const Dashboard = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="flex-[3] flex flex-col gap-5">
        <div className="flex gap-5 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="flex-1">
        <Rightbar />
      </div>
    </div>
  );
}

export default Dashboard;