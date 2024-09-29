'use client'
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useSWR, { Fetcher } from "swr";

const ViewDetailBlog = ({ params }: { params: { id: string } }) => {

    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url)
        .then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.id}`,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );
    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <div>
            <div className='my-3'>
                <Button variant='light'>
                    <Link style={{ textDecoration: "none", fontWeight: "300", color: "black" }} href={"/admin"}>Back </Link>

                </Button>
            </div>
            <Card className="text-center">
                <Card.Header>Tên nhân viên:{data?.name}</Card.Header>
                <Card.Header>Họ:{data?.username} </Card.Header>
                <Card.Header>Số điện thoại:{data?.phone}</Card.Header>
                <Card.Footer className="text-muted">Email:{data?.email} </Card.Footer>
            </Card>

        </div>
    )
}
export default ViewDetailBlog;