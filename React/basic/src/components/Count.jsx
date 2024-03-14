import { useEffect } from "react"

/* eslint-disable react/prop-types */
export const Count = ({ number }) => {
    useEffect(() => {
        document.title = `Clicked ${number} times`;

        return () => {
            document.title = "A Title"
        }

    }, [number])
    return (
        <div>
            {/* <CountLabel /> */}
            <span>{number}</span>
        </div>
    )
}


// function CountLabel() {
//     return <p>The current count is: </p>
// }