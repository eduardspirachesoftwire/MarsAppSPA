import "../../styles/QueryList.css"
import React, {ReactNode, useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

interface QueryProps {
    url: string;
    text: string;
    path: string;
    onClick?: any[];
}

export function ButtonQuery(props: QueryProps) {
    const [queries, setQueries] = useState<ReactNode[]>([]);
    console.log(props.url);
    function buttonHandler(buttonName: string) {
        if (props.onClick !== undefined) {
            if (props.onClick[0] !== undefined) {
                props.onClick[0]();
            }
            if (props.onClick[1] !== undefined) {
                props.onClick[1](buttonName);
            }
        }
    }

    useEffect(() => {
        axios.get(props.url).then((result) => {
            const objArray = [];
            for (let obj of result.data) {
                let buttonName = obj.toString();
                let path: string = props.path + `${buttonName}`;
                objArray.push(
                    <Link to={path}>
                        <button className="button" onClick={() => buttonHandler(buttonName)} key={buttonName}>{buttonName}</button>
                    </Link>);
            }
            setQueries(objArray);
        });
    }, []);

    return (
        <div className="description">
            <p>{props.text}</p>
            <div className="query-list">
                {queries}
            </div>
        </div>
    );
}