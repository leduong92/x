import Image from 'next/image'
import React from 'react'
import PostInfo from './PostInfo'
import PostInteractions from './PostInteractions'

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
                <div className='flex-1 flex flex-col gap-2'>
                    <div className='flex items-center justify-between gap-2'>
                        <div className='flex items-center gap-2 flex-wrap'>
                            <h1 className='text-md font-bold'>Duong Dev</h1>
                            <span className='text-textGray'>@leduong92</span>
                            <span className='text-textGray'>1 day ago</span>
                        </div>
                        <PostInfo />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eos ratione dignissimos reiciendis commodi veniam harum consectetur assumenda vel odio voluptas numquam repellat rem dolorum, magnam excepturi non? Dolore, facilis.
                    </p>
                    <Image src={`/general/post.jpeg`} alt="" width={600} height={600} />
                    <PostInteractions />
                </div>
            </div>
        </div>
    )
}

export default Post