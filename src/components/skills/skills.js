import React, {useState} from 'react';
import css from './skills.module.css'

const Skills = () => {
    const [skills, setSkills] = useState([
        {id: 1, name: "Skill 1"},
        {id: 2, name: "Skill 2"},
        {id: 3, name: "Skill 3"},
        {id: 4, name: "Skill 4"}
    ])

    console.log(skills)
    const [value, setValue] = useState("")
    const addSkill = () => {
        if (value.trim()) {
            setSkills(skills => skills.concat([{id: Math.random(), name: value}]))
            setValue("")
        }

    }
    const deleteSkill = (id) => {
        //2
        //1 --- [{id: 1, name: "Skill 1"}, id: 3, name: "Skill 3", {id: 4, name: "Skill 4"}]
        //let a = skills.filter(s => s.id !== id)
        setSkills(skills.filter(s => s.id !== id))
    }
    const [editRegime, setEditRegime] = useState({})
    const [editText, setEditText] = useState({})
    const changeRegime = (id, name) => {
        setEditRegime({[id]: true})
        setEditText({[id]: name})
        console.log(changeRegime)
    }
    // const saveSkill = (id) => {
    //
    //
    //     skills.reduce(s => s.id = id ? {id: s.id, name: editText[id]} : s);
    // }
    const saveSkill = (id) => {
        const aa = [];
        let i = 0;
        skills.forEach(s => {
            if (s.id === id) {
                aa[i] = {id: s.id, name: editText[id]};
            } else {
                aa[i] = s;
            }
            i++;
        })
        console.log(aa);
        setSkills(aa);
    }
    const edit = (id, name) => {
        if (editRegime[id]) {

            return () => {
                setEditRegime({})
                saveSkill(id)
            }
        } else {

            return () => {
                changeRegime(id, name)
            }
        }


    }
    return (
        <div className={css.container}>
            <div>
                <input type="text"
                       value={value}
                       onChange={e => {
                           setValue(e.target.value)
                           // console.log(e.target.value);
                       }}
                />
                <button onClick={addSkill}>Add</button>
            </div>
            <ul className={css.ul}>
                {
                    skills.map(({id, name}) => {
                        return <li key={id}
                                   className={css.li}
                        >
                            {
                                editRegime[id]
                                    ?
                                    <input type="text"
                                           value={editText[id]}
                                           onChange={e => setEditText({[id]: e.target.value})}
                                    />
                                    :
                                    <span>{name}</span>

                            }

                            <div>
                                <button onClick={edit(id, name)}
                                >
                                    {                   //true     //false
                                        editRegime[id] ? "Save" : "Edit"
                                    }
                                </button>
                                <button onClick={() => deleteSkill(id)}>Delete</button>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Skills;