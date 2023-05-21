import React from 'react';
import {useSearchParams} from "react-router-dom";

const OneTodo = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('poster')

    return (
        <div>
            <ul></ul>
        </div>
    );
};

export default OneTodo;