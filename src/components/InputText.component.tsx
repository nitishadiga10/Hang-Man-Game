export const InputText = ({ latestWord, typedLetters, result }: { latestWord: string[], typedLetters: string[], result: string }) => {
    return <>
        <div className="flex gap-4">
            {
                latestWord.map((el, index) => {
                    const correctGuess: boolean = typedLetters.includes(el);
                    return <div key={index}
                        className={`flex justify-center items-center border-b-4 w-20 text-5xl bg-white text-white
                        ${correctGuess && "!text-black"} 
                        ${!correctGuess && result === "LOST" && "!text-[red]"} 
                        border-black aspect-square uppercase`}
                    >{el}</div>
                })
            }
        </div>
    </>
}