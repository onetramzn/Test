'use client'
import { useRouter } from "next/navigation";
const Youtube = () => {
    const router = useRouter()
    const baka = () => {
        router.push("/")
    }
    return (
        <>
            <div className="test01">
                Xin Chao
                <button onClick={() => baka()}>back home</button>
            </div>
        </>

    )
}
export default Youtube;