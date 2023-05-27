import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import useCurrentUser from '../hooks/useCurrentUser';
import { useRouter } from "next/router";


export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false
            }

        }

    }
    return {
        props: {}
    }
}
const Profiles = () => {
    const router = useRouter();
    const { data: user } = useCurrentUser();
    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl text-white md:text-6xl text-center">Who is Watching ?? </h1>
                <div className="flex gap-8 mt-10 items-center justify-center">
                    <div onClick={() => { router.push("/") }}>
                        <div className="group flex-row w-90 mx-auto">
                            <div className="w-44 h-33 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                                <img src="../images/default-blue.png" alt="profile" />
                            </div>
                            <div className="text-2xl mt-4 text-gray-400 group-hover:text-white text-center">
                                {user?.name}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profiles;