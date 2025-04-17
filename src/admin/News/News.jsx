import { Button, Table, Space, Popconfirm, message, Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { token } from "../../layouts/GetUserData";
import moment from "moment/moment";


function News() {
    const [messageApi, contextHolder] = message.useMessage();
    const apiURL = import.meta.env.VITE_API_BASE_URL;
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [index, setIndex] = useState(0);
    const [take, setTake] = useState(10);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${apiURL}/api/news/admin/${index}/${take}`, {
                method: "GET",
                headers: { 'Authorization': `Bearer ${token}` }
            });
            const data = await response.json();
            if (response.ok) { setData(data.data); }
            else { messageApi.error(data.message); }
        }
        catch (error) {
            console.log(error);
            messageApi.error("Bir hata oluştu: " + error)
        }
        finally { setLoading(false); }
    }

    useEffect(() => { fetchData(); }, [])

    const Columns = [
        {
          title: 'Resim',
          dataIndex: 'newImage',
          key: 'newImage',
          render: (image) => <img src={apiURL + '/api/image/' + image} style={{ height: "70px" }} />
    
        },
        {
          title: 'Başlık',
          dataIndex: 'newTitle',
          key: 'newTitle',
          render: (text) => <p>{text}</p>
        },
        {
          title: 'Yazar',
          dataIndex: 'newAuthor',
          key: 'newAuthor',
          render: (item) => <div className="flex flex-col"><p>{item.fullName}</p><p>{item.email}</p></div>
        },
        {
          title: 'Durum',
          dataIndex: 'newStatus',
          key: 'newStatus',
          render: (status) => <Badge status={status === "Onay bekliyor" ? "warning" : (status === "Yayınlandı" ? "success" : "error")} text={status}/>
        },
        {
          title: 'Tarih',
          dataIndex: 'createdAt',
          key: 'createdAt',
          render: (date) => <p>{moment(date).format("DD.MM.YYYY H:mm")}</p>
        },
        {
          title: 'Detay',
          dataIndex: '_id',
          key: '_id',
          width: 1,
          render: (id) => <Button type="primary" onClick={() => navigate(`/admin/haber-detay/${id}`)}>Detaylar</Button>
        },
      ];

    return (
        <Table
            pagination={{
                pageSize: take,
                total: total,
                showTotal: (total) => `Toplam: ${total} haber`,
                onChange: (page) => setIndex(page - 1),
                pageSizeOptions: [10, 20, 50, 100],
                showSizeChanger: true,
                onShowSizeChange: (current, size) => {
                    setTake(size);
                    setIndex(0);
                }
            }}
            dataSource={data}
            columns={Columns}
            rowKey={(record) => record._id}
            loading={loading}
            scroll={{ x: 400 }}
            size="small"
        />
    )
}

export default News