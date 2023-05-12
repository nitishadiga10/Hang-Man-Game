export const Hangman = ({ wrongAttempts}: { wrongAttempts:number }) => {

    const head = <div key = {1} className="absolute rounded-full w-12 h-12 top-10 right-[-100px] border-black border-4" />
    const body = <div key = {2} className="h-[105px] w-1 absolute top-[85px] right-[-79px] bg-black" />
    const rightHand = <div key = {3}  className="h-1 w-14 absolute rotate-[30deg] top-[120px] right-[-130px] bg-black" />
    const leftHand = <div key = {4} className="h-1 w-14 absolute  rotate-[-30deg]  top-[120px] right-[-80px] bg-black" />
    const rightLeg = <div key = {5} className="h-1 w-14 absolute  rotate-[30deg]  top-[200px] right-[-130px] bg-black" />
    const leftLeg = <div key = {6} className="h-1 w-14 absolute  rotate-[-30deg]  top-[200px] right-[-80px] bg-black" />

    const manBody: JSX.Element[] = [head, body, rightHand, leftHand, rightLeg, leftLeg];

    return <div className="relative ">
        {manBody.slice(0,wrongAttempts)}
        <div className="h-10 w-1 absolute top-0 right-[-79px] bg-black" />
        <div className="h-1 w-[200px] ml-[50%] bg-black" />
        <div className="h-[300px] w-1 ml-[50%] bg-black" />
        <div className="h-1 w-[250px] bg-black" />
    </div>

}