'use client'
import { useState } from 'react';
import Link from "next/link";
import style from '@/app/style/app.module.css';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Trang Chủ',
  description: 'Tìm kiếm thông tin nhân viên',
}

interface IEmployee {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function Home() {
  const [name, setName] = useState<string>('');
  const [employee, setEmployee] = useState<IEmployee | null>(null);

  const handleSearch = () => {

    fetch(`http://localhost:8000/blogs?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setEmployee(data[0]);
        } else {
          setEmployee(null);
          alert('Không tìm thấy nhân viên!');
        }
      });
  };

  return (
    <div className={style.centeredContainer}>
      <div className={style.searchBox}>
        <h1>Tìm kiếm nhân viên</h1>
        <input
          type="text"
          placeholder="Nhập tên nhân viên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={style.inputField}
        />
        <button
          onClick={handleSearch}
          className={style.searchButton}
        >
          Tìm kiếm
        </button>
      </div>

      {/* Hiển thị thông tin nhân viên nếu tìm thấy */}
      {employee && (
        <div className={style.employeeInfo}>
          <h3>Thông tin nhân viên:</h3>
          <p><strong>Tên:</strong> {employee.name}</p>
          <p><strong>Họ:</strong> {employee.username}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Số điện thoại:</strong> {employee.phone}</p>
        </div>
      )}
    </div>
  );
}
