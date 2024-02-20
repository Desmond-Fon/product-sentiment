export const Footer = () => {
    return (
        <div className='bg-primary text-footerText py-4 flex justify-between items-center px-4 lg:px-8 text-[13px] w-full lg:text-[16px]'>
            <p>copyright prodSent</p>
            <div className='flex justify-between items-center gap-5'>
                <p className='cursor-pointer hover:text-offWhite'>how it works</p>
                <p className='cursor-pointer hover:text-offWhite'>privacy policy</p>
                <p className='cursor-pointer hover:text-offWhite'>legal</p>
            </div>
        </div>
    )
}