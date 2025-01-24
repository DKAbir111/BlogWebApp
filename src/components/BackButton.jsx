'use client'

import { useRouter } from "next/navigation"

export default function BackButton() {
    const router = useRouter()
    return (
        <button className="btn btn-neutral rounded-sm" onClick={() => router.back()}>Go Back</button>
    )
}
