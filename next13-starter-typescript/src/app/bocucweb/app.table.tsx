'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';

interface Iprops {
  blogs: IBlog[]
}
const AppTable = (props: Iprops) => {
  const { blogs } = props;
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false)

  return (
    <>
      <div
        className='mb-3'
        style={{ display: "flex", justifyContent: "space-between" }} >
        <h3 style={{ margin: "0 15px" }}>Danh sách nhân viên</h3>
        <Button style={{ margin: "0 102px 0 0", backgroundColor: "#222627", marginBottom: "5px" }} variant="secondary"
          onClick={() => setShowModalCreate(true)}

        >Thêm mới</Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr style={{ textAlign: "center", fontSize: "16px" }}>
            <th>STT</th>
            <th>Tên</th>
            <th>Họ</th>
            <th>email</th>
            <th>Số điện thoại</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map(blog => {
            return (
              <tr key={blog.id}>
                <td style={{ textAlign: "center" }}>{blog.id}</td>
                <td>{blog.name}</td>
                <td>{blog.username}</td>
                <td>{blog.email}</td>
                <td>{blog.phone}</td>
                <td style={{ textAlign: "center" }}>
                  <Button>View</Button>
                  <Button variant='warning' className='mx-3'>Edit</Button>
                  <Button variant='danger'>Delete</Button>

                </td>

              </tr>
            )
          })}
        </tbody>
      </Table>
      <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
      />
    </>
  );
}

export default AppTable;