import {CgNametag} from 'react-icons/cg'

const nav = ()=> {
    return (
        <>
        <div className="flex items-center justify-between p-10 lg:flex-row">
            <div>
                <a href="#" className = "text-white font-mono text-3xl tracking-wider flex items-center"><CgNametag/>LOGO</a>
            </div>
            <div className="space-x-4">
                <a href="#" className="text-white hover:bg-blue-800 rounded-full px-5 py-2 text-xl">About</a>
                <a href="#" className="text-white hover:bg-blue-800 rounded-full px-5 py-2 text-xl">Portfolio</a>
                <a href="#" className="text-white hover:bg-blue-800 rounded-full px-5 py-2 text-xl">Contact</a>
                <a href="#" className="text-white hover:bg-blue-800 rounded-full px-5 py-2 text-xl">Resume</a>
            </div>
        </div>
        </>
    )
};

export default nav;