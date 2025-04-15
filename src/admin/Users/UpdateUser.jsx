import { Button, Spin, Form, message, Input, Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";

function UpdateUser() {
    const [messageApi, contextHolder] = message.useMessage();
    const apiURL = import.meta.env.VITE_API_BASE_URL;
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const { id } = useParams();

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${apiURL}/api/users/${id}`, { method: "GET" });
            const data = await response.json();
            if (response.ok) { 
                form.setFieldValue("fullName", data.data.name);
                form.setFieldValue("email", data.data.mail);
                form.setFieldValue("role", data.data.role);
            }
            else { messageApi.error(data.message); }
        }
        catch (error) {
            console.log(error);
            messageApi.error("Bir hata oluştu: " + error)
        }
        finally { setLoading(false); }
    }

    useEffect(() => { fetchData(); }, [])


    const onFinish = async (values) => {
        if(values.password != values.passwordAgain){return messageApi.error("Şifreler uyuşmuyor.");}
        let newData = {
            fullName: values.fullName,
            email: values.email,
            role: values.role
        };
        if(values.password != "" && values.password){newData = {...newData, password: values.password}}
        try {
            setLoading(true);
            const response = await fetch(`${apiURL}/api/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'x-api-key': import.meta.env.VITE_API_KEY
                },
                body: JSON.stringify(newData),
            });
            const data = await response.json();
            if (response.ok) {
                messageApi.success(data.message);
                navigate('/admin/kullanicilar');
            }
            else{messageApi.error(data.message);}
        }
        catch (error) { 
            console.log(error);
            messageApi.error("Bir hata oluştu: " + error)
        }
        finally { setLoading(false); }
    };

    return (
        <Spin spinning={loading} tip="Yükleniyor..." indicator={<LoadingOutlined spin />} size="large">
            {contextHolder}
            <Form
                form={form}
                name="basic"
                layout="vertical"
                autoComplete="off"
                onFinish={onFinish}
            >
                <div className="flex flex-col sm:gap-4">

                    <div className="flex sm:flex-row flex-col sm:gap-4">
                        <Form.Item
                            label="Ad Soyad"
                            name="fullName"
                            rules={[{ required: true, message: 'Lütfen bu alanı doldurun.' }]}
                            style={{ width: "100%" }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="E-posta Adresi"
                            name="email"
                            rules={[
                                { required: true, message: 'Lütfen bu alanı doldurun.' },
                                { type: 'email', message: 'Geçerli bir e-posta adresi girin.' }
                            ]}
                            style={{ width: "100%" }}
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    <i>Şifreyi değiştirmek istemiyorsanız bu alanları boş bırakın.</i>
                    <div className="flex sm:flex-row flex-col gap-4">
                        <Form.Item
                            label="Şifre"
                            name="password"
                            style={{ width: "100%" }}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="Şifre Tekrar"
                            name="passwordAgain"
                            style={{ width: "100%" }}
                        >
                            <Input.Password />
                        </Form.Item>
                    </div>

                    <div className="flex sm:flex-row flex-col gap-4 items-center">
                        <Form.Item
                            label="Rol"
                            name="role"
                            rules={[{ required: true, message: 'Lütfen bu alanı doldurun.' }]}
                            style={{ width: "100%" }}
                        >
                            <Select
                                options={[
                                    { value: "admin", label: "Admin" },
                                    { value: "baseditor", label: "Baş Editör" },
                                    { value: "Yazar", label: "Yazar" }
                                ]}
                            />
                        </Form.Item>
                        <Button className="adminPanelButton" type="primary" htmlType="submit" style={{ width: "100%" }}>Kaydet</Button>
                    </div>
                </div>
            </Form>
        </Spin>
    )
}

export default UpdateUser