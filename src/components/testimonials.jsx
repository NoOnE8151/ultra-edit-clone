function Testimonials() {
  return(
    <div className="flex flex-col text-center my-10">
      
      <h3 className="text-black text-[23px] font-extrabold">Testimonials</h3>
      <div className="text-black my-10 font-extrabold text-xl">
      The Bugatti of text editors
      </div>
      <i className="text-black mx-5">UltraEdit is like the Bugatti of text editors in a world awash with Fords and Chevys. It does everything well, and it does a lot of everything. There are developers that cram as many features as they can into their software and end up with half-baked (and buggy) results. UltraEdit is feature-rich, and all of it is well done.</i>

      <h3 className="text-black text-xl font-extrabold mt-10">Randy T.</h3>
      <div className="text-black font-extrabold text-xl my-10">
      Best PC editing tool that I have ever used
      </div>
      <i className="text-black mx-5">If you need to view files and find out information in them, this is the product for you. You can see tabs, line endings and page breaks. You can switch from ASCII to other format, such as EBCIDIC. You can see individual bytes and even see the text out to the side. This is a perfect editor for viewing the data the way you want it.</i>

      <h3 className="text-black text-xl font-extrabold mt-10">Art Z.</h3>
      <div className="text-black text-[12px] mx-7">
      Senior Mainframe Software Developer at GT Software
      </div>

      <div className="flex justify-center">
      <button className="text-center w-[320px]  my-7 px-10 py-3 rounded-md uppercase font-extrabold bg-[#01B6D1]">
        Try UltraEdit
        </button>
      </div>

    </div>
  );
}

export default Testimonials;