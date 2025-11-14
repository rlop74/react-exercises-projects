import { IndividualCard } from "./IndividualCards"

export function EmployeeCard({ employees, setActiveBio }) {

    // function viewBio() {
    //     const bio = document.getElementById("bio");
    //     if (bio.style.display === "none") {
    //         bio.style.display = "block"
    //     } else {
    //         bio.style.display = "none"
    //     }
    // }

    return (
        <div className="flex gap-10"/* "grid grid-cols-3 gap-50" */>
            {employees.map((employee) => {
                return (
                    <IndividualCard employee={employee} setActiveBio={setActiveBio} />
                )
            })}
        </div>
    )
}