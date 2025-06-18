import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuList = [
    {
        id: 1,
        name: "Homepage",
        link: "/",
        icon: "home.svg",
    },
    {
        id: 2,
        name: "Explore",
        link: "/",
        icon: "explore.svg",
    },
    {
        id: 3,
        name: "Notification",
        link: "/",
        icon: "notification.svg",
    },
    {
        id: 4,
        name: "Messages",
        link: "/",
        icon: "message.svg",
    },
    {
        id: 5,
        name: "Bookmarks",
        link: "/",
        icon: "bookmark.svg",
    },
    {
        id: 6,
        name: "Jobs",
        link: "/",
        icon: "job.svg",
    },
    {
        id: 7,
        name: "Communities",
        link: "/",
        icon: "community.svg",
    },
    {
        id: 8,
        name: "Premium",
        link: "/",
        icon: "logo.svg",
    },
    {
        id: 9,
        name: "Profile",
        link: "/user",
        icon: "profile.svg",
    },
    {
        id: 10,
        name: "More",
        link: "/",
        icon: "more.svg",
    },
];

const LeftBar = () => {
    return (
        <div className='h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8'>
            <div className='flex flex-col gap-4 text-lg items-center xxl:items-start'>
                <Link href="" >
                    <Image src={`icons/logo.svg`} alt='logo' width={24} height={24} />
                </Link>

                <div className='flex flex-col gap-4'>
                    {menuList.map((item) => (
                        <Link href={item.link} key={item.id} className='flex items-center gap-4 p-2 rounded-full hover:bg-[#181818]'>
                            <Image src={`icons/${item.icon}`} width={24} height={24} alt={item.name} />
                            <span className='hidden xxl:inline'>{item.name}</span>
                        </Link>
                    ))}
                </div>

                <Link href={`/compose/post`} className='bg-white text-black rounded-full flex items-center justify-center w-12 h-12 xxl:hidden'>
                    <Image src={`icons/post.svg`} alt='new post' width={24} height={24} />
                </Link>

                <Link href={`/compose/post`} className='hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20'>
                    Post
                </Link>

            </div>


            <div className='flex items-center justify-between hover:bg-[#181818] p-2 rounded-full'>
                <div className='flex items-center gap-2 '>
                    <div className='w-10 h-10 rounded-full relative overflow-hidden'>
                        <Image src={`/general/avatar.png`} alt='user image' width={100} height={100} />
                    </div>
                    <div className='hidden xxl:flex flex-col'>
                        <span className='font-bold'>Dev</span>
                        <span className='text-sm text-textGray'>@leduong92</span>
                    </div>
                </div>
                <div className='hidden xxl:block cursor-pointer font-bold'>...</div>
            </div>
        </div>
    )
}

export default LeftBar