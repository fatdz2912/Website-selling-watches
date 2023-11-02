// import React, { useState } from "react";
// import { useEffect } from "react";
// import { Button, Table, Row, Col, Space, Popconfirm } from "antd";
// import { v4 } from "uuid";
// import { useDispatch, useSelector } from "react-redux";

// import CreateModal from "./components/CreateModal";
// import ModalUpdate from "./components/ModalUpdate";
// import {
//   getProductListRequest,
//   createProductRequest,
//   updateProductRequest,
//   deleteProductRequest,
// } from "redux/slicers/product.slice";
// function UserManager() {
//   const [isShowCreateUser, setIsShowCreateUser] = useState(false);
//   const [isShowUpdateUser, setIsShowUpdateUser] = useState(false);
//   const [updateData, setUpdateData] = useState({});
//   const { userList } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getProductListRequest());
//   }, []);
//   const handleCreateUser = (values) => {
//     dispatch(
//       createProductRequest({
//         data: {
//           id: v4(),
//           ...values,
//         },
//       })
//     );
//     setIsShowCreateUser(false);
//   };
//   const handleDeleteUser = (id) => {
//     dispatch(
//       deleteProductRequest({
//         data: {
//           id,
//         },
//       })
//     );
//   };
//   const handleUpdateUser = (id, values) => {
//     dispatch(
//       updateProductRequest({
//         data: {
//           id: id,
//           ...values,
//         },
//       })
//     );
//     setIsShowUpdateUser(false);
//   };
//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Age",
//       dataIndex: "age",
//       key: "age",
//     },
//     {
//       title: "Gender",
//       dataIndex: "gender",
//       key: "gender",
//     },
//     {
//       title: "Gmail",
//       dataIndex: "gmail",
//       key: "gmail",
//     },
//     {
//       title: "Address",
//       dataIndex: "address",
//       key: "name",
//     },
//     {
//       title: "Action",
//       dataIndex: "action",
//       key: "action",
//       render: (_, item) => (
//         <Space size={16}>
//           <Button
//             onClick={() => {
//               setIsShowUpdateUser(true);
//               setUpdateData(item);
//             }}
//           >
//             Update
//           </Button>
//           <Popconfirm
//             title="Delete user"
//             description="Are you sure to delete this user?"
//             okText="Yes"
//             cancelText="No"
//             onConfirm={() => handleDeleteUser(item.id)}
//           >
//             <Button>Delete</Button>
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];
//   return (
//     <Row gutter={[16, 16]} justify="space-between" align="middle">
//       <Col md={20} push={1}>
//         <Row gutter={[16, 16]}>
//           <Col md={24}>
//             <h1>User List</h1>
//           </Col>
//         </Row>
//       </Col>
//       <Col md={4}>
//         <Button type="primary" onClick={() => setIsShowCreateUser(true)}>
//           Create User
//         </Button>
//       </Col>
//       <Col md={24}>
//         <Table
//           dataSource={userList.data}
//           columns={columns}
//           pagination={false}
//           rowKey={"key"}
//         />
//       </Col>
//       <ModalUpdate
//         isShowUpdateUser={isShowUpdateUser}
//         setIsShowUpdateUser={setIsShowUpdateUser}
//         handleUpdateUser={handleUpdateUser}
//         updateData={updateData}
//       />
//       <CreateModal
//         isShowCreateUser={isShowCreateUser}
//         setIsShowCreateUser={setIsShowCreateUser}
//         handleCreateUser={handleCreateUser}
//       />
//     </Row>
//   );
// }
// export default UserManager;
