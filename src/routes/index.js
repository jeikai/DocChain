import Upload from "../pages/Upload/Upload";
import Dashboard from "../pages/Dashboard/Dashboard";
import Demo_Upload from "../pages/Upload/Demo_Upload";
const routes = [
    {path: '/dashboard', component: Dashboard, title: 'Dashboard'},
    {path: '/upload', component: Demo_Upload, title: 'Upload'},
]

export {routes}