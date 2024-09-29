

export const metadata = {
    title: 'Admin',
    description: 'trang chủ admin',
}

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}

        </>
    )
}