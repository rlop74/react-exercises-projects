import { useState } from "react";
import { EmployeeBio } from './EmployeeBio'

export function IndividualCard( { employee, setActiveBio }) {
    const [ toggleBio, setToggleBio ] = useState("hidden");
    const [ imgSize, setImgSize ] = useState("100px");

    // const handleClick = () => {

    // }

    return (
        <>
        <div className="">
            <img src={employee.img} className={`h-[${imgSize}] w-[${imgSize}] rounded-full`}/>
            <p key={employee.name} className="text-lg font-bold">{employee.name}</p>
            <p key={employee.title} className="mb-2">{employee.jobtitle}</p>
            {/* <button onClick={() => setToggleBio(toggleBio === "hidden" ? "block" : "hidden")} className="text-white">View Bio</button> */}
            <button onClick={() => setActiveBio(employee)} className="">View Bio</button>
            <p key={employee.name + " bio"} className={`${toggleBio} w-auto`}>{employee.bio}</p>
        </div>

        {/* put Button component here or the App */}
        {/* <EmployeeBio employee={employee} style={toggleBio}/> */}
        </>
    )
}