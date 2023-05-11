import { useEffect, useState } from 'react';
import { Hangman } from "./HangMan.component"
import { InputText } from "./InputText.component"
import { KeyBoard } from "./KeyBoard.component"


export const HomePage = () => {

    const [latestWord, setLatestWord] = useState<string[]>("ANUSHA".split(""));
    const [attempts, setAttempts] = useState<number>(6);
    const [typedLetters, setTypedLetters] = useState<string[]>([]);
    const [result, setResult] = useState<string>("");

    useEffect(() => {
        const tempData = latestWord.every(el => typedLetters.includes(el));
        if (attempts === 0 && !tempData) {
            setResult("LOST");
        } else if (tempData) setResult("WON");
    }, [attempts]);

    const handleKeyBoardClick = (e: any) => {
        console.log(e.target.innerHTML);
        setAttempts(attempts => attempts - 1);
        setTypedLetters(prevState => [...prevState, e.target.innerHTML]);
    }

    const handleRefresh = () => {
        setAttempts(6);
        setResult("");
        setTypedLetters([]);
    }

    return <div className="flex-col flex  justify-center items-center h-full w-full gap-8">
        {!result && <h1 className='mt-5 font-bold text-[30px]'>
            Hello There, Guess the word, You Got only <span className='text-[red]'>{` ${attempts} `}</span> 
            chances to Hang the Man!</h1>}
            {!!result && <div className='flex flex-row justify-center items-center mt-5'>
            <h1 className='font-bold text-[30px]'>{result === "WON" ? "You Hanged the Man ! Congrats !!! " : 
            "You Couldn't Hang the Man, Oops!!!!"}</h1>
            <button className='px-5 bg-sky-500 rounded ml-5 h-[40px] text-xl
            hover:bg-white hover:border-black hover:border-2' onClick={handleRefresh}
            >Play Again !</button>
            </div>}
            {}
        <Hangman />
        <InputText latestWord={latestWord} typedLetters={typedLetters} result = {result} />
        <KeyBoard 
        handleKeyBoardClick={handleKeyBoardClick} 
        typedLetters={typedLetters} 
        latestWord={latestWord} 
        result = {result}
        />
    </div>
}