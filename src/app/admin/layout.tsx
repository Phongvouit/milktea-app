import LayoutAdmin from "@/components/LayoutAdmin"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <LayoutAdmin>
            {children}
        </LayoutAdmin>
    )
}