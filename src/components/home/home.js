import React, {useEffect, useState} from 'react';
import Modal from "../modal/modal";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getUsers, addUsers} from "../redux/slice/userSlice";
import Login from "../login/login";
import css from "./home.module.css"
import {addPost, deletePost, getPosts} from "../redux/slice/postSlice";

const Home = () => {

    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(1)
    let total = 20;
    const add = () => {
        setCount(count + 1)
    }
    const mult = () => {
        setPrice(count * total)
    }
    useEffect(() => {
        mult()
    }, [count])
    const remove = () => {
        if (count === 0) {
            setCount(0);
        } else {
            setCount(count - 1)
        }
    }
    const [modalActive, setModalActive] = useState(true)


    const dispatch = useDispatch()
    const {users} = useSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div>
            <div className={css.logout} ></div>
            <Modal active={modalActive} setActive={setModalActive}></Modal>

            <div>Price {price}</div>
            <div>
                <button onClick={() => remove()}>-</button>
                <span>{count}</span>
                <button onClick={() => add()}>+</button>
            </div>
            <button onClick={() => setModalActive(true)}>modal</button>

        </div>)
};

export default Home;