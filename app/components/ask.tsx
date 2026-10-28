export default function Asking({children}:{children:React.ReactNode}){
  return(
    <div>
      <div className="flex justify-between gap-2">
        <p className="font-bold  text-[hsl(292,42%,14%)] hover:cursor-pointer hover:text-[hsl(293,76%,62%)]">{children}</p>
        <img src="./images/icon-plus.svg" alt="" />
      </div>

    </div>
  )

}