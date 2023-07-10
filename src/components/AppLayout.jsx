export default function AppLayout({ children }) {
  return (
    <div className="flex gap-x-3 p-1" id="app-layout">
      <aside className="h-[99vh] sticky top-1 w-14 hover:w-2/12 text-white bg-pink-600 rounded-xl transition-all duration-300 group py-5 px-[8px]">
        <ul className="space-y-5">
          <li>
            <a
              href="#"
              className=" flex group items-center gap-x-3 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-auto flex-shrink-0  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <span className="overflow-hidden transition-all duration-200 text-2xl font-medium">
                Home
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" flex group items-center gap-x-3 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-auto flex-shrink-0  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>

              <span className="overflow-hidden transition-all duration-200 text-2xl font-medium">
                Messages
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className=" flex group items-center gap-x-3 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-auto flex-shrink-0  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>

              <span className="overflow-hidden transition-all duration-200 text-2xl font-medium">
                Yearbook
              </span>
            </a>
          </li>
        </ul>
      </aside>
      <main className="bg-gray-50 border-dashed border w-full text-center flex flex-col justify-center">
        {children}
        <div className="h-screen w-full bg-red-100"></div>
        <div className="h-screen w-full bg-blue-100"></div>
      </main>
    </div>
  );
}
