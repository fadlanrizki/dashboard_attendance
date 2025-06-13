import Content from './components/common/Content'
import MainLayout from './layout/MainLayout'
import DashboardAttendance from './pages/dashboardAttendance'

function App() {
  return (
    <div className='w-full min-h-screen bg-[#EEEEEE]'>
      <MainLayout>
        <Content>
          <DashboardAttendance />
        </Content>
      </MainLayout>
    </div>
  )
}

export default App
