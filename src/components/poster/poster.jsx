import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../redux/slice/posterSlice";
import ControlledAccordions from "../dashboards/Accordion";

const Poster = () => {
    const {post, loading} = useSelector(state => state.posterReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPost())
    },[])
    return (
        <div>
            <ControlledAccordions posts={post} />
        </div>
    );
};

export default Poster;