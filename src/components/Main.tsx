import { Nav } from './Nav'
import { Footer } from './Footer'

export const Main = () => {
    return (
        <div className='bg-primary text-offWhite min-h-screen flex flex-col justify-between h-[100vh]'>
            <Nav />
            <div className='h-[90%] px-8 py-16'>
                <p className='text-[25px] pr-[170px] tracking-wider leading-[40px]'>Query out products with their comments with machine learning which predicts positive and negative comment</p>
            </div>
            <Footer />
        </div>
    )
}