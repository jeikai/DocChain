import { DropImageInput, Transaction, ViewTable } from "../components";
import FormInfo from "../components/FormInfo";
import { Landing } from "../pages";
const routes = [
    {
        path: '/user', 
        component: ViewTable, 
        title: 'View Table',
        layout: 'view',
        permission: 'user'
    },
    {
        path: '/upload', 
        component: DropImageInput, 
        title: 'Upload',
        layout: 'user',
        permission: 'user'
    },
    {
        path: '/user/form', 
        component: FormInfo, 
        title: 'User',
        layout: 'user',
        permission: 'user'
    },
    {
        path: '/dashboard', 
        component: Transaction, 
        title: 'Transaction',
        layout: 'view',
        permission: 'admin'
    },
    {
        path: '/', 
        component: Landing, 
        title: 'Docchain',
        layout: 'view',
        page: 'none'
    }
]

export {routes}