import React from "react";

function Event() {
  return (
    <div id="event">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  <a href="/tournament">Events.</a>
                </h2>

                <p className="mt-4 text-gray-50">
                  Participate in custom events, tech showcases, and virtual meetups with prizes.
                </p>
              </div>
            </div>

            <div className="">
              <img
                src="https://res.cloudinary.com/dhkfjehat/image/upload/v1748935008/WhatsApp_Image_2025-05-09_at_10.53.51_PM_jekf4r.jpg"
                className="rounded-3xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Event;
