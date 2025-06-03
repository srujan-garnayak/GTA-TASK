import React from "react";

function Tournament() {
  return (
    <div id="about" >
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  <a href="/tournament">Tournaments.</a>
                </h2>

                <p className="mt-4 text-gray-50">
                  Join epic gaming tournaments with top players and show your skill in a competitive arena.
                </p>
              </div>
            </div>

            <div className="">
              <img
                src="https://res.cloudinary.com/dhkfjehat/image/upload/v1748934724/medium-shot-victorious-gamers-winning_1_g2ossj.jpg"
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

export default Tournament;
