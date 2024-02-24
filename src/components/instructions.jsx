function Instructions() {
  return (
    <div className="flex flex-col items-center pt-16 text-black">

      <div className="flex flex-col items-center">
        <img src="../../public/UE.png" alt="logo" width="69" />
        <h6 className="font-extrabold text-black my-3">
        Unmatched performance on all file sizes.
        </h6>
        <p className="text-black text-center mx-7">
        Leverage UE’s powerful features to deal with the largest of projects.
        </p>
      </div>

      <div className="flex flex-col items-center my-10">
        <img src="../../public/systems.png" alt="logo" width="170" />
        <h6 className="font-extrabold text-black my-3">
        One license. Three platforms.
        </h6>
        <p className="text-black text-center mx-7">
        Install on Windows, Mac, and Linux with one license.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <img src="../../public/licensing.png" alt="logo" width="150" />
        <h6 className="font-extrabold text-black my-3">
        3 in 1 licensing.
        </h6>
        <p className="text-black text-center mx-7">
        Your personal license is good for up to 3 machines on any combination of platforms.
        </p>
      </div>

      <div className="flex flex-col items-center my-10">
        <img src="../../public/multi-purpose editor.png" alt="logo" width="100" />
        <h6 className="font-extrabold text-black my-3">
        Multipurpose editor.
        </h6>
        <p className="text-black text-center mx-7">
        UltraEdit includes a text editor, code editor, HTML editor, XML/JSON viewer, as well as a hex editor.  
        </p>
      </div>

      <div className="flex flex-col items-center my-10">
      <img src="../../public/shield.png" alt="Shield" width="200" />
        <h2 className="text-black text-center text-[23px] font-extrabold mx-10 my-7">
        The security fortified editor for professionals</h2>
        <p className="text-center text-black mx-5">
        Meet the text, code, and hex editor that prioritizes software and data security, giving you the confidence to open and edit any text file. UltraEdit is in a class of its own. Secured with industry-grade security tools. Comes with dedicated support
        </p>

        <button className="text-center w-[200px] bg-black my-7 px-10 py-3 rounded-md capitalize">
        learn more
        </button>
      </div>
      
    </div>
  );
}

export default Instructions;