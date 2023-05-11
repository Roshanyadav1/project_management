import React, { Suspense, lazy } from 'react'
import { useGetSpaceDataQuery } from '../services/spaceService';

const Card = lazy(() => import('../components/Card.jsx'));

let years = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
function Program() {

    const { data: task, isSuccess } = useGetSpaceDataQuery();

    return (
        <div className="App">
            <div className='_container'>
                <div className='_header'>
                    <h1>SpaceX Launch Programs</h1>
                </div>

                <div className='_flex _flex_wrap'>

                    {/* filter section */}
                    <div className='_filter_section'>
                        <h3>Filters</h3>
                        <p className='_bold _centered'>Launch Year</p>
                        <div className='_filter_btns'>
                            <div className='_flex _flex_wrap'>
                                {years.map((year, index) => {
                                    return <button className='_btn' key={index}>{year}</button>
                                })}
                            </div>
                        </div>
                        <p className='_bold' > Successful / Launch </p>
                        <div className='_filter_btns'>
                            <button className='_btn'>True</button>
                            <button className='_btn'>False</button>
                        </div>
                        <p className='_bold' > Successful / Landing </p>
                        <div className='_filter_btns'>
                            <button className='_btn'>True</button>
                            <button className='_btn'>False</button>
                        </div>
                    </div>

                    {/* card section */}
                    <div className='_card_section'>
                        <div className='_grid'>
                            {isSuccess && task.map((item, index) => {
                                return (
                                    <Suspense fallback={<div>Loading...</div>} key={index}>
                                        <Card item={item} />
                                    </Suspense>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Program;




