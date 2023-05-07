import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { motion } from "framer-motion"
import { useTheme } from 'next-themes'

const Layouts = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme

  if (!mounted) return null;

  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }} className="overflow-y-scroll">
      <nav className="flex items-center justify-center overflow-x-auto text-md">
        <Link href="/" className="p-2">
          <FaHome className="text-2xl font-bold dark:text-white hover:text-blue-600" />
        </Link>
        <Link href="/parcours" className="p-2 hover:text-blue-600">
          Parcours
        </Link>
        <Link href="/resume" className="p-2 hover:text-blue-600">
          Compétences
        </Link>
        <Link href="/projects" className="p-2 hover:text-blue-600">
          Projets
        </Link>
        <Link href="/contact" className="p-2 hover:text-blue-600">
          Contact
        </Link>
        <div className="p-2">
          <div>
            <div className="flex justify-center">
              {currentTheme === 'dark' ? (
                <button
                  className="w-12 p-3 border-2 border-white rounded-md bg-black-700 hover:bg-black"
                  onClick={() => setTheme('light')}
                >
                  {' '}
                  <img src="/images/sun.svg" alt="logo" height={30} width={30}></img>
                </button>
              ) : (
                <button
                  className="w-12 p-3 bg-white border-2 rounded-md border-sky-100 hover:bg-sky-500"
                  onClick={() => setTheme('dark')}
                >
                  <img src="/images/moon.svg" alt="logo" height={30} width={30}></img>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </motion.div> 
  )
}

export default Layouts