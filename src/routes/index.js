import { DropImageInput, Transaction, ViewTable} from "../components";
import AdminDashboard from "../components/AdminDashboard";
import AdminVerified from "../components/AdminVerified";
import FormInfo from "../components/FormInfo";
const routes = [
    {
        path: '/', 
        component: ViewTable, 
        title: 'View Table',
        layout: 'view',
    },
    {
        path: '/verified', 
        component: ViewTable, 
        title: 'View Table',
        layout: 'view',
    },
    {
        path: '/user', 
        component: DropImageInput, 
        title: 'User',
        layout: 'user',
    },
    {
        path: '/user/form', 
        component: FormInfo, 
        title: 'User',
        layout: 'user',
    },
    {
        path: '/dashboard', 
        component: Transaction, 
        title: 'Transaction',
        layout: 'view',
    },
    {
        path: '/admindashboard', 
        component: AdminDashboard, 
        title: 'AdminDashboard',
        layout: 'view',
    },
    {
        path: '/admindashboard/verified', 
        component: AdminVerified, 
        title: 'AdminDashboard',
        layout: 'view',
    },
]

export {routes}