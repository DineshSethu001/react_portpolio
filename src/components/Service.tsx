

export default function Service() {
  return (
    <section className="bg-red-100 rounded-2xl p-5 mb-10">
        <div className="container mx-auto">
          <div className="py-16 lg:py-28">
            <h2 className="text-center text-3xl lg:text-5xl font-bold">Our Services</h2>
            <p className="lg:w-1/2 text-center mx-auto mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, nobis
              deserunt dolor, corporis deleniti ab necessitatibus repellendus
              tempora ad dolorem explicabo praesentium iste et assumenda eligendi
              ea pariatur, reiciendis repellat!
            </p>
          </div>
          <div className="flex flex-wrap pb-16 justify-center">
            <div className="w-full lg:w-1/2 xl:w-1/3 py-5 lg:p-5">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mb-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-700">Design</h3>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  ipsum similique reiciendis, delectus blanditiis amet quisquam
                  possimus aspernatur. Temporibus accusamus voluptas numquam
                  doloribus quae cupiditate? Perspiciatis numquam totam adipisci
                  autem?
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 py-5 lg:p-5">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mb-12 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-700">Development</h3>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  ipsum similique reiciendis, delectus blanditiis amet quisquam
                  possimus aspernatur. Temporibus accusamus voluptas numquam
                  doloribus quae cupiditate? Perspiciatis numquam totam adipisci
                  autem?
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/3 py-5 lg:p-5">
              <div className="bg-white p-10 rounded-2xl shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mb-12 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-700">
                  Digital Marketing
                </h3>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                  ipsum similique reiciendis, delectus blanditiis amet quisquam
                  possimus aspernatur. Temporibus accusamus voluptas numquam
                  doloribus quae cupiditate? Perspiciatis numquam totam adipisci
                  autem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
