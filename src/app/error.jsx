"use client"

export default function ErrorPage({error,reset}){
    return(
      <div className="bg-black w-full h-[100vh] pt-[200px] pl-[23%] ">
        <div className="bg-black text-white border-2 rounded-2xl w-[200px] h-[200px] items-center justify-center ml-[200px] pl-[20px] w-[300px] h-[200px] pt-[50px]">
            <h1 className="ml-[20px]">Oops! something went wrong</h1>
            <h1 className="ml-[30px]">please enter a correct city</h1>
            <button
        onClick={() => reset()}
        className="mt-4 bg-blue-600 px-4 py-2 rounded ml-[70px]"
      >
        Try Again
      </button>
        </div>
        </div>
        
    )
}