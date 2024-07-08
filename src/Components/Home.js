import About from './About'
import Footer from './Footer'
import fork from './fork.svg'
import headerImage from './header-bg.png'
import ImproveSkills from './ImproveSkills'
import Quote from './Quote'

function Home() {
    document.title = 'Plate Pages - Home'
    return (
        <div className='Home w-[100%] h-[150vh] flex flex-col items-center'>
            <div className="flex justify-center header-img mt-[5rem] w-[100%]">
                <img className='w-[100vw]' src={headerImage} alt="..." srcSet="" />
            </div>
            <div className="Headings relative md:bottom-[10rem] flex justify-center">
                <h1 className='text-center md:text-5xl text-[3rem] font-bold text-[#343434]'>Wellcome to Plate Pages</h1>
                <img className='relative ml-1 w-16 bottom-4 md:flex hidden' src={fork} alt="" srcSet="" />
            </div>
            <About />
            <ImproveSkills />
            <Quote />
            <Footer />
        </div>
    )
}

export default Home