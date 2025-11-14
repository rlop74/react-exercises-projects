export const Navbar = () => {
    const menu = ["Engineering", "Sales & Marketing", "Leadership", "Operations"]
    return (
        <div className="flex gap-10">
            {menu.map((item) => <button className="list-none navbar">{item}</button>)}
        </div>
    )
}