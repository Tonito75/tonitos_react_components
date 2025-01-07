import { Dashboard, Logout } from '@mui/icons-material'
import './App.css'
import MainLayout from './components/dashboard/MainDashboard'
import { DrawerButton, DrawerHr, DrawerTypo } from './components/dashboard/dashboardTypes'

/**
 * The content read by the MainLayout component.
 */
const content: Array<DrawerHr | DrawerTypo | DrawerButton> = [
  {
    type: 'typo',
    text:'Bonjour vous !',
    variant: 'h6'
  },
  {
    type:'button',
    text: 'Dashboard',
    href: '/dashboard',
    icon : <Dashboard />
  },
  {
    type:'button',
    text: 'Logout',
    href: '/login',
    icon : <Logout />
  },
  {
    type: 'hr'
  },
  {
    type: 'typo',
    text:'Hey',
    variant: 'h6'
  },
  {
    type:'button',
    text: 'ayoo',
    href: '/coucou',
    icon : <Logout />
  }
]

function App() {
  return (
    <>
      <MainLayout
        content={content}
        title='coucou'
        enableDrawer={true}
        logouthref='/login'
        buttonSelected='dashboard'
        getusername={ async () => new Promise(() => {return 'coucou'})}
      />
    </>
  )
}

export default App
