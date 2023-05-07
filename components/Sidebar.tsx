import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineFilePdf } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

import { FaEnvelopeSquare, FaMobile, FaPaperPlane } from 'react-icons/fa'
import React, { useState } from 'react'

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalMaps, setShowModalMaps] = useState(false);

  return (
    <>
      <img src="/images/lotfi.jpeg" className="clearfix mx-auto border rounded-full" height={128} width={128}></img>
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span className="text-blue-600">Benahmed</span> <span className="text-sky-500">Lotfi</span>
      </h3>
      <p className="px-2 py-1 my-3 border rounded-full border-sky-500 hover:bg-sky-200 dark:bg-dark-200 dark:bg-black-500" onClick={() => setShowModal(true)}>Développeur web</p>
      <a className="flex items-center justify-center px-2 py-1 my-2 border rounded-full cursor-pointer border-sky-500 hover:bg-sky-200 dark:bg-dark-200 dark:bg-black-500" href="/images/CVLotfi.pdf" download="CV.pdf"><AiOutlineFilePdf className="w-6 h-6 text-blue-600" /> Télécharger le CV</a>

      <div className="py-4 my-5 bg-sky-200 dark:bg-dark-200 dark:bg-black-500" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation onClick={() => setShowModalMaps(true)} className="text-blue-600 animate-pulse" />
          <span className="drop-shadow-lg hover:text-blue-600" onClick={() => setShowModalMaps(true)}>40 Androme, 1200</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaEnvelopeSquare className="text-blue-600" />
          <p className="my-2"> lotfi.bena@hotmail.com</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FaMobile className="text-blue-600" />
          <p className="my-2">+324 85 85 23 45</p>
        </div>
      </div>

      <div className="flex justify-around w-9/12 m-auto my-5 text-sky-500 md:w-full">
        <a href="https://www.facebook.com/bena.bena.184881" target="_blank" rel="noopener noreferrer">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/lotfibena1" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/Cherif436" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/lotfi-ben-ahmed-4289a2147" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r dark:bg-dark-200 dark:bg-black-500 focus:outline-none" onClick={() => window.open('mailto:lotfi.bena@hotmail.com')}>Envoyer message</button>
      {' '}{' '}
      {showModal ? (
        <>
          <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
          >
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 bg-white border-b border-gray-200 border-solid rounded-t dark:bg-dark-200 dark:bg-black-500">
                  <h3 className="text-3xl font-semibold">
                    Développeur web junior
                  </h3>
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-blue-600 border-0 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="block w-6 h-6 text-dark-500 dark:text-white">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex flex-auto p-6 bg-white justify-evenly dark:bg-dark-200 dark:bg-black-500">
                  <div className="col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4">
                    <img src="/images/lotfi.jpeg" className="mx-auto border" height={128} width={128}></img>
                  </div>
                  <div className="col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4">
                    <p><strong>Nom:</strong> Benahmed</p>
                    <p><strong>Prénom:</strong> Lotfi</p>
                    <p><strong>Email:</strong> lotfi.bena@hotmail.com</p>
                    <p><strong>Téléphone:</strong> +324 85 85 23 45</p>
                    <div className="flex justify-center text-sky-500">
                      <a href="https://github.com/Cherif436" target="_blank" rel="noopener noreferrer">
                        <AiFillGithub className="w-8 h-8 cursor-pointer" />
                      </a>
                      <a href="https://www.linkedin.com/in/lotfi-ben-ahmed-4289a2147" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 bg-white border-t border-blue-200 border-solid rounded-b dark:bg-dark-200 dark:bg-black-500">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear outline-none text-dark-500 background-transparent focus:outline-none dark:text-white"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                  <button
                    className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-gradient-to-r bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    type="button"
                    onClick={() => window.open('mailto:lotfi.bena@hotmail.com')}
                  >
                    Envoyer message
                  </button>
                  <a className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-gradient-to-r bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none" href="/images/CV.pdf" download="CVLotfi.pdf"> Télécharger le CV</a>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
      {showModalMaps ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-gradient-to-t from-sky-200 to-transparent">
            <div className="relative w-auto mx-auto my-6 max-w-7xl">
              {/*content*/}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg outline-none focus:outline-none">
                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-blue-600 border-0 outline-none focus:outline-none"
                  onClick={() => setShowModalMaps(false)}
                >
                  <span className="block w-6 h-6 text-dark-500">
                    ×
                    </span>
                </button>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2518.8119054762246!2d4.4225091!3d50.8531673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3dca51abd5d2d%3A0x4b2d4d85ee9b033e!2sAndromedalaan%2040%2C%201200%20Sint-Lambrechts-Woluwe!5e0!3m2!1snl!2sbe!4v1669473874528!5m2!1snl!2sbe" width="350" height="350" style={{ border: 0 }} loading="lazy"></iframe>

              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default Sidebar
