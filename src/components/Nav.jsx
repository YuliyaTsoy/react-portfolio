import {CgNametag} from 'react-icons/cg';
import{AiOutlineClose} from 'react-icons/ai';
import {HiMenuAlt1} from 'react-icons/hi';
import {useState} from 'react';

const nav = ()=> {

const [toggle, setToggle] = useState (false);

function openMenu () {
    setToggle(true)
};
function closeMenu(){
    setToggle(false)
}

    return (
        <>
        <div className="flex items-center justify-between p-10 lg:flex-row">
            <div >
                <a href="#" className = "text-white font-mono text-3xl tracking-wider flex items-center"><CgNametag/>YT</a>
            </div>
            <div className="space-x-4">
                <div className = 'ssm:hidden lg:block space-x-2'>
                    <a href="#about" className="text-white hover:bg-blue-800 rounded-full px-5 py-2 text-xl">About</a>
                    <a href="#projects" className="text-white hover:bg-blue-800 rounded-full px-5 py-2 text-xl">Portfolio</a>
                    <a href="#contact" className="text-white hover:bg-blue-800 rounded-full px-5 py-2 text-xl">Contact</a>
                    <a href="https://drive.google.com/file/d/1u_DWS9nnwfqQ8lMBTZvBLuG4jxlQuqWG/view?usp=sharing" className="text-white hover:bg-blue-800 rounded-full px-5 py-2 text-xl">Resume</a>
                </div>
                <div className='ssm:block lg:hidden'>
                    {toggle ? (
                        <AiOutlineClose onClick = {closeMenu} size={30} className='text-white cursor-pointer' />
                    ):(<HiMenuAlt1 onClick = {openMenu} size={30} className='text-white'/>)}

                </div>
            </div>
        </div>

        <div className='ssm:block lg:hidden'>
            {toggle ? (
                <div className='flex justify-between ml-10'>
                <ul>
                    <li className='text-white text-xl mb-2 cursor-pointer'>About</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Portfolio</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Contact</li>
                    <li className='text-white text-xl mb-2 cursor-pointer'>Resume</li>
                </ul>
            </div>
            ):(
                <div></div>
            )}
            
        </div>

        </>
    )
};

export default nav;