import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";
import {getComments} from "../redux/slice/commentSlice";
import {createSearchParams, Link, useParams, useSearchParams} from "react-router-dom";
import {getUserComments} from "../redux/slice/usercommentsReducer";
import Button from "@mui/material/Button";
import * as ReactRouterDOM from "@mui/material";
import {COMMENT_PAGE, USERPOST_PAGE} from "../utils/routes";
import skills from "../skills/skills";
// import comments from "../comments/comments";


export default function ControlledAccordions({posts}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const userQuery = searchParams.get('poster')

    const [expanded, setExpanded] = React.useState(false);
    const Link = ReactRouterDOM.Link;
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const dispatch = useDispatch()
    const {comments} = useSelector(state => state.commentsReducer)
    useEffect(() => {
        if( userQuery)  {
            setExpanded(userQuery);
            dispatch(getComments(userQuery.replace('panel', id)))
            console.log(5)
        }
    }, [userQuery])

    const getComment = (id) => {
        dispatch(getComments(id))
    }

    /**************************/
    const [skill, setSkill] = useState({})
    const {id} = useParams()

    useEffect(() => {
        setSkill(comments.find(s => s.id === +id))
    }, [])
    return (
        <div>
            {
                posts.map(({id, title}) => {
                    console.log(expanded, userQuery)
                    return <Accordion key={id} expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)}
                                      onClick={() => getComment(id)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{width: '33%', flexShrink: 0}}>
                                {title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {
                                comments.map(({id, name}) => {
                                    return <li key={id}
                                               onClick={() => {
                                                   searchParams.delete('poster')
                                                   setSearchParams(searchParams)
                                               }}>
                                        <Link to={`${COMMENT_PAGE}/${id}`}>
                                            {name} {title}
                                        </Link>
                                    </li>
                                })
                            }
                        </AccordionDetails>
                    </Accordion>
                })
            }
        </div>
    );
};

