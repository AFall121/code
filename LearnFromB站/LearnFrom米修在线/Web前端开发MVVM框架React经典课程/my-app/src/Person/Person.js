import React from 'react'
const Person = function(props){
    return (
        <div>
            <p>同学们好，我叫{props.name},我今年{props.age}岁，希望大家互相关照。</p>
            <p>{props.children}</p>
        </div>
    )
}
export default Person;