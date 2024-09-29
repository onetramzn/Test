


export const metadata = {
    title: 'Xem thông tin',
    description: 'Xem thông tin chi tiết của nhân viên',
}

export default function ViewLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}

        </div>
    )
}