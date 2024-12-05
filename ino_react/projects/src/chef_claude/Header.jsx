import logo from "./images/logo.jpg"
const Header = () => {
  return (
    <div className="flex justify-center mt-3 items-center gap-3 shadow-md bg-white">
        <div className="text-red-700">
          <img src={logo} 
               alt="Claude Chef logo"
               className="h-8 w-6 " 
                  />
        </div>
        <div className=" font-semibold">
            <h1>Chef Claude</h1>
        </div>
    </div>
  )
}

export default Header