import { useState } from "react";
import { EmployeeBio } from './EmployeeBio'

export function IndividualCard( { employee, setActiveBio }) {

    return (
        <>
        <div className="">
            <img src={employee.img} className={`h-[100px] w-[100px] rounded-full`}/>
            <p key={employee.name} className="text-lg font-bold">{employee.name}</p>
            <p key={employee.title} className="mb-2">{employee.jobtitle}</p>
            {/* <button onClick={() => setToggleBio(toggleBio === "hidden" ? "block" : "hidden")} className="text-white">View Bio</button> */}
            <button onClick={() => setActiveBio(employee)} className="">View Bio</button>
        </div>
        </>
    )
}