import MainNavigation from './components/MainNavigation'
import { Outlet } from 'react-router-dom'
const Layout=()=>{
    return <>
    <MainNavigation/>
    <Outlet/>
    </>
}
export default Layout