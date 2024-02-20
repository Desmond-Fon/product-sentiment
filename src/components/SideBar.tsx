import { ProductModal } from './Modal'

export const SideBar = () => {
    return (
        <div className='bg-tertiary text-offWhite min-h-screen px-10 lg:px-7 pb-7'>
            <div className='flex justify-between items-center pb-5 sticky top-0 z-40 bg-tertiary pt-5'>
                <p className='font-[500] lg:text-[18px]'>Recent Data</p>
                <p className='text-secondary text-[13px] lg:text-[14px] cursor-pointer'>see all</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <ProductModal />

                <ProductModal />

                <ProductModal />

                <ProductModal />

                <ProductModal />
            </div>
        </div>
    )
}