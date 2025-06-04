import React from "react";

function Community() {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse gap-4 md:grid md:grid-cols-2 md:items-center md:gap-8">
          <div className="">
            <img
              src="https://res.cloudinary.com/dhkfjehat/image/upload/v1748934896/esports-tournament_zcnyy8.jpg"
              className="rounded-3xl"
              alt=""
            />
          </div>

          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                <a href="/tournament">Commuity.</a>
              </h2>

              <p className="mt-4 text-gray-50">
                Connect with like-minded gamers, make friends, and team up for
                legendary victories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
