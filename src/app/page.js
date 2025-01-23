import BlogCard from "@/components/BlogCard"

export default async function Home() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    return (
        <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
            {
                posts.map(post => <BlogCard key={post.id} post={post} />)

            }
        </main>
    )
}
