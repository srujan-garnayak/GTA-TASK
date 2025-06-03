import React from "react";

function FAQ() {
  return (
    <div id="faqs">
      <div className="space-y-4">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <h2 className="text-lg font-medium">
              What is Game to Aim (GTA)?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
            Game to Aim (GTA) is the official game development club of NIT Rourkela. We provide a collaborative platform for students to work together, discover their interests in game development, and create innovative games using cutting-edge technologies.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <h2 className="text-lg font-medium">
              Who can join the GTA club?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
            Any student of NIT Rourkela with an interest in game development, regardless of their branch or year of study, can join our club. We welcome beginners as well as experienced developers.
          </p>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
            <h2 className="text-lg font-medium">
              Do I need prior programming experience to join?
            </h2>

            <svg
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="px-4 pt-4 text-gray-900 dark:text-white">
            No prior programming experience is required! We provide training, tools, and guidance to help members learn and develop their skills from scratch. Our experienced members and mentors will guide you through your learning journey.
          </p>
        </details>
      </div>
    </div>
  );
}

export default FAQ;
