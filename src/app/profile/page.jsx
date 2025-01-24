import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default async function Profile() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) {
        redirect('/');
    }
    return (
        <main className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-center py-10 text-orange-500 text-2xl font-semibold">"Welcome to your profile!"</h2>
        </main>
    )
}
