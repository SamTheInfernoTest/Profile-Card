import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [profilePic, setProfilePic] = useState('')


  useEffect(() => {
    axios.get('https://randomuser.me/api/?page=1&results=1')
      .then((res) => res.data.results[0])
      .then((data) => {
        setFirstName(data.name.first)
        setLastName(data.name.last)
        setGender(data.gender)
        setPhoneNo(data.phone)
        setProfilePic(data.picture.large)
      })

    setInterval(() => {
      axios.get('https://randomuser.me/api/?page=1&results=1')
        .then((res) => res.data.results[0])
        .then((data) => {
          setFirstName(data.name.first)
          setLastName(data.name.last)
          setGender(data.gender)
          setPhoneNo(data.phone)
          setProfilePic(data.picture.large)
        })
    }, 3000)
    
  },[])

  return (
    <div className='w-full min-h-screen place-content-center bg-gradient-to-br dark:from-slate-950 dark:via-slate-800 dark:to-slate-700 dark:text-white text-slate-800 from-blue-400 via-blue-200 to-blue-50'>
      <div className='flex flex-row max-w-[400px] h-[155px] mx-auto p-3 bg-gradient-to-r dark:from-indigo-600 from-indigo-300 dark:via-purple-600 via-purple-300 dark:to-pink-600 to-pink-300 rounded-2xl justify-between text-lg font-semibold border-2 dark:border-sky-100 border-sky-500 shadow-slate-700 dark:shadow-slate-600 hover:shadow-2xl shadow-xl transition-all ease-out duration-700 hover:scale-105'
      title='Click to Change User'
      >
        <div>
          <img src={profilePic} alt={firstName} 
          className='rounded-2xl ring-2 ring-sky-500 dark:ring-sky-100'
          />
        </div>
        <div className='text-right py-4 transition-all duration-0'>
          <h2 className='font-bold text-2xl'>{firstName} {lastName}</h2>
          <h2 className='text-sm'>{gender.toUpperCase()}</h2>
          <h2 className='text-sm'>{phoneNo}</h2>
        </div>
      </div>
      <div className='flex justify-center mt-36'>
        <button
        onClick={toggleTheme}
        className='font-semibold py-2 px-4 rounded dark:bg-slate-700 bg-blue-300 dark:only:hover:bg-slate-600 hover:bg-blue-400 animate-bounce'
        >Toggle Me</button>
      </div>
    </div>
  )
}

export default App
