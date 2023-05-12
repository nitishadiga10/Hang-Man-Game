export const KeyBoard = (
    { handleKeyBoardClick, typedLetters, latestWord, result }: {
        handleKeyBoardClick: any, typedLetters: string[], latestWord: string[],
        result: string
    }) => {
    const keyBoardLetters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    return <>
        <div className="grid grid-cols-keyBoard w-4/5 gap-2 justify-center items-center ">
            {
                keyBoardLetters.map(letter => {
                    const typedLetter: boolean = typedLetters.includes(letter);
                    const correctGuess: boolean = latestWord.includes(letter);
                    return <button onClick={handleKeyBoardClick} disabled={typedLetters.includes(letter) || !!result}
                        className={`border-2 border-black aspect-square text-2xl font-bold disabled:pointer-events-none
                        hover:bg-sky-500 hover:cursor-pointer"
                        ${typedLetter && "bg-red-600"} 
                        ${correctGuess && typedLetter && "!bg-sky-500"} 
                        text-center`}
                        key={letter}>
                        {letter}
                    </button>
                }
                )
            }
        </div>
    </>
}