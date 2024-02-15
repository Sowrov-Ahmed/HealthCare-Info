import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const AdminDashboard = () => {
    const [email, setEmail] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const session = sessionStorage.getItem('email');
        setEmail(session);
        if (session == null) {
            router.push('/login');
        }
    }, []);

    return (
        <>
            <Head>
                <title>Admin Dashboard</title>
            </Head>

            <div className="bg-gray-200">
                <div className="container mx-auto py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/">
                                <Image src="/images/resize.png" alt="Logo" height={200} width={200} />
                            </Link>
                            {/* Add your navigation links here */}
                        </div>

                        <div className="text-2xl font-bold text-gray-800">
                            <Link href="/adminDashboard">Dashboard</Link>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link href="/allUser" className="border border-gray-300 rounded-lg shadow p-4 flex items-center bg-white text-gray-800">
                        <Image src="/images/user.png" alt="All Users" className="w-10 h-10 mr-4" width={100} height={100} />
                        <div>
                            <h2 className="text-xl font-bold">All Users</h2>
                            <p className="text-gray-600">View all users</p>
                        </div>
                    </Link>

                    <Link href="/signup" className="border border-gray-300 rounded-lg shadow p-4 flex items-center bg-white text-gray-800">
                        <Image src="/images/addUser.png" alt="Add User" className="w-10 h-10 mr-4" width={100} height={100} />
                        <div>
                            <h2 className="text-xl font-bold">Add User</h2>
                            <p className="text-gray-600">Add a new user</p>
                        </div>
                    </Link>

                    <Link href="/searchUser" className="border border-gray-300 rounded-lg shadow p-4 flex items-center bg-white text-gray-800">
                        <Image src="/images/searchUser.png" alt="Search User" className="w-10 h-10 mr-4" width={100} height={100} />
                        <div>
                            <h2 className="text-xl font-bold">Search User</h2>
                            <p className="text-gray-600">Search for a user</p>
                        </div>
                    </Link>

                    <Link href="/updateUser" className="border border-gray-300 rounded-lg shadow p-4 flex items-center bg-white text-gray-800">
                        <Image src="/images/user.png" alt="Update User" className="w-10 h-10 mr-4" width={100} height={100} />
                        <div>
                            <h2 className="text-xl font-bold">Update User</h2>
                            <p className="text-gray-600">Update a specific user</p>
                        </div>
                    </Link>
                </div>
            </main>
        </>

    )
}

export default AdminDashboard;