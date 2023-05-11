import React from "react";

const Card = ({ item }) => {


    return (
        <div className='_card _grid_item'>
            <div className="_card_body">
                <div className="_card_img">
                    <img src={''} alt="something" />
                </div>
                <p className="_bold">{item.name}</p>
                <p className="_bold">Mission ids :
                    <span className="_light">

                        {item.mission_id.map((id, index) => {
                            return <span key={index}>{id}</span>
                        })}
                    </span>
                </p>
                <p className="_bold">Launch Year : <span className="_light">{item.launch_year}</span></p>
                <p className="_bold">Successful Launch : <span className="_light">{item.launch_success}</span></p>
                <p className="_bold">Successful Landing : <span className="_light">{item.launch_success}</span></p>
            </div>

        </div>
    )
}


export default Card;