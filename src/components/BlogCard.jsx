import Link from "next/link";

export default function BlogCard({ post }) {
    return (
        <div className="card shadow-md border bg-base-200">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <div className="card-actions justify-end">
                    <Link href={`/${post.id}`}><button className="btn btn-neutral rounded-sm">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}
