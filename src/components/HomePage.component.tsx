import { useEffect, useState } from 'react';
import { Hangman } from "./HangMan.component"
import { InputText } from "./InputText.component"
import { KeyBoard } from "./KeyBoard.component"
import wordsRepo from '../questionWord.json';

const getTheWord = () => {
    return wordsRepo[Math.floor(Math.random() * wordsRepo.length)]
}

export const HomePage = () => {

    const [latestWord] = useState<string[]>(getTheWord().toUpperCase().split(""));
    const [wrongAttempts, setWrongAttempts] = useState<number>(0);
    const [typedLetters, setTypedLetters] = useState<string[]>([]);
    const [result, setResult] = useState<string>("");

    useEffect(() => {
        let wrongLetters = 0;
        typedLetters.forEach(letter => {
            if (!latestWord.includes(letter)) wrongLetters += 1;
        });
        setWrongAttempts(wrongLetters);

        const tempData = latestWord.every(el => typedLetters.includes(el));
        if (wrongLetters === 6 && !tempData) {
            setResult("LOST");
        } else if (tempData) setResult("WON");

    }, [typedLetters.length]);

    const handleKeyBoardClick = (e: any) => {
        setTypedLetters(prevState => [...prevState, e.target.innerHTML]);
    }

    const handleRefresh = () => {
        window.location.reload();
    }

    return <div className="flex-col flex  justify-center items-center gap-8 my-5 mx-auto max-w-[80vw] text-center">
        {!result && <h1 className='font-bold text-[15px] sm:text-[30px]'>Hello There ! Guess the word and Save the Man!</h1>}
        {!!result && <div className='flex flex-row justify-center items-center'>
            <h1 className='font-bold ext-[15px] sm:text-[30px] '>{result === "WON" ? "You Saved the Man ! Bravo !!! " : "You Hanged the Man, Oops!!!!"}</h1>
            <button
                className=' bg-sky-500 rounded ml-5 h-[40px] w-[120px] font-bold
                border-black border-2 hover:bg-white hover:border-black hover:border-2'
                onClick={handleRefresh}
            >Play Again !
            </button>
        </div>}
        <Hangman wrongAttempts={wrongAttempts} />
        <InputText latestWord={latestWord} typedLetters={typedLetters} result={result} />
        <KeyBoard
            handleKeyBoardClick={handleKeyBoardClick}
            typedLetters={typedLetters}
            latestWord={latestWord}
            result={result}
        />
    </div>
}