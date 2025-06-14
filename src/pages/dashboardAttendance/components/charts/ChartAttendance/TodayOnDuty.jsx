import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import file1 from "../../../../../data/file_1.json";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const total = file1["Card On Duty"].Total;
const on_duty = file1["Card On Duty"]["On Duty"]

const data = {
    datasets: [
    {
      data: [total - on_duty , total],
      backgroundColor: ["#FFBC79", "#4B8BBE"],
      borderWidth: 0,
    },
  ],
}

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

const TodayOnDuty = () => {
    return (
        <Doughnut data={data} options={options} />
    );
}

export default TodayOnDuty;
