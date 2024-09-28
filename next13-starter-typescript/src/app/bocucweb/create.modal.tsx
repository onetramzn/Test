'use client'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { mutate, useSWRConfig } from "swr"

interface IProps {
    showModalCreate: boolean;
    setShowModalCreate: (value: boolean) => void;
}
function CreateModal(props: IProps) {
    const { showModalCreate, setShowModalCreate } = props;


    const [name, setName] = useState<string>("")
    const [username, setUserName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")

    const handleSubmit = () => {
        if (!name) {
            toast.error("Không được để trống !")
            return;
        }
        if (!username) {
            toast.error("Không được để trống !")
            return;
        }
        if (!email) {
            toast.error("Không được để trống !")
            return;
        }
        if (!phone) {
            toast.error("Không được để trống !")
            return;
        }

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, username, email, phone })
        }).then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success("Tạo thành công !")
                    handleClosesModal();
                    mutate("http://localhost:8000/blogs")
                }
            });

        // toast.success("Thành công !");
        // console.log(">>check data form :", name, username, email, phone)
    }
    const handleClosesModal = () => {
        setName("");
        setUserName("");
        setEmail("");
        setPhone("");
        setShowModalCreate(false)
    }

    return (
        <>
            <Modal
                show={showModalCreate}
                onHide={() => handleClosesModal()}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Thêm nhân viên mới</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Tên</Form.Label>
                            <Form.Control type="text" placeholder="nhập tên"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Họ</Form.Label>
                            <Form.Control type="text" placeholder="nhập họ"

                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="text" placeholder="nhập số điện thoại"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClosesModal()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSubmit()}>Lưu</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModal;