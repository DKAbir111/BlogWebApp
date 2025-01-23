export default async function page({ params }) {
    const id = await params
    console.log(id.id)
    return (
        <div>
            <h2 className="text-2xl">Blog:{id.id}</h2>
        </div>
    )
}
