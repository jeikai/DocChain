import {
	DropImageInput,
	Guest,
	Transaction,
	Verified,
	ViewTable,
} from "../components";
import AdminDashboard from "../components/AdminDashboard";
import AdminVerified from "../components/AdminVerified";
import FormInfo from "../components/FormInfo";
import { Landing } from "../pages";

const routes = [
	{
		path: "/user",
		component: ViewTable,
		title: "View Table",
		layout: "view",
		permission: "user",
	},
	{
		path: "/verified",
		component: Verified,
		title: "View Table",
		layout: "view",
		permission: "admin",
	},
	{
		path: "/upload",
		component: DropImageInput,
		title: "Upload",
		layout: "user",
		permission: "user",
	},
	{
		path: "/user/form",
		component: FormInfo,
		title: "User",
		layout: "user",
		permission: "user",
	},
	{
		path: "/dashboard",
		component: Transaction,
		title: "Transaction",
		layout: "view",
		permission: "admin",
	},
	{
		path: "/admindashboard",
		component: AdminDashboard,
		title: "AdminDashboard",
		layout: "view",
		permission: "admin",
	},
	{
		path: "/admindashboard/verified",
		component: AdminVerified,
		title: "AdminDashboard",
		layout: "view",
		permission: "admin",
	},
	{
		path: "/",
		component: Landing,
		title: "Docchain",
		layout: "view",
		page: "none",
	},
	{
		path: "/view",
		component: Guest,
		title: "Docs",
		layout: "view",
		page: "none",
	},
];

export { routes };
