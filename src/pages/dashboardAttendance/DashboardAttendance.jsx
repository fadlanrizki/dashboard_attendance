import { Card, CardBody, CardHeader } from "@heroui/react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const dummy_data_1 = {
  "Card On Duty": {
    Total: 20,
    "On Duty": 14,
  },
  "Card Attendance": {
    Total: 14,
    Attend: 12,
  },
  "Card Feed Activity": {
    "Total feed": 4,
    "Total person": 5,
  },
  "Card Patrol": {
    "Total Patrol": 2,
  },
  "Card Non Schedule": {
    "Total person": 3,
  },
  "Card Non Geofence": {
    "Total person": 7,
  },
};

const card_on_duty_data = {
  datasets: [
    {
      data: [20 - 14, 20],
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

const DashboardAttendance = () => {
  return (
    <div className="w-full h-full flex flex-row gap-5">
      <div className="w-1/3 grid grid-cols-2 gap-5 flex-wrap">
        <Card radius="sm">
          <CardHeader className="font-medium">
            <p className="text-primary_text">
              <span className="text-primary_text_red">Today</span> On Duty
            </p>
          </CardHeader>
          <CardBody className="flex justify-center items-center">
            <div className="relative w-[200px] h-[200px] flex items-center justify-center">
              <Doughnut data={card_on_duty_data} options={options} />
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-primary_text font-bold ">
                {dummy_data_1["Card On Duty"]["On Duty"]}/
                {dummy_data_1["Card On Duty"]["Total"]}
              </div>
            </div>
          </CardBody>
        </Card>
        <Card radius="sm">
          <CardHeader className="font-medium">
            <p className="text-primary_text">
              <span className="text-primary_text_red">Today</span> Attendance
            </p>
          </CardHeader>
          <CardBody className="flex justify-center items-center">
            <div className="relative w-[200px] h-[200px] flex items-center justify-center">
              <Doughnut data={card_on_duty_data} options={options} />
              <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-primary_text">
                <div className="text-2xl">85.71%</div>
                <div className="text-xm">{14}/{20} Person</div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card radius="sm">
          <CardHeader className="font-medium">
            <p className="text-primary_text">
              <span className="text-primary_text_red">Today</span> Feed /
              Activity
            </p>
          </CardHeader>
          <CardBody className="flex justify-center items-center gap-2 font-bold">
            <p className="text-primary_text_strong text-7xl">{dummy_data_1["Card Feed Activity"]["Total feed"]}</p>
            <p className="text-primary_text">Of <span className="text-green-600">{dummy_data_1["Card Feed Activity"]["Total person"]}</span> Person</p>
          </CardBody>
        </Card>
        <Card radius="sm">
            <CardHeader className="font-medium">
            <p className="text-primary_text">
              <span className="text-primary_text_red">Today</span> Patroli
            </p>
          </CardHeader>
          <CardBody className="flex justify-center items-center gap-2 font-bold">
            <p className="text-primary_text_strong text-7xl">{dummy_data_1["Card Patrol"]["Total Patrol"]}</p>
            <p className="text-primary_text">Person</p>
          </CardBody>
        </Card>
        <Card radius="sm">
            <CardHeader className="font-medium">
            <p className="text-primary_text">
              <span className="text-primary_text_red">Today</span> Non Schedule
            </p>
          </CardHeader>
          <CardBody className="flex justify-center items-center gap-2 font-bold">
            <p className="text-primary_text_strong text-7xl">{dummy_data_1["Card Non Schedule"]["Total person"]}</p>
            <p className="text-primary_text">Person</p>
          </CardBody>
        </Card>
        <Card radius="sm">
            <CardHeader className="font-medium">
            <p className="text-primary_text">
              <span className="text-primary_text_red">Today</span> Non Geofence
            </p>
          </CardHeader>
          <CardBody className="flex justify-center items-center gap-2 font-bold">
            <p className="text-primary_text_strong text-7xl">{dummy_data_1["Card Non Geofence"]["Total person"]}</p>
            <p className="text-primary_text">Person</p>
          </CardBody>
        </Card>
      </div>

      <div className="flex-1 grid grid-cols-1 gap-5">
        <Card radius="sm">
          <CardHeader>Attendance - Daily</CardHeader>
          <CardBody>test</CardBody>
        </Card>
        <Card radius="sm">
          <CardHeader>Attendance - Per Shift</CardHeader>
          <CardBody>test</CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DashboardAttendance;
