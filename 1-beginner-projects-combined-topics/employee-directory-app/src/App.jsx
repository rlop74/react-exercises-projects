import { useState, useEffect } from 'react'
// import './App.css';

import { EmployeeCard } from './components/EmployeeCard'
import { Navbar } from './components/Navbar'
import { EmployeeBio } from './components/EmployeeBio'

function App() {
  const [ search, setSearch ] = useState("");
  const [ searchResults, setSearchResults ] = useState([]);
  const [ activeBio, setActiveBio ] = useState(null);

  const employees = [
    {
      id: 1,
      name: "Steve Bobs",
      jobtitle: "Software Engineer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://www.randomlists.com/images/people/meryl_streep.jpg",
      department: "Engineering"
    },
    {
      id: 2,
      name: "Mary Jane",
      jobtitle: "Front End Developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://www.randomlists.com/images/people/emeril_lagasse.jpg",
      department: "Engineering",
    },
    {
      id: 3,
      name: "John Doe",
      jobtitle: "Back End Developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://www.randomlists.com/images/people/jay_z.jpg",
      department: "Engineering",
    },
    {
      id: 4,
      name: "Russel Lopez",
      jobtitle: "Full Stack Developer",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://media.licdn.com/dms/image/v2/D4E03AQGy1OWBIfOy2A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691031045223?e=1764201600&v=beta&t=O2Nwj1howzF6UzghUIPliAHVF8_z0qfA3KVrEAACU4s",
      department: "Engineering",
    },
    {
      id: 5,
      name: "Susan Castro",
      jobtitle: "Marketing Associate",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://www.randomlists.com/images/people/emma_watson.jpg",
      department: "Sales & Marketing",
    },
    {
      id: 6,
      name: "Kay Apple",
      jobtitle: "Sales Manager",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://www.randomlists.com/images/people/rachael_ray.jpg",
      department: "Sales & Marketing",
    },
    {
      id: 7,
      name: "Leanne Graham",
      jobtitle: "CEO",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://www.randomlists.com/images/people/stephenie_meyer.jpg",
      department: "Leadership",
    },
    {
      id: 8,
      name: "Ervin Howell",
      jobtitle: "Executive Assistant",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://www.randomlists.com/images/people/eddie_murphy.jpg",
      department: "Leadership",
    },
    {
      id: 9,
      name: "Clementine Bauch",
      jobtitle: "System Administrator",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://www.randomlists.com/images/people/mahatma_gandhi.jpg",
      department: "Operations",
    },
    {
      id: 10,
      name: "Patricia Lebsack",
      jobtitle: "IT Manager",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://www.randomlists.com/images/people/catherine_zeta_jones.jpg",
      department: "Operations",
    }
  ]



  const searchEmployees = () => {
    const results = employees.filter((employee) => employee.name.toLowerCase().includes(search))
    setSearchResults(results);
  }

  useEffect(() => {
    searchEmployees();
  }, [search])

  return (
    <>
      <div className="bg-white h-screen w-screen p-10 rounded-xl gap-10 flex flex-col items-center text-black">
        <h1 className="text-orange-500">Meet the <strong>team.</strong></h1>
        <input 
          type="text" 
          value={search} 
          onChange={(event) => {
            setSearch(event.target.value)
            searchEmployees
          }
        }
          placeholder="Enter employee name" 
          className="bg-white text-black font-bold border-2 border-black rounded-xl p-2" 
        />
        <Navbar />
        <EmployeeCard employees={searchResults} setActiveBio={setActiveBio} />
        <EmployeeBio img={activeBio?.img} name={activeBio?.name} bio={activeBio?.bio} />
      </div>
    </>
  )
}

export default App
