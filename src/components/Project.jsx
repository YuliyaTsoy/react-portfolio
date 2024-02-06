import Project1Pic from "../assets/proj1.jpg";
import Project2Pic from "../assets/proj2.jpg";
import Project3Pic from "../assets/proj3.jpg";
import Project4Pic from "../assets/proj4.jpg";
import Project5Pic from "../assets/proj5.jpg";
import Project6Pic from "../assets/proj6.jpg";

export default function Project() {
  return (
    <>
    <section id="projects">
      <div className="bg-blue-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Projects</h1>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-blue-500 font-semibold">
                    JATE
                  </div>
                  <div className='flex mt-5 space-x-4 cursor-pointer'>
                  <a href="https://github.com/YuliyaTsoy/pwa-text-editor">Github Link</a>
                  <a href="https://pwa-text-editor-ro6k.onrender.com">Live Link</a>
                  </div>
                  <p className="mt-2 text-slate-500">
                  It is a text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.
                  </p>
                  
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project1Pic}
                    alt="Project 1"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project2Pic}
                    alt="Project 1"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-blue-500 font-semibold">
                    MVC Tech Blog
                  </div>
                  <div className='flex mt-5 space-x-4 cursor-pointer'>
                  <a href="https://github.com/YuliyaTsoy/mvc-tech-blog">Github Link</a>
                  <a href="https://mvc-tech-blog706-871c317c7d83.herokuapp.com/">Live Link</a>
                  </div>
                  <p className="mt-2 text-slate-500">
                  This is CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. This app is deployed on Heroku. It follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-blue-500 font-semibold">
                  Express.js: Note Taker
                  </div>
                  <div className='flex mt-5 space-x-4 cursor-pointer'>
                  <a href="https://github.com/YuliyaTsoy/express-js-note-taker">Github Link</a>
                  <a href="https://note-taker234353-9e5870079997.herokuapp.com/">Live Link</a>
                  </div>
                  <p className="mt-2 text-slate-500">
                  Note Taker is an application that can be used to write and save notes. It uses an Express.js back end and saves and retrieve note data from a JSON file.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project3Pic}
                    alt="Project 1"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project4Pic}
                    alt="Project 1"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-blue-500 font-semibold">
                  GAS STATION NEAR ME
                  </div>
                  <div className='flex mt-5 space-x-4 cursor-pointer'>
                  <a href="https://github.com/tjamesmcdonald/gas-stations-near-me">Github Link</a>
                  <a href="https://tjamesmcdonald.github.io/gas-stations-near-me/">Live Link</a>
                  </div>
                  <p className="mt-2 text-slate-500">
                  This application helps the user find the nearest gas station in area.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-blue-500 font-semibold">
                    Foodie Finds
                  </div>
                  </div>
                  <div className='flex mt-5 space-x-4 cursor-pointer'>
                  <a href="https://github.com/nicholascatalano/foodie-finds-app">Github Link</a>
                  <a href="https://restaurant-blog-3f12d3a2bc88.herokuapp.com/">Live Link</a>
                  </div>
                  <p className="mt-2 text-slate-500">
                  Foodie finds was created to help people who are looking for restaurants that cater to their specific dietary needs. This app has a minimalist design and a user-friendly interface with a clear navigational structure that makes it easy to use. The user will be able to add their own review for a restaurant they've visted which will be saved to their account dashboard, as well as see other reviews of restaurants based off their filters.
                  </p>
                </div>
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project5Pic}
                    alt="Project 6"
                    width={150}
                    height={150}
                  />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-5">
                  <img
                    src={Project6Pic}
                    alt="Project 1"
                    width={150}
                    height={150}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-blue-500 font-semibold">
                  Social Network API
                  </div>
                  <div className='flex mt-5 space-x-4 cursor-pointer'>
                  <a href="https://github.com/YuliyaTsoy/social-network-api">Github Link</a>
                  <a href="https://drive.google.com/file/d/1JcZxJuGFxB2yWxh-2F0a_1ye2HUBmyB-/view?pli=1">Demo Link</a>
                  </div>
                  <p className="mt-2 text-slate-500">
                  This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. I used Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, I also used JavaScript Date object to format timestamps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
