import "../../styles/QueryList.css"
import React, {useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface QueryProps {
    url: string;
    text: string;
    path: string;
    onClick?: any[];
}

export function TextQuery(props: QueryProps) {
    const [limit, setLimit] = useState<number>(0);

    function buttonHandler() {
        if (props.onClick !== undefined) {
            if (props.onClick[0] !== undefined) {
                props.onClick[0]();
            }
            if (props.onClick[1] !== undefined) {
                props.onClick[1](inputSol?.current?.value || limit);
            }
        }
    }

    useEffect(() => {
        axios.get(props.url).then((result) => {
            setLimit(result.data);
        });
    }, []);

    const inputSol = useRef<HTMLInputElement>(null);
    const formData = {sol: ""};
    const navigate = useNavigate();

    function formHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        formData.sol = inputSol?.current?.value || "";
        navigate(props.path + `${formData.sol}`);
    }

    return (
        <div className="description">
            <p>{props.text}</p>
            <p>Maximum: {limit}</p>
            <form onSubmit={formHandler}>
                <input type="text" ref={inputSol}/>
                <button type={"submit"} className="button" onClick={buttonHandler}>Submit</button>
            </form>
        </div>
    );
}