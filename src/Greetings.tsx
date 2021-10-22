import React from 'react'

type HelloProps  = {
     compiler:string
     framework:string;}

const Hello = ({compiler,framework}: HelloProps)=>{
    return (
        <>
        <div className="name">{compiler}</div>
        <div className="framework">{framework}</div>
        </>
    )
}

export default Hello;