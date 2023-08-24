import { DropImageInput, Transaction, ViewTable } from "../components";
import FormInfo from "../components/FormInfo";
const routes = [
    {
        path: '/', 
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
]

export {routes}