//Layout
import HeaderOnly from '../components/Layout/HeaderOnly'


//Component
import Home from '../pages/Home'
import Selling from '../pages/Selling'
import DetailProduct from '../pages/DetailProduct'
import Cart from '../pages/CartPage'
import Log from '../pages/LogPage'
import AccountInfo from '../pages/AccountInfo'


//không cần đăng nhập vẫn vào được
const publicRoutes = [
   {path: '/', component: Home},
   {path: '/selling', component: Selling},
   {path: '/detailProduct', component: DetailProduct},
   {path: '/cartpage', component: Cart},
   {path: '/log', component: Log, layout: HeaderOnly},
   {path: '/accountinfo', component: AccountInfo, layout: HeaderOnly}
];

//phải đăng nhập mới vào được
const privateRoutes = [
];

export {publicRoutes, privateRoutes}