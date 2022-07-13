import React from 'react'
import './Skills.css'
import {SiRedux} from 'react-icons/si';
import {GrReactjs} from 'react-icons/gr';
import {SiJavascript} from 'react-icons/si';
import {SiBabel} from 'react-icons/si';
import {SiHtml5} from 'react-icons/si';
import {BiGitMerge} from 'react-icons/bi';
import {FaNode} from 'react-icons/fa';
import {SiTypescript} from 'react-icons/si';
import {SiMongodb} from 'react-icons/si';
import {SiSqlite} from 'react-icons/si';
import {SiPostgresql} from 'react-icons/si';

const Skills = () => {
  return (
    <div className='containerSkills'>
        <h1 className='text'>Skills</h1>
        <div className='snsSkills'>
            <a href='https://es.reactjs.org/' target='_blank' rel="noreferrer">
            <GrReactjs className='react'/>
            </a>
            <a href='https://es.redux.js.org/' target='_blank' rel="noreferrer">
            <SiRedux className='redux'/>
            </a>
            <a href='https://www.javascript.com/' target='_blank' rel="noreferrer">
            <SiJavascript className='js'/>
            </a>
            <a href='https://babeljs.io/' target='_blank' rel="noreferrer">
            <SiBabel className='babel'/>
            </a>
            <a href='https://lenguajehtml.com/' target='_blank' rel="noreferrer">
            <SiHtml5 className='html'/>
            </a>
            <a href='https://git-scm.com/' target='_blank' rel="noreferrer">
            <BiGitMerge className='git'/>
            </a>
            <a href='https://nodejs.org/en/' target='_blank' rel="noreferrer">
            <FaNode className='node'/>
            </a>
            <a href='https://www.typescriptlang.org/' target='_blank' rel="noreferrer">
            <SiTypescript className='ts'/>
            </a>
            <a href='https://www.mongodb.com/' target='_blank' rel="noreferrer">
            <SiMongodb className='mongo'/>
            </a>
            <a href='https://www.sqlite.org/index.html' target='_blank' rel="noreferrer">
            <SiSqlite className='sqlite'/>
            </a>
            <a href='https://www.postgresql.org/' target='_blank' rel="noreferrer">
            <SiPostgresql className='post'/>
            </a>
        </div>
    </div>
  )
}

export default Skills