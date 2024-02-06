import Project1Pic from "../assets/proj1.jpg";
import Project2Pic from "../assets/proj2.jpg";
import Project3Pic from "../assets/proj3.jpg";
import Project4Pic from "../assets/proj4.jpg";

export default function Project() {
  return (
    <>
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
                    Project 1 - name goes here
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum soluta facere laudantium ut explicabo. Quibusdam rem
                    distinctio iure, quod dolores assumenda veniam vel
                    blanditiis porro atque iste, quas velit esse!
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
                    Project 2 - name goes here
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum soluta facere laudantium ut explicabo. Quibusdam rem
                    distinctio iure, quod dolores assumenda veniam vel
                    blanditiis porro atque iste, quas velit esse!
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
                    Project 3 - name goes here
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum soluta facere laudantium ut explicabo. Quibusdam rem
                    distinctio iure, quod dolores assumenda veniam vel
                    blanditiis porro atque iste, quas velit esse!
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
                    Project 4 - name goes here
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum soluta facere laudantium ut explicabo. Quibusdam rem
                    distinctio iure, quod dolores assumenda veniam vel
                    blanditiis porro atque iste, quas velit esse!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
