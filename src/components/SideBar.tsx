import { Image } from '@chakra-ui/react'

export const SideBar = () => {
    return (
        <div className='bg-tertiary text-offWhite min-h-screen px-7 pb-7'>
            <div className='flex justify-between items-center pb-5 sticky top-0 z-40 bg-tertiary pt-5'>
                <p className='font-[500] text-[18px]'>Recent Data</p>
                <p className='text-secondary'>see all</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='w-[100%] bg-red-400 relative'>
                    <Image
                        objectFit='cover'
                        w={{ base: '100%', sm: '200px', md: '100%' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <div className='bg-overlay absolute bottom-0 w-full flex justify-between items-center px-3 py-2'>
                        <div className='text-[14px]'>
                            <p className='font-[500]'>Yesterday files</p>
                            <p className='text-[12px]'>04/12/2020</p>
                        </div>
                        <button className='bg-secondary px-3 py-1 border-none rounded-sm text-[14px]'>View chart</button>
                    </div>
                </div>

                <div className='w-[100%] bg-red-400 relative'>
                    <Image
                        objectFit='cover'
                        w={{ base: '100%', sm: '200px', md: '100%' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <div className='bg-overlay absolute bottom-0 w-full flex justify-between items-center px-3 py-2'>
                        <div className='text-[14px]'>
                            <p className='font-[500]'>Yesterday files</p>
                            <p className='text-[12px]'>04/12/2020</p>
                        </div>
                        <button className='bg-secondary px-3 py-1 border-none rounded-sm text-[14px]'>View chart</button>
                    </div>
                </div>

                <div className='w-[100%] bg-red-400 relative'>
                    <Image
                        objectFit='cover'
                        w={{ base: '100%', sm: '200px', md: '100%' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <div className='bg-overlay absolute bottom-0 w-full flex justify-between items-center px-3 py-2'>
                        <div className='text-[14px]'>
                            <p className='font-[500]'>Yesterday files</p>
                            <p className='text-[12px]'>04/12/2020</p>
                        </div>
                        <button className='bg-secondary px-3 py-1 border-none rounded-sm text-[14px]'>View chart</button>
                    </div>
                </div>

                <div className='w-[100%] bg-red-400 relative'>
                    <Image
                        objectFit='cover'
                        w={{ base: '100%', sm: '200px', md: '100%' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <div className='bg-overlay absolute bottom-0 w-full flex justify-between items-center px-3 py-2'>
                        <div className='text-[14px]'>
                            <p className='font-[500]'>Yesterday files</p>
                            <p className='text-[12px]'>04/12/2020</p>
                        </div>
                        <button className='bg-secondary px-3 py-1 border-none rounded-sm text-[14px]'>View chart</button>
                    </div>
                </div>

                <div className='w-[100%] bg-red-400 relative'>
                    <Image
                        objectFit='cover'
                        w={{ base: '100%', sm: '200px', md: '100%' }}
                        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                        alt='Caffe Latte'
                    />
                    <div className='bg-overlay absolute bottom-0 w-full flex justify-between items-center px-3 py-2'>
                        <div className='text-[14px]'>
                            <p className='font-[500]'>Yesterday files</p>
                            <p className='text-[12px]'>04/12/2020</p>
                        </div>
                        <button className='bg-secondary px-3 py-1 border-none rounded-sm text-[14px]'>View chart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}