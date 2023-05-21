import React, {useState} from 'react';

const Portfolio = () => {

    const movies = [
        {id:1, title: "Home alone 1        ", rating: "    10"},
        {id:2, title: "Home alone 2        ", rating: "    9"},
        {id:3, title: "Home alone 3        ", rating: "    8"},
        {id:4, title: "Home alone 4        ", rating: "     7"},
    ]
const [type, setType] = useState({})
    const show = (id) => {
        setType({[id]:!type[id]})
    }
    return (
    <ul>
        {
            movies.map(({id,title,rating}) => {
                return <li key={id}>
                    <span onClick={() => show(id)}>{title}</span>
                    {type[id] && <span>{rating}</span>}
                </li>
            })
        }
    </ul>
    );
};

export default Portfolio;