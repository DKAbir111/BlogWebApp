export default function BlogCard({ post }) {
    return (
        <div className="card bg-base-100  shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    )
}
