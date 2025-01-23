
export default async function blogDetails({ params }) {
    const { blogId } = params
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    const post = await data.json()
    console.log(post)
    return (
        <div>

        </div>
    )
}
