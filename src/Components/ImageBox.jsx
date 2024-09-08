import React from "react";

function ImageBox() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-24">
          <div className="flex flex-wrap w-full mb-20">
            
            <div className="flex flex-wrap mx-auto ml-32  ">
              <div className="xl:w-1/2 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className=" h-72 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImageBox;
