import logo from "./images/logo.png"

const Header = () => {
  return (
     <div className=" flex justify-center items-center bg-headerbg">
      <div className=" p-2">
        <img src={logo}
         alt="travel icon" 
         className="w-8 rounded-full"/>
      </div>
      <div className="items-center p-2 font-sans text-lg">
        My Travel Journal
      </div>
     </div>
  )
}

export default Header