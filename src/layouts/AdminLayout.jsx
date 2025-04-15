import { useNavigate } from "react-router-dom"
import { Button, Layout, Menu } from "antd";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { 
  Person,
  List
 } from 'react-bootstrap-icons';


const { Sider, Header, Content } = Layout;


function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(window.innerWidth > 768 ? false : true);
  const apiURL = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();


  const menuItems = [



    {
      key: "1",
      icon: <Person />,
      label: "Kullanıcılar",
      path: "/",
      children: [
        {
          key: "2",
          label: "Kullanıcı Listesi",
          path: "/admin/kullanicilar",
          onClick: () => {
            navigate(`/admin/kullanicilar`);
          },
        },
        {
          key: "3",
          label: "Kullanıcı Ekle",
          path: "/admin/kullanici-ekle",
          onClick: () => {
            navigate("/admin/kullanici-ekle");
          },
        },
      ],
    }

/*
    {

      

      key: "1",
      icon: <Speedometer />,
      label: "Dashboard",
      path: "/admin/",
      onClick: () => {
        navigate(`/admin/`);
      },

    },
    {
      key: "2",
      icon: <GearWideConnected />,
      label: "Site Settings",
      path: "/admin/SiteSettings",
      onClick: () => {
        navigate(`/admin/SiteSettings`);
      },
    },
    {
      key: "3",
      icon: <Box />,
      label: "Categories",
      path: "/",
      children: [
        {
          key: "4",
          label: "Category List",
          path: "/admin/Categories",
          onClick: () => {
            navigate(`/admin/Categories`);
          },
        },
        {
          key: "5",
          label: "Add Category",
          path: "/admin/Categories/Create",
          onClick: () => {
            navigate("/admin/Categories/Create");
          },
        },
      ],
    },
    {
      key: "6",
      icon: <Boxes />,
      label: "Products",
      path: "/",
      children: [
        {
          key: "7",
          label: "Product List",
          path: "/admin/Products",
          onClick: () => {
            navigate(`/admin/Products`);
          },
        },
        {
          key: "8",
          label: "Add Product",
          path: "/admin/Products/Create",
          onClick: () => {
            navigate("/admin/Products/Create");
          },
        },
      ],
    },
    {
      key: "9",
      icon: <FileEarmark />,
      label: "Pages",
      path: "/",
      children: [
        {
          key: "10",
          label: "Page List",
          path: "/admin/Pages",
          onClick: () => {
            navigate(`/admin/Pages`);
          },
        },
        {
          key: "11",
          label: "Add Page",
          path: "/admin/Pages/Create",
          onClick: () => {
            navigate("/admin/Pages/Create");
          },
        },
        {
          key: "12",
          label: "Default Pages",
          path: "/admin/Pages/Default",
          onClick: () => {
            navigate("/admin/Pages/Default");
          },
        },
      ],
    },
    {
      key: "13",
      icon: <Ticket />,
      label: "Coupons",
      path: "/",
      children: [
        {
          key: "14",
          label: "Coupon List",
          path: "/admin/Coupons",
          onClick: () => {
            navigate(`/admin/Coupons`);
          },
        },
        {
          key: "15",
          label: "Add Coupon",
          path: "/admin/Coupons/Create",
          onClick: () => {
            navigate("/admin/Coupons/Create");
          },
        },
      ],
    },
    {
      key: "16",
      icon: <UiRadiosGrid />,
      label: "Ads",
      path: "/",
      children: [
        {
          key: "17",
          label: "Ad List",
          path: "/admin/Ads",
          onClick: () => {
            navigate(`/admin/Ads`);
          },
        },
        {
          key: "18",
          label: "Add Ad",
          path: "/admin/Ads/Create",
          onClick: () => {
            navigate("/admin/Ads/Create");
          },
        },
      ],
    },
    {
      key: "50",
      icon: <Box2 />,
      label: "Orders",
      path: "/admin/Orders",
      onClick: () => {
        navigate(`/admin/Orders`);
      },
    },
    {
      key: "51",
      icon: <Person />,
      label: "Users",
      path: "/admin/Users",
      onClick: () => {
        navigate(`/admin/Users`);
      },
    },
    {
      key: "52",
      icon: <Mailbox />,
      label: "Contact Forms",
      path: "/admin/Contact",
      onClick: () => {
        navigate(`/admin/Contact`);
      },
    },
    {
      key: "99",
      icon: <IoIosArrowBack  />,
      label: "Go back",
      path: "/",
      onClick: () => {
        navigate(`/`);
        window.location.reload();
      },
    },*/
  ]

  const getActiveKey = () => {
    for (const item of menuItems) {
      if (item.children) {
        for (const child of item.children) {
          if (child.path === window.location.pathname) {
            return child.key;
          }
        }
      }
      else {
        if (item.path === window.location.pathname) {
          return item.key;
        }
      }
    }
  };

  const getPageTitle = () => {
    for (const item of menuItems) {
      if (item.children) {
        for (const child of item.children) {
          if (child.path === window.location.pathname) {
            return child.label;
          }
        }
      } else {
        if (item.path === window.location.pathname) {
          return item.label;
        }
      }
    }
  };

  return (
    <div className="admin-layout">
      <Helmet>
        <title>Admin Panel</title>
      </Helmet>
      <Layout>
        <Sider width={"300px"} trigger={null} theme="light " collapsible collapsed={collapsed}>
          <img src="/bilinti-5.png" style={{ width: collapsed ? "50%" : "25%", position: "relative", left: "50%", transform: "translateX(-50%)", padding: "1rem 0", transition: "ease .3s" }} />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[getActiveKey()]}
            items={menuItems}
          />
        </Sider>
        <Layout>
          <Header style={{
            padding: 0, backgroundColor: "white", display: "flex",
            justifyContent: "space-start",
          }}>
            {window.innerWidth > 768 &&
            <Button
              type="text"
              icon={<List />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            }

            <b>Admin Panel | {getPageTitle()}</b>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: window.innerWidth > 768 ? 24 : 10,
              minHeight: "100vh"
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default AdminLayout