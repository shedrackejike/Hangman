const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100",
        border: "10px soild black",
        position: "absolute",
        top: "50px",
        right: "30px"
    }} />
)
const BODY = (
    <div style={{
        width: "50px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "50px",
        right: 0,
    }} />
)

const RIGHT_ARM = (
    <div style={{
        width: "50px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "_100px",
        rotate: "-30deg",
        transformOrigin: "letf bottom"
    }} />
)

const LEFT_ARM = (
    <div style={{
        width: "50px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }} />
)

const RIGHT_LEG = (
    <div style={{
        width: "50px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-90px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }} />
)

const LEFT_LEG = (
    <div style={{
        width: "50px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: 0,
        rotate: "60deg",
        transformOrigin: "right bottom"
    }} />
) 

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG,LEFT_LEG]

type HangmanDrawingProps ={
    numberofGuesses: number
}

export function HangmanDrawing({numberofGuesses }: HangmanDrawingProps) {
    return (
        <div style={{ position: "relative" }}>
           {BODY_PARTS.slice(0,numberofGuesses)}
            <div style={{ height: "50px", width: "10px", background: "black", position: "absolute", top: 0, right: 0 }} />
            <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px" }} />
            <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }} />
            <div style={{ height: "10px", width: "250px", background: "black" }} />
        </div>
    )
}