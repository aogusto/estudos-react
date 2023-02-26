import { useState } from "react";

const ManageData = () => {
    const [number, setNumber] = useState(15);
    return(
        <>
            <p>
                Valor: {number}
            </p>
                <br/>
            <button 
                onClick={() => 
                    setNumber(number+1)
                }
                children={"Mudar variável"}
            />
        </>
    )
}

export default ManageData;