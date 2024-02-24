function Main() {
  return (
    <div className="flex flex-col bg-dark">
      <div className="flex flex-col items-center">
        <img
          className="py-[40px] px-[10px]"
          src="../../public/UE-Logo-2.png"
          alt="Logo"
          width="300"
        />
        <p className="px-[30px] text-[20px] text-center">
          A powerful and highly configurable text and hex editor with unrivaled
          support for large files. <a href="#">Learn more.</a>
        </p>
      </div>

      <div className="flex flex-col items-center w-full py-10">
        <button className="bg-[#01B6D1] p-3 leading-tight w-[250px] rounded-md">
          <span className="uppercase font-extrabold">Download Now</span>
          <br />
          <span className="text-[13px] font-light">30 Day Free Trial</span>
        </button>
        <button className="capitalize border-4 mt-3 w-[250px] p-5 rounded-md">
          buy now
        </button>
        <a className="mt-7 underline" href="#">
          Read the latest updates
        </a>
      </div>

      <div className="flex flex-col items-center my-5">
        <img src="../../public/UE-box.png" alt="box" width="300" />
        <p className="px-[30px] text-[20px] text-center font-extrabold my-10">
          The multiple-award winning editor year after year
        </p>
      </div>

      <div className="flex flex-col items-center gap-11">
        <img src="../../public/UE-G2-Badge-m.jpg" alt="5 stars" width="320" />
        <img src="../../public/Stars.webp" alt="stars" width="150" />
      </div>

      <div className="flex flex-col items-center my-10">
        <p className="font-extrabold">4.7 out of 5 stars</p>
        <span className="font-light">from 1000+ reviews</span>
      </div>

      <div className="flex flex-col items-center mb-11">
        <p className="text-center font-extrabold mx-5">
          The highest rated, most recommended editor.
        </p>
        <a className="text-center text-[cyan] font-extrabold" href="#">See user reviews.</a>
      </div>
      
    </div>
  );
}

export default Main;
