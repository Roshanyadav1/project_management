import React, { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Info from './Info'

const HomeLayout = () => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    //Upon successful login, open a new page, call the below API and present the
    // below data to the API.

    //     URL: https://hoblist.com/api/movieList
    //     Type: POST
    //     Parameter: category: "movies",
    //     language: "kannada", genre: "all",
    //     sort: "voting" Follow this pattern:

    React.useEffect(() => {
        setLoading(true)
        fetch('https://hoblist.com/api/movieList', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category: "movies",
                language: "kannada",
                genre: "all",
                sort: "voting"
            })
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setData(data.result)
            })
            .catch(err => {
                setLoading(false)
                setError(err)
            })
    }, [])



    return (
        <div>

            <div className='_responsive_grid' >

                {
                    loading && <div>Loading...</div>
                }
                {
                    error && <div>Something went wrong !</div>
                }

                {data.map((item, index) => {
                    return (
                        <div key={index} className='_responsive_grid_item'>
                            <div className='_flex'>
                                <div className='_flex_item'>
                                    <img className='_resImage' src={item.poster} alt={item.title} />
                                    <div>
                                        <h3>{item?.title}</h3>
                                        <p>{item?.description}</p>
                                        General : {item?.genre}
                                        <br />
                                        Director : {item?.director}
                                        <br />
                                        Stars : {item?.stars}
                                        <br />
                                        Production Company : {item?.productionCompany}
                                        <br />
                                        Writers : {item?.writers}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className='_flex'>
            <div className='_sidebarAndContent'>
                <div className='_sidebar'>
                    <div className='_sidebar_item'>
                        <h3 className='_sidebar_heading'>
                            <Link to='/home'>Home</Link>
                        </h3>
                        <h3 className='_sidebar_heading'>
                            <Link to='/home/info'>Company Info</Link>
                        </h3>
                    </div>
                </div>
            </div>

            <Routes>
                <Route index element={<HomeLayout />} />
                <Route exact path='/info' element={<Info />} />
            </Routes>

        </div >
    )
}

export default Home