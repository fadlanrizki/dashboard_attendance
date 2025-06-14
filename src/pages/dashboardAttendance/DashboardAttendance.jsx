import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react";
import AttendanceDaily from "./components/charts/ChartAttendance/AttendanceDaily";
import AttendancePerShift from "./components/charts/ChartAttendance/AttendancePerShift";
import MonthYearSelector from "../../components/common/Select/MonthYearSelector";
import TodayOnDuty from "./components/charts/ChartAttendance/TodayOnDuty";
import TodayAttendance from "./components/charts/ChartAttendance/TodayAttendance";
import file1 from "../../data/file_1.json"

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
              <TodayOnDuty />
              <div className="absolute inset-0 flex items-center justify-center text-4xl text-primary_text font-bold ">
                {file1["Card On Duty"]["On Duty"]}/
                {file1["Card On Duty"]["Total"]}
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
              <TodayAttendance />
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
            <p className="text-primary_text_strong text-7xl">
              {file1["Card Feed Activity"]["Total feed"]}
            </p>
            <p className="text-primary_text">
              Of{" "}
              <span className="text-green-600">
                {file1["Card Feed Activity"]["Total person"]}
              </span>{" "}
              Person
            </p>
          </CardBody>
        </Card>
        <Card radius="sm">
          <CardHeader className="font-medium">
            <p className="text-primary_text">
              <span className="text-primary_text_red">Today</span> Patroli
            </p>
          </CardHeader>
          <CardBody className="flex justify-center items-center gap-2 font-bold">
            <p className="text-primary_text_strong text-7xl">
              {file1["Card Patrol"]["Total Patrol"]}
            </p>
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
            <p className="text-primary_text_strong text-7xl">
              {file1["Card Non Schedule"]["Total person"]}
            </p>
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
            <p className="text-primary_text_strong text-7xl">
              {file1["Card Non Geofence"]["Total person"]}
            </p>
            <p className="text-primary_text">Person</p>
          </CardBody>
        </Card>
      </div>

      <div className="flex-1 grid grid-cols-1 gap-5">
        <Card radius="sm">
          <CardHeader className="font-medium text-primary_text flex justify-between">
            <p>Attendance - Daily</p>
            <div className="flex gap-2">
              <Button color="danger">1 W</Button>
              <MonthYearSelector />
            </div>
            </CardHeader>
          <CardBody className="flex items-center justify-center">
            <AttendanceDaily />
          </CardBody>
        </Card>
        <Card radius="sm">
          <CardHeader className="font-medium text-primary_text">Attendance - Per Shift</CardHeader>
          <CardBody className="flex items-center justify-center">
            <AttendancePerShift />

          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DashboardAttendance;
