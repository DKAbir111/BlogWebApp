import Link from "next/link";

export default function BlogCard({ post }) {
    return (
        <div className="card bg-base-100  shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <div className="card-actions justify-end">
                    <Link href={`/${post.id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    )
}
