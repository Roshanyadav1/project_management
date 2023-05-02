import React from "react";

const Card = ({ key, item, deteleTask }) => {

    return (
        <div key={key} className='glass_shades box_shadow'>
            <h3 className='light_heading' >{item.name}</h3>
            <div >
                <p>{item.description}</p>
                <button onClick={() => deteleTask(item.id)} className="delete_task" >Delete task</button>
            </div>
        </div>
    )
}


export default Card;