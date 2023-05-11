export const InputText = ({latestWord, typedLetters,result}:{latestWord:string[], typedLetters : string[],result:string}) => {
    return <>
        <div className="flex gap-4">
            {
                latestWord.map((el,index) =>
                    <div key = {index}
                        className= {`flex justify-center items-center border-b-4 w-20 text-[0px]
                        ${typedLetters.includes(el) && "!text-5xl" } 
                        ${!typedLetters.includes(el) && result === "LOST" && "!text-5xl text-[red]"}
                        border-black aspect-square uppercase`}
                    >{el}</div>)
            }
        </div>
    </>
}