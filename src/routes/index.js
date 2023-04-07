//Layout
import HeaderOnly from '../components/Layout/HeaderOnly'


//Component
import Home from '../pages/Home'
import Selling from '../pages/Selling'
import LoginLogout from '../pages/LoginLogout'

//không cần đăng nhập vẫn vào được
const publicRoutes = [
   {path: '/', component: Home},
   {path: '/selling', component: Selling},
   {path: '/loginlogout', component: LoginLogout, layout: HeaderOnly}
];

//phải đăng nhập mới vào được
const privateRoutes = [
];

export {publicRoutes, privateRoutes}