const Navbar = () => {
const navList =["Home","Skill","Project","About me", "Content","resume" ]


  return (
    <nav className="border-2 py-2 px-6 mx-auto w-auto rounded-full mb-5 ">
      <ul className="flex gap-4 justify-around ">
        { navList.map((item,index)=>(
          <li className="text-white hover:text-blue-800" key ={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;