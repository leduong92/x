import Image from 'next/image'
import React from 'react'
import PostInfo from './PostInfo'

const Post = () => {
    return (
        <div className='p-4 border-y-[1px] border-borderGray'>
            <div className='flex items-center gap-2  text-sm text-textGray mb-2 font-bold'>
                icon
                <span>Dev reposted</span>
            </div>

            <div className='flex gap-4'>
                <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                    <Image src={`/general/avatar.png`} alt='avatar' width={100} height={100} />
                </div>
                <div className=''>
                    <div>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2 flex-wrap'>
                                <h1>Dev</h1>
                                <span>@leduong92</span>
                                <span>1 day ago</span>
                            </div>
                            <PostInfo />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Post