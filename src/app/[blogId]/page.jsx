import BackButton from "@/components/BackButton"
import { Link } from "lucide-react"

export default async function blogDetails({ params }) {
    const { blogId } = params
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
    const post = await data.json()
    console.log(post)
    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
                <div className="card-actions justify-end">
                    <BackButton />
                </div>
            </div>
        </div>
    )
}
