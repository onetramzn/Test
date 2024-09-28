'use client'
import { useRouter } from "next/navigation";

const Tiktok = () => {
    const router = useRouter()
    const nuttrove = () => {
        router.push("/")
    }
    return (
        <>
            <div className="test01">
                Xin Chao<br></br>
                <button onClick={() => nuttrove()}> Back home</button>
            </div>
        </>

    )
}
export default Tiktok;