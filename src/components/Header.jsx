import { Layout, Menu, Modal } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
function MyHeader() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleContactClick = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    window.location.href = "mailto:avezqureshi4785@gmail.com";
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="logo" style={{ fontWeight: "bold" }}>
          <Link to="/">AVEZ TODOLIST</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<InfoCircleOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item
          key="contact"
          title="Contact"
          icon={<ContactsOutlined />}
          onClick={handleContactClick}
        >
          Contact
        </Menu.Item>
      </Menu>
      <Modal
        title="Contact Us"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <p>You will be redirected to the mail</p>
      </Modal>
    </>
  );
}

export default MyHeader;
