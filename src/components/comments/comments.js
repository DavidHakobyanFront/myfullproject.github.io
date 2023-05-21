import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";

const Comments = () => {

    // const a = useRef(1)
    // console.log(a.current)

    const lastElement = useRef()
    // console.log(lastElement)

    const observer = useRef()

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(0)

    const getComments = async (page) => {
        setLoading(true)
        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=50`)
            const data = await response.data
            // console.log(response)
            setComments([...comments, ...data])

        }catch (e) {
            console.log(e, "error")
        }finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getComments(page)
    },[page])

    // console.log(comments)

    useEffect(() => {

        if(loading) return

        if(observer.current) {
            observer.current.disconnect()
        }

        const callback = (entries) => {
            console.log(entries, "a")
            if(entries[0].isIntersecting && page<10) {
                setPage(page+1)
            }
        }
        console.log(page, "page")

        observer.current = new IntersectionObserver(callback)
        // console.log(observer.current)

        observer.current.observe(lastElement.current)


    }, [loading])


    return (
        <div>
            <ul>
                {
                    comments.map(({id, name}) => {
                        return <li key={id}>
                            {name}
                        </li>
                    })
                }
            </ul>

            <div ref={lastElement} style={{width:'20px', height:"10px",
                // background:'red'
            }}>

            </div>
        </div>
    );
};

export default Comments;