import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {addPost, deletePost, savePost, getPosts} from "../redux/slice/postSlice";

const About = () => {

    const {posts, loading, error} = useSelector(state => state.postReducer)
    const dispatch = useDispatch()
    console.log(posts, loading, error)
    const [text, setText] = useState({})
    const [edit, setEdit] = useState({})

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <div>
            <ul>
                {
                    posts.map(({id, title}) => {
                        return <li key={id}>
                            {
                                edit[id] ?
                                    <input type="text" value={text[id]}
                                           onChange={event => setText({[id]: event.target.value})}/>
                                    :
                                    title
                            }
                            <button onClick={
                                edit[id] ?
                                    () => {
                                        dispatch(savePost({id, title: text[id]})).then(() => dispatch(getPosts()))
                                        setEdit({})
                                    }
                                    :
                                        () => {
                                            setEdit({[id]:true})
                                            setText({[id] : title})
                                        }

                            }>{edit[id] ? "Save" : "Edit"}</button>
                            <button onClick={() => {
                                dispatch(deletePost(id)).then(() => dispatch(getPosts()))
                            }
                            }>Delete
                            </button>
                        </li>
                    })
                }
            </ul>
            <input
                type="text"
                value={text['']}
                onChange={e => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    dispatch(addPost({title: text})).then(() => {
                        dispatch(getPosts())
                    })
                    setText('')
                }}
            >Add
            </button>
        </div>
    );
};

export default About;