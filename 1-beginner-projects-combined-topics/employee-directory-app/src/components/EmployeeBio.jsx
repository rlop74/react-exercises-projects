export const EmployeeBio = ({ img, name, bio, isHidden }) => {
  return (
    <div className={`flex flex-col items-center gap-2`}>
      <img src={img} className="h-[200px] w-[200px] rounded-full" />
      <p className="text-[20px] font-bold">{name}</p>
      <p className="w-200">{bio}</p>
    </div>
  );
};
