import Image from "next/image"
import Asking from "./components/ask"

export default function Page(){
  return(
    <div className="bg-[hsl(275,100%,97%)] relative h-screen flex flex-col justify-center items-center ">
      <div className="absolute inset-0 z-10">
        <Image width={600} height={500} src={"/images/background-pattern-mobile.svg"} alt="sh" className="h-auto w-full md:hidden"/>
        <Image src={"/images/background-pattern-desktop.svg" } width={400} height={400} alt="bg-pic"
         className="hidden h-auto w-full md:block"/>
      </div>
      <div className="absolute z-20 bg-white shadow-2xl rounded-2xl p-8 m-4 space-y-4 md:w-1/3 md:space-y-10">
        <div className="flex gap-2">
          <img src="/images/icon-star.svg" alt="" />
          <h1 className="text-[hsl(292,42%,14%)] font-extrabold text-4xl gap-10">FAQS</h1>
        </div>
        <div className="flex justify-between items-center gap-10 ">
          <p className="text-[hsl(292,42%,14%)] font-bold ">What is Frontend Mentor, and how will it help me?</p>
          <img src="/images/icon-minus.svg" alt="" />
        </div>
        <p className="text-[hsl(292,42%,14%)] opacity-55 text-sm">Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript.
        It's suitable for all levels and ideal for portfolio building.</p>
        <div className=" space-y-6 ">
          <hr />
        <Asking children={"Is Frontend Mentor free?"}/>
        <hr />
        <Asking children={"Can I use Frontend Mentor projects in my portfolio?"}/>
        <hr />
        <Asking children={"How can I get help if I'm stuck on a challenge?"}/>
        <hr />
        </div>


      </div>

    </div>
  )
}