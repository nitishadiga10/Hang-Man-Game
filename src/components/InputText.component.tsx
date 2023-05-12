export const InputText = ({ latestWord, typedLetters, result }: { latestWord: string[], typedLetters: string[], result: string }) => {
    return <>
        <div className="flex gap-4">
            {
                latestWord.map((el, index) => {
                    const correctGuess: boolean = typedLetters.includes(el);
                    return <div aria-hidden="true"  key={index}
                        className={`
                        flex justify-center items-center border-b-4 w-8 sm:w-20 border-black aspect-square uppercase 
                        text-xl sm:text-5xl font-medium
                        `}
                    ><span
                        className={
                            `invisible
                            ${correctGuess && "!visible"} 
                            ${!correctGuess && result === "LOST" && "!text-[red] !visible"}
                            `
                        }
                    >{el}</span></div>
                })
            }
        </div>
    </>
}