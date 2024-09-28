'use client'
import { useRouter } from "next/navigation";
import { Button } from 'react-bootstrap';


const Facebook = () => {
    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    return (
        <div className="test01">
            Xin Chao
            <div>
                <Button variant='success'>nhat ne</Button>
                <button onClick={() => handleBtn()}>Back home</button>
            </div>
        </div>


    )
}
export default Facebook;