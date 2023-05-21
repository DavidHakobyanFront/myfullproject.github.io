import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useSearchParams} from "react-router-dom";
import css from "./todos.module.css"

const Todos = () => {

    const [todos, setTodos] = useState([])

    const [searchParams, setSearchParams] = useSearchParams({})

    const page = +searchParams.get('page') || 1
    const limit = +searchParams.get('limit') || 20

    const getTodos = async (page, limit) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`)
        const data = await response.data
        setTodos(data)
    }

    const [pageCount, setPageCount] = useState(0)

    useEffect(() => {
        setPageCount(Math.ceil(200/limit))
    })

    useEffect(() => {
        getTodos(page, limit)
    }, [page, limit])

    return (
        <div className={css.container}>
            <select className={css.select} value={limit} onChange={(e) => {
                setSearchParams({
                    page:1,
                    limit:e.target.value
                })
            }}>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
            <ul className={css.ul}>
                {
                    todos.map(({id, title}) => {
                        return <li key={id}
                                   className={css.li}
                        >
                            {title}
                        </li>
                    })
                }
            </ul>

            <ul className={css.pages}>
                {
                    new Array(pageCount).fill(undefined).map((_, index) => {
                        return <li key={index}
                                   className={`${css.page} ${ page === index+1 ? css.active : undefined}`}
                                   onClick={() => {
                                       setSearchParams({
                                           page: index+1,
                                           limit:limit
                                       })
                                   }
                                   }
                        > {index+1} </li>
                    })
                }
            </ul>


        </div>
    );
};

export default Todos;