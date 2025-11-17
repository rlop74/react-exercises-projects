import { IndividualCard } from "./IndividualCards";

export function EmployeeCards({ employees, setActiveBio, employeeFilter }) {
    // function viewBio() {
    //     const bio = document.getElementById("bio");
    //     if (bio.style.display === "none") {
    //         bio.style.display = "block"
    //     } else {
    //         bio.style.display = "none"
    //     }
    // }

    return (
        <div className="flex gap-10" /* "grid grid-cols-3 gap-50" */>
            {employees
                .filter((employee) => employeeFilter === "All" ? employee : employeeFilter === employee.department)
                .map((employee) => {
                    return (
                        <IndividualCard
                            employee={employee}
                            setActiveBio={setActiveBio}
                        />
                    );
                })}
        </div>
    );
}
