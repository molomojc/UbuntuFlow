import React from "react";

export function Community() {
  return (
    <div className="h-screen w-full flex antialiased text-white overflow-hidden rounded bg-gradient-to-tr from-gray-900 to-gray-800">
      <div className="flex-1 flex flex-col">
        <div className="border-b-2 border-gray-800 p-2 flex flex-row z-20">
          <div className="bg-red-600 w-3 h-3 rounded-full mr-2"></div>
          <div className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
          <div className="bg-green-500 w-3 h-3 rounded-full mr-2"></div>
        </div>
        <main className="flex-grow flex flex-row min-h-0 overflow-hidden">
          <section className="flex flex-col flex-none overflow-auto w-24 hover:w-30 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
            <div className="header p-4 flex flex-row justify-between items-center flex-none">
              <div className="w-16 h-16 relative flex flex-shrink-0" style={{ filter: "invert(100%)" }}>
                <img className="rounded-full w-full h-full object-cover" alt="ravisankarchinnam"
                     src="https://avatars3.githubusercontent.com/u/22351907?s=60"/>
              </div>
              <p className="text-md font-bold hidden md:block group-hover:block">Messenger</p>
              <a href="#" className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                  <path d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z"/>
                </svg>
              </a>
            </div>
            <div className="search-box p-4 flex-none">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <label>
                    <input className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                           type="text" defaultValue="" placeholder="Search Messenger"/>
                    <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                      <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <path fill="#bbb" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                      </svg>
                    </span>
                  </label>
                </div>
              </form>
            </div>
            
            {/* Active Users Section */}
            <div className="active-users flex flex-row p-2 overflow-auto w-0 min-w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div key={i} className="text-sm text-center mr-4">
                  <div className="p-1 border-4 border-transparent rounded-full">
                    <div className="w-16 h-16 relative flex flex-shrink-0">
                      <img className="shadow-md rounded-full w-full h-full object-cover"
                           src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i}0.jpg`}
                           alt=""
                      />
                      {i % 3 === 0 && (
                        <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                          <div className="bg-green-500 rounded-full w-3 h-3"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <p>{['Anna', 'Jeff', 'Cathy', 'Madona', 'Emma', 'Mark', 'Eva', 'Max', 'Adam'][i-1]}</p>
                </div>
              ))}
            </div>

            {/* Contacts List */}
            <div className="contacts p-2 flex-1 overflow-y-scroll">
              {[
                { name: "Angelina Jolie", message: "Ok, see you at the subway in a bit.", time: "Just now", online: false },
                { name: "Tony Stark", message: "Hey, Are you there?", time: "10min", online: true, unread: true },
                { name: "Scarlett Johansson", message: "You sent a photo.", time: "1h", online: false, active: true },
                { name: "John Snow", message: "You missed a call John.", time: "4h", online: false },
                { name: "Emma Watson", message: "You sent a video.", time: "11 Feb", online: false },
                { name: "Sunny Leone", message: "Ah, it was an awesome one night stand.", time: "1 Feb", online: true },
                { name: "Bruce Lee", message: "You are a great human being.", time: "23 Jan", online: false },
                { name: "TailwindCSS Group", message: "Adam: Hurray, Version 2 is out now!!", time: "23 Jan", online: true, group: true },
              ].map((contact, index) => (
                <div key={index} className={`flex justify-between items-center p-3 ${contact.active ? 'bg-gray-800' : 'hover:bg-gray-800'} rounded-lg relative`}>
                  <div className="w-16 h-16 relative flex flex-shrink-0">
                    {contact.group ? (
                      <>
                        <img className="shadow-md rounded-full w-10 h-10 object-cover absolute ml-6"
                             src="https://randomuser.me/api/portraits/men/22.jpg"
                             alt=""
                        />
                        <img className="shadow-md rounded-full w-10 h-10 object-cover absolute mt-6"
                             src="https://randomuser.me/api/portraits/men/55.jpg"
                             alt=""
                        />
                      </>
                    ) : (
                      <img className="shadow-md rounded-full w-full h-full object-cover"
                           src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${index+30}.jpg`}
                           alt=""
                      />
                    )}
                    {contact.online && (
                      <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                        <div className="bg-green-500 rounded-full w-3 h-3"></div>
                      </div>
                    )}
                  </div>
                  <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                    <p className={contact.unread ? "font-bold" : ""}>{contact.name}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="min-w-0">
                        <p className="truncate">{contact.message}</p>
                      </div>
                      <p className="ml-2 whitespace-no-wrap">{contact.time}</p>
                    </div>
                  </div>
                  {contact.unread && (
                    <div className="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"></div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Chat Section */}
          <section className="flex flex-col flex-auto border-l border-gray-800">
            <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
              <div className="flex">
                <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                  <img className="shadow-md rounded-full w-full h-full object-cover"
                       src="https://randomuser.me/api/portraits/women/33.jpg"
                       alt=""
                  />
                </div>
                <div className="text-sm">
                  <p className="font-bold">Scarlett Johansson</p>
                  <p>Active 1h ago</p>
                </div>
              </div>

              <div className="flex">
                <a href="#" className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2">
                  <svg viewBox="0 0 20 20" className="w-full h-full fill-current text-blue-500">
                    <path d="M11.1735916,16.8264084 C7.57463481,15.3079672 4.69203285,12.4253652 3.17359164,8.82640836 L5.29408795,6.70591205 C5.68612671,6.31387329 6,5.55641359 6,5.00922203 L6,0.990777969 C6,0.45097518 5.55237094,3.33066907e-16 5.00019251,3.33066907e-16 L1.65110039,3.33066907e-16 L1.00214643,8.96910337e-16 C0.448676237,1.13735153e-15 -1.05725384e-09,0.445916468 -7.33736e-10,1.00108627 C-7.33736e-10,1.00108627 -3.44283713e-14,1.97634814 -3.44283713e-14,3 C-3.44283713e-14,12.3888407 7.61115925,20 17,20 C18.0236519,20 18.9989137,20 18.9989137,20 C19.5517984,20 20,19.5565264 20,18.9978536 L20,18.3488996 L20,14.9998075 C20,14.4476291 19.5490248,14 19.009222,14 L14.990778,14 C14.4435864,14 13.6861267,14.3138733 13.2940879,14.7059121 L11.1735916,16.8264084 Z"/>
                  </svg>
                </a>
                <a href="#" className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
                  <svg viewBox="0 0 20 20" className="w-full h-full fill-current text-blue-500">
                    <path d="M0,3.99406028 C0,2.8927712 0.894513756,2 1.99406028,2 L14.0059397,2 C15.1072288,2 16,2.88772964 16,3.99406028 L16,16.0059397 C16,17.1072288 15.1054862,18 14.0059397,18 L1.99406028,18 C0.892771196,18 0,17.1125667 0,16.0059397 L0,3.99406028 Z M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z"/>
                  </svg>
                </a>
                <a href="#" className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
                  <svg viewBox="0 0 20 20" className="w-full h-full fill-current text-blue-500">
                    <path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="chat-body p-4 flex-1 overflow-y-scroll">
              {[
                { sender: 'ai', messages: ["Hey! How are you?", "Shall we go for Hiking this weekend?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida."], time: "FRI 3:04 PM" },
                { sender: 'user', messages: ["Hey! How are you?", "Shall we go for Hiking this weekend?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida."], time: "SAT 2:10 PM" },
                { sender: 'ai', messages: ["Hey! How are you?", "Shall we go for Hiking this weekend?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida."], time: "12:40 PM" },
                { sender: 'user', messages: ["Hey! How are you?", "Shall we go for Hiking this weekend?", { type: 'image', src: "https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida."], time: "12:40 PM" },
              ].map((chat, chatIndex) => (
                <React.Fragment key={chatIndex}>
                  <div className={`flex flex-row justify-${chat.sender === 'user' ? 'end' : 'start'}`}>
                    {chat.sender === 'ai' && (
                      <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                        <img className="shadow-md rounded-full w-full h-full object-cover"
                             src="https://randomuser.me/api/portraits/women/33.jpg"
                             alt=""
                        />
                      </div>
                    )}
                    <div className={`messages text-sm text-${chat.sender === 'user' ? 'white' : 'gray-700'} grid grid-flow-row gap-2`}>
                      {chat.messages.map((message, msgIndex) => (
                        <div key={msgIndex} className={`flex items-center ${chat.sender === 'user' ? 'flex-row-reverse' : ''} group`}>
                          {typeof message === 'string' ? (
                            <p className={`px-6 py-3 rounded-${msgIndex === 0 ? 't' : msgIndex === chat.messages.length - 1 ? 'b' : ''}-full rounded-${chat.sender === 'user' ? 'l' : 'r'}-full ${chat.sender === 'user' ? 'bg-blue-700' : 'bg-gray-800 text-gray-200'} max-w-xs lg:max-w-md`}>
                              {message}
                            </p>
                          ) : (
                            <a className="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md" href="#">
                              <img className="absolute shadow-md w-full h-full rounded-l-lg object-cover" src={message.src} alt="hiking"/>
                            </a>
                          )}
                          <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                              <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="p-4 text-center text-sm text-gray-500">{chat.time}</p>
                </React.Fragment>
              ))}
            </div>

            {/* Chat Input */}
            <div className="chat-footer flex-none">
              <div className="flex flex-row items-center p-4">
                <button type="button" className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                  <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                    <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z"/>
                  </svg>
                </button>
                <button type="button" className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                  <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                    <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
                  </svg>
                </button>
                <button type="button" className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                  <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                    <path d="M0,6.00585866 C0,4.89805351 0.893899798,4 2.0048815,4 L5,4 L7,2 L13,2 L15,4 L17.9951185,4 C19.102384,4 20,4.89706013 20,6.00585866 L20,15.9941413 C20,17.1019465 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1029399 0,15.9941413 L0,6.00585866 Z M10,16 C12.7614237,16 15,13.7614237 15,11 C15,8.23857625 12.7614237,6 10,6 C7.23857625,6 5,8.23857625 5,11 C5,13.7614237 7.23857625,16 10,16 Z M10,14 C11.6568542,14 13,12.6568542 13,11 C13,9.34314575 11.6568542,8 10,8 C8.34314575,8 7,9.34314575 7,11 C7,12.6568542 8.34314575,14 10,14 Z"/>
                  </svg>
                </button>
                <button type="button" className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                  <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                    <path d="M9,18 L9,16.9379599 C5.05368842,16.4447356 2,13.0713165 2,9 L4,9 L4,9.00181488 C4,12.3172241 6.6862915,15 10,15 C13.3069658,15 16,12.314521 16,9.00181488 L16,9 L18,9 C18,13.0790094 14.9395595,16.4450043 11,16.9378859 L11,18 L14,18 L14,20 L6,20 L6,18 L9,18 L9,18 Z M6,4.00650452 C6,1.79377317 7.79535615,0 10,0 C12.209139,0 14,1.79394555 14,4.00650452 L14,8.99349548 C14,11.2062268 12.2046438,13 10,13 C7.790861,13 6,11.2060545 6,8.99349548 L6,4.00650452 L6,4.00650452 Z" />
                  </svg>
                </button>
                <div className="relative flex-grow">
                  <label>
                    <input className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                           type="text" defaultValue="" placeholder="Aa"/>
                    <button type="button" className="absolute top-0 right-0 mt-2 mr-3 flex flex-shrink-0 focus:outline-none block text-blue-600 hover:text-blue-700 w-6 h-6">
                      <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z" />
                      </svg>
                    </button>
                  </label>
                </div>
                <button type="button" className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                  <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                    <path d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z"/>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Community;