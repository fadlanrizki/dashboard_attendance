import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import file1 from "../../../../../data/file_1.json";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const attend = file1["Card Attendance"].Attend;
const total = file1["Card Attendance"].Total;

const data = {
  datasets: [
    {
      data: [total - attend, total],
      backgroundColor: ["#FFBC79", "#4B8BBE"],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: "70%",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const TodayAttendance = () => {
  return (
    <>
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-primary_text">
        <div className="text-2xl">{Number(attend / total * 100).toFixed(2)}</div>
        <div className="text-xm">
          {attend}/{total} Person
        </div>
      </div>
    </>
  );
};

export default TodayAttendance;
