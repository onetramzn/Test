'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

interface Iprops {
  blogs: IBlog[]
}
const AppTable = (props: Iprops) => {
  const { blogs } = props;

  const [blog, setBlog] = useState<IBlog | null>(null);
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false)
  const [showModalCreate, setShowModalCreate] = useState<boolean>(false)

  const handleDeleteBlog = (id: number) => {
    if (confirm(`Bạn có chắc muốn xóa nhân viên này?(id=${id})`)) {
      fetch(`http://localhost:8000/blogs/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },

      }).then(res => res.json())
        .then(res => {
          if (res) {
            toast.success("Xóa nhân viên thành công!")
            mutate("http://localhost:8000/blogs")
          }
        });
    }
  }

  return (
    <>
      <div
        className='mb-3'
        style={{ display: "flex", justifyContent: "space-between" }} >
        <h3 style={{ margin: "0 15px" }}>Danh sách nhân viên</h3>
        <Button style={{ margin: "0 102px 0 0", backgroundColor: "#222627", marginBottom: "5px" }}
          variant="secondary"
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
          {blogs?.map(item => {
            return (
              <tr key={item.id}>
                <td style={{ textAlign: "center" }}>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td style={{ textAlign: "center" }}>
                  <Link href={`/admin/${item.id}`}
                    className='btn btn-primary'>
                    View
                  </Link>
                  <Button variant='warning' className='mx-3'
                    onClick={() => {
                      setBlog(item);
                      setShowModalUpdate(true);
                    }}

                  >Edit</Button>
                  <Button variant='danger'
                    onClick={() => handleDeleteBlog(item.id)}

                  >Delete</Button>

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
      <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
      />
    </>
  );
}

export default AppTable;