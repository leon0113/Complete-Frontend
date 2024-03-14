/* eslint-disable react/prop-types */

export const Button = ({ setNumber, isMore }) => {


    return (
        <button
            onClick={() => setNumber((prev) => prev + 1)}
        >
            {
                isMore ? "+" : "STOPED"
            }
        </button>
    )
}
