export const KeyBoard = (
    { handleKeyBoardClick, typedLetters, latestWord, result }: {
        handleKeyBoardClick: any, typedLetters: string[], latestWord: string[],
        result: string
    }) => {
    const keyBoardLetters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return <>
        <div className="grid grid-cols-small sm:grid-cols-medium  w-full gap-2 ">
            {
                keyBoardLetters.map(letter => {
                    const typedLetter: boolean = typedLetters.includes(letter);
                    const correctGuess: boolean = latestWord.includes(letter);
                    return <button onClick={handleKeyBoardClick} disabled={typedLetters.includes(letter) || !!result}
                        className={`border-2 border-black aspect-square text-xl font-bold disabled:pointer-events-none
                        hover:bg-sky-500 hover:cursor-pointer"
                        ${typedLetter && "bg-red-600"} 
                        ${correctGuess && typedLetter && "!bg-sky-500"}`}
                        key={letter}>
                        {letter}
                    </button>
                }
                )
            }
        </div>
    </>
}