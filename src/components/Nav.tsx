const Nav = () => {
  return (
    <nav>
      <div className="flex gap-6 p-7 lg:py-[1.5vw] lg:pl-[3vw] xl:text-lg">
        <button className="text-[#FF764D]">About</button>
        <button>Jobs</button>
        <button>Apprenticeships</button>
      </div>
    </nav>
  );
};

export default Nav;
