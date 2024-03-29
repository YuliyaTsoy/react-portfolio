import { FaL, FaMedium } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HeroPic from '../assets/Headshot.jpg'

const hero = () => {
    return (
        <section id = "about" className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
            <div className='lg:w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-5 text-slate-300'>I'm</p>
                <h1 className='text-6xl'>Yuliya Tsoy</h1>
                <hr/>
                <p className='mt-10 text-slate-300 font-sans'>Enthusiastic and challenge-driven bootcamp graduate from Columbia University with strong analytical and coding skills. Created 20+ web applications leveraging knowledge in HTML, CSS, JavaScript, Node.js, Express.js, MySQL, MongoDB, React.</p>
            </div>
            <div className='lg:w-1/3 items-center ssm:w-fit'>
                <img src={HeroPic} alt="headshot" width = {250} height = {250} className='rounded-full w-full border-8 border-white'/>
            </div>
            <div className='lg:w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-4'>About me</p>
                <p className='text-slate-300'>
                Skills obtained from my previous work experience: excellent communication, forward thinking, reliability, I applied to the 3 full stack projects I collaborated on within the bootcamp curriculum. 
                </p>
                <a href="./src/assets/cv.pdf" download>
                <button className='bg-white text-blue-600 px-10 py-2 my-3 rounded-full hover:bg-blue-800 hover:text-white'>
                    Download Resume
                </button>
                </a>
                <div className='flex mt-5 space-x-4 cursor-pointer'>
                    <a href="https://medium.com/@kan.yulya"><FaMedium size={40} className='border-4 hover:border-blue-800 rounded-full'/></a>
                    <a href="https://github.com/YuliyaTsoy/"><FaGithub size={40} className='border-4 hover:border-blue-800 rounded-full'/></a>
                    <a href="https://www.linkedin.com/in/yuliya-tsoy-fsdeveloper2024/"><FaLinkedin size={40} className='border-4 hover:border-blue-800 rounded-full'/></a>
                 
                </div>
            </div>
        </section>
    )
}

export default hero;