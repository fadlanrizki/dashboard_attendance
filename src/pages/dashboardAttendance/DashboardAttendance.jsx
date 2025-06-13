import { Card, CardBody, CardHeader } from "@heroui/react";

const DashboardAttendance = () => {
  return (
    <div className="w-full h-full flex flex-row gap-5">
      <div className="w-1/3 grid grid-cols-2 gap-5 flex-wrap">
        <Card radius="sm">
          <CardHeader>Today On Duty</CardHeader>
          <CardBody>test</CardBody>
        </Card>
        <Card radius="sm">
          <CardHeader>Today Attendance</CardHeader>
          <CardBody>test</CardBody>
        </Card>
        <Card radius="sm">
          <CardHeader>Today Feed / Activity</CardHeader>
          <CardBody>test</CardBody>
        </Card>
        <Card radius="sm">
          <CardHeader>Today Patroli</CardHeader>
          <CardBody>test</CardBody>
        </Card>
        <Card radius="sm">
          <CardHeader>Today Non Schedule</CardHeader>
          <CardBody>test</CardBody>
        </Card>
        <Card radius="sm">
          <CardHeader>Today Non Geofence</CardHeader>
          <CardBody>test</CardBody>
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
