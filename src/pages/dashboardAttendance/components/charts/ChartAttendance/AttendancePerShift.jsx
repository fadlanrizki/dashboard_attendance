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

const AttendancePerShift = () => {
  const labels = [
    "00:00 - DRIVER NON PIKET",
    "00:00 - DRIVER PIKET",
    "00:00 - OB PAGI",
    "00:00 - SECURITY PAGI",
    "01:00 - RECEPTIONIST",
    "03:00 - OB MIDDLE",
    "04:00 - SECURITY MIDDLE"
  ];

  const data = {
    labels,
    datasets: [
      {
        type: "bar",
        label: "Attend",
        data: Object.values(file2["Attendance Per Shift"].Attend).map((item) => {
          let percentage = (item / 24) * 100;
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
        data: Object.values(file2["Attendance Per Shift"]["Un-attend"]).map((item) => {
          let percentage = (item / 24) * 100;
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
        label: "Late Check-in",
        data: Object.values(file2["Attendance Per Shift"]["Late Check-in"]).map((item) => {
          let percentage = (item / 24) * 100;
          return percentage.toFixed(0);
        }),
        backgroundColor: "#FC2D2F",
        yAxisID: "yLeft",
        stack: "stack1",
        borderWidth: 1,
        borderColor: "#fff"
      },
      {
        type: "bar",
        label: "Non Schedule",
        data: Object.values(file2["Attendance Per Shift"]["Non Schedule"]).map((item) => {
          let percentage = (item / 24) * 100;
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
        label: "Total Attend",
        data: Object.values(
          file2["Attendance Per Shift"]["Total Attend"]
        ),
        borderColor: "#4F81AF",
        backgroundColor: "#4F81AF",
        yAxisID: "yRight",
        fill: false,
        tension: 0.2,
        pointStyle: "circle",
        borderWidth: 2,
      },
      {
        type: "line",
        label: "Total Un-attend",
        data: Object.values(
          file2["Attendance Per Shift"]["Total Un-attend"]
        ),
        borderColor: "#fbbf24",
        backgroundColor: "#fbbf24",
        yAxisID: "yRight",
        fill: false,
        tension: 0.2,
        pointStyle: "rectRot",
        borderWidth: 2,
      },
      {
        type: "line",
        label: "Total Late Check-in",
        data: Object.values(
          file2["Attendance Per Shift"]["Total Late Check-in"]
        ),
        borderColor: "#FC2D2F",
        backgroundColor: "#FC2D2F",
        yAxisID: "yRight",
        fill: false,
        tension: 0.2,
        pointStyle: "rect",
        borderWidth: 2,
      },
      {
        type: "line",
        label: "Total Non Schedule",
        data: Object.values(
          file2["Attendance Per Shift"]["Total Non Schedule"]
        ),
        borderColor: "#5C5C61",
        backgroundColor: "#5C5C61",
        yAxisID: "yRight",
        fill: false,
        tension: 0.2,
        pointStyle: "triangle",
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
        max: 24,
        ticks: {
          color: "red",
          stepSize: 8,
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

export default AttendancePerShift;
