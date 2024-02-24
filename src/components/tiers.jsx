function Tiers() {
  return(
    <div className="flex flex-col items-center">
      
      <div className="flex flex-col items-center">
        <h2 className="text-black text-[25px]"><span className="font-extrabold text-black">Ultra</span>Edit All Access</h2>
        <p className="text-black mx-16 my-7 text-center">
        Get UE All Access for maximum utility. Includes five of our finest tools in one package.
        </p>
      </div>

      <div className="flex flex-col items-center">
      <img src="../../public/UE-box.png" alt="UE box tier 1" width="150" />
        <p className="text-black text-center m-7">
          Text editor with unsurpassed performance and editing capabilities.
        </p>
        
        <button className="bg-[#01B6D1] p-3 w-[200px] text-[18px] uppercase font-bold rounded-md">
          Download
        </button>
      </div>

            <div className="flex flex-col items-center my-5">
      <img src="../../public/UES-box.png" alt="UE box tier 2" width="150" />
        <p className="text-black text-center m-7">
          The closest to an UltraEdit IDE. Comes with Git integration, debugging features, and workspace management
        </p>
        
        <button className="bg-[#01B6D1] p-3 w-[200px] text-[18px] uppercase font-bold rounded-md">
          Download
        </button>
      </div>

      <div className="flex flex-col items-center my-5">
      <img src="../../public/UF-box.png" alt="UE box tier 3" width="150" />
        <p className="text-black text-center m-7">
          File and folder search utility. Works on FTP servers.
        </p>
        
        <button className="bg-[#01B6D1] p-3 w-[200px] text-[18px] uppercase font-bold rounded-md">
          Download
        </button>
      </div>

      <div className="flex flex-col items-center my-5">
      <img src="../../public/UC-box.png" alt="UE box tier 4" width="150" />
        <p className="text-black text-center m-7">
          Diff tool that integrates with UE. Works for .doc, .pdf, .xls, .zip, and .rar files.
        </p>
        
        <button className="bg-[#01B6D1] p-3 w-[200px] text-[18px] uppercase font-bold rounded-md">
          Download
        </button>
      </div>

      <div className="flex flex-col items-center my-5">
      <img src="../../public/UFTP-box.png" alt="UE box tier 2" width="150" />
        <p className="text-black text-center m-7">
          Secure FTP client accessible straight from UE and UC. Works for local and remote servers.
          
        </p>
        
        <button className="bg-[#01B6D1] p-3 w-[200px] text-[18px] uppercase font-bold rounded-md">
          Download
        </button>
      </div>
      
    </div>
  );
}

export default Tiers;