import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import file2 from "../../../../../data/file_2.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const AttendanceDaily = () => {
  const labels = [
    "2023-10-01",
    "2023-10-02",
    "2023-10-03",
    "2023-10-04",
    "2023-10-05",
    "2023-10-06",
    "2023-10-07",
    "2023-10-08",
    "2023-10-09",
    "2023-10-10",
    "2023-10-11",
    "2023-10-12",
    "2023-10-13",
    "2023-10-14",
    "2023-10-15",
    "2023-10-16",
    "2023-10-17",
    "2023-10-18",
    "2023-10-19",
    "2023-10-20",
    "2023-10-21",
    "2023-10-22",
    "2023-10-23",
    "2023-10-24",
    "2023-10-25",
    "2023-10-26",
    "2023-10-27",
    "2023-10-28",
    "2023-10-29",
    "2023-10-30",
    "2023-10-31",
  ];

  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "Attend",
        data: Object.values(file2["Attendance Daily"].Attend).map((item) => {
          let percentage = (item / 14) * 100;
          return percentage.toFixed(0);
        }),
        backgroundColor: "#4F81AF",
        yAxisID: "yLeft",
        stack: "stack1",
        borderWidth: 1,
        borderColor: "#fff"
      },
      {
        type: "bar",
        label: "Un-attend",
        data: Object.values(file2["Attendance Daily"].Unattend).map((item) => {
          let percentage = (item / 14) * 100;
          return percentage.toFixed(0);
        }),
        backgroundColor: "#fbbf24",
        yAxisID: "yLeft",
        stack: "stack1",
        borderWidth: 1,
        borderColor: "#fff"
      },
      {
        type: "bar",
        label: "Non Schedule",
        data: Object.values(file2["Attendance Daily"]["Non Schedule"]).map((item) => {
          let percentage = (item / 14) * 100;
          return percentage.toFixed(0);
        }),
        backgroundColor: "#5C5C61",
        yAxisID: "yLeft",
        stack: "stack1",
        borderWidth: 1,
        borderColor: "#fff"
      },
      {
        type: "line",
        label: "Accumulation Attend",
        data: Object.values(file2["Attendance Daily"]["Accumulation Attend"]),
        borderColor: "#86B4A9",
        backgroundColor: "#86B4A9",
        yAxisID: "yRight",
        fill: false,
        tension: 0.2,
        pointStyle: "circle",
        borderWidth: 2,
      },
      {
        type: "line",
        label: "Accumulation Un-attend",
        data: Object.values(
          file2["Attendance Daily"]["Accumulation Un-attend"]
        ),
        borderColor: "#82853B",
        backgroundColor: "#82853B",
        yAxisID: "yRight",
        fill: false,
        tension: 0.2,
        pointStyle: "rectRot",
        borderWidth: 2,
      },
      {
        type: "line",
        label: "Accumulation Non Schedule",
        data: Object.values(
          file2["Attendance Daily"]["Accumulation Non Schedule"]
        ),
        borderColor: "#39737C",
        backgroundColor: "#39737C",
        yAxisID: "yRight",
        fill: false,
        tension: 0.2,
        pointStyle: "rect",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: true,
    scales: {
      yLeft: {
        type: "linear",
        position: "left",
        stacked: true,
        min: 0,
        max: 100,
        ticks: {
          color: "red",
          stepSize: 20,
          callback: (value) => `${value}%`,
        },
        title: {
          display: true,
          text: "Percentage",
          color: "red",
          font: { size: 14, weight: "bold" },
        },
        grid: {
          drawOnChartArea: false, // agar hanya muncul di satu axis
        },
      },
      yRight: {
        type: "linear",
        position: "right",
        min: 0,
        max: 75,
        ticks: {
          color: "red",
          stepSize: 25,
          callback: (value) => `${value}`,
        },
        title: {
          display: true,
          text: "Total",
          color: "red",
          font: { size: 14, weight: "bold" },
          
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 15,
          boxHeight: 15,
          padding: 15,
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      tooltip: {
        enabled: true,
        mode: "nearest",
        intersect: false,
      },
    },
  };

  return (
    <div>
      <Chart
        type="bar"
        data={data}
        options={options}
        width={600}
        height={300}
      />
    </div>
  );
};

export default AttendanceDaily;
