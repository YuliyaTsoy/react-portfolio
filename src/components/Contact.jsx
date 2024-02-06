import { IoIosMail } from "react-icons/io";
import { IoMdPhonePortrait } from "react-icons/io";


const Contact = () => {
  const contact_info = [
    { logo: <IoIosMail/>, text: "yuliyatsoy2023@gmail.com" },
    { logo: <IoMdPhonePortrait/>, text: "347 977 2476" },
  
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact
        </h3>
        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-blue-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5" >
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className='bg-white text-blue-600 px-10 py-2 my-3 rounded-full hover:bg-blue-400 hover:text-white'>Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-blue-600 rounded-full">
                 {contact.logo}
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;