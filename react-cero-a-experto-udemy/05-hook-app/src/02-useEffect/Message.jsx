import { useState } from "react";
import { useEffect } from "react"


const Message = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <>
            <h3>Ya existe el Usuario!</h3>
            {JSON.stringify(coords)}
        </>
    )
}

export default Message
