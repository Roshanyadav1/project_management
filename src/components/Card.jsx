import React from "react";

const Card = ({ item }) => {
    let { mission_name, flight_number, mission_id, launch_year, launch_success, land_success } = item

    let heading = `${mission_name} # ${flight_number}`
    let missionIds = mission_id || []
    let launchYear = launch_year
    let launchSuccess = launch_success ? 'True' : 'False'
    let landingSuccess = launch_success ? 'True' : 'False'

    return (
        <div className='_card _grid_item'>
            <div className="_card_body">
                <div className="_card_img">
                    <img src={''} alt="something" />
                </div>
                <p className="_card_heading _bold">{heading}</p>
                <p className="_bold">Mission ids :
                    <span className="_light">
                        {missionIds.map((id, index) => {
                            return <span key={index}>{id}</span>
                        })}
                        {
                            missionIds.length === 0 && <span>No Mission Ids</span>
                        }
                    </span>
                </p>
                <p className="_bold">Launch Year : <span className="_light">{launchYear}</span></p>
                <p className="_bold">Successful Launch : <span className="_light">{launchSuccess}</span></p>
                <p className="_bold">Successful Landing : <span className="_light">{landingSuccess}</span></p>
            </div>

        </div>
    )
}


export default Card;