import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="flex justify-center min-h-screen py-12 px-4 bg-gray-50">
      <div className="w-[600px]">
        <div className="flex items-center gap-4 mb-12">
          <img
            src="/profile.jpg"
            alt="Jack Irvine"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-medium tracking-tight">Jack Irvine</h2>
            <p className="text-lg text-gray-600">
              Software Engineer based in Edinburgh, Scotland.
            </p>
            <a
              href="https://www.linkedin.com/in/irvinejack/"
              className="text-blue-600 hover:text-blue-700 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-medium mb-6">Projects</h2>

            <div className="space-y-6">
              <article className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-indigo-500 flex-shrink-0 overflow-hidden">
                    <img
                      src="/blueplan-icon.png"
                      alt="Blueplan app icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Blueplan</h3>
                    <p className="text-gray-600 mb-4">
                      Accessible journey planner and checklist tool for young
                      people with SEN to increase independent mobility.
                    </p>
                    <a
                      href="https://apps.apple.com/gb/app/blueplan-safer-travel/id1645878718"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      iOS
                    </a>
                  </div>
                </div>
              </article>
              <article className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-blue-500 flex-shrink-0 overflow-hidden">
                    <img
                      src="/shetland-dict-icon.png"
                      alt="Shetland dictionary app icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Shetland Dictionary
                    </h3>
                    <p className="text-gray-600 mb-4">
                      A digital dictionary for the Shetland dialect.
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://apps.apple.com/gb/app/shetland-dictionary/id1601533308"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        iOS
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=dev.jackirvine.shetland_dictionary_project&hl=en_GB"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Android
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              <article className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-blue-500 flex-shrink-0 overflow-hidden">
                    <img
                      src="/london-safety-icon.png"
                      alt="London safety website icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      London Safety Map
                    </h3>
                    <p className="text-gray-600 mb-4">
                      An interactive map showing the relative safety of
                      different areas of London, based on statistics from
                      Met/City of London Police data. The tool uses <a
                        href="https://deck.gl"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      > GPU acceleration</a> to render 3.4M data points
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://london-safety-map.netlify.app"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        href="https://github.com/jackrvn/Interactive-London-Safety-Map"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home