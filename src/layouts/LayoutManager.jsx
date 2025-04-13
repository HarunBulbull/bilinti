import MainLayout from './MainLayout.jsx';
import AdminLayout from './AdminLayout.jsx';

 
 const hrf = window.location.href;
 const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
 
 export const Layout = hrf.includes('/admin/') ? (user?.userRole === "admin" ? AdminLayout : MainLayout) : MainLayout;