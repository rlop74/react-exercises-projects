import { useState } from "react";

export const Navbar = ({ setEmployeeFilter, employeeFilter }) => {

    const menu = [
        "All",
        "Engineering",
        "Sales & Marketing",
        "Leadership",
        "Operations",
    ];
    return (
        <div className="flex gap-10">
            {menu.map((item) => (
                <button
                    value={item}
                    className={`list-none ${item === employeeFilter ? "bg-orange-400/75" : ""}`}
                    onClick={(event) => setEmployeeFilter(event.target.value)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
};
