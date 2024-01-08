import React from 'react'
import { MixedWidget1, MixedWidget7, StatisticsWidget3 } from '../../../../_metronic/partials/widgets'

function ChargerConfiguration() {
    return (
        <div className='row g-5 g-xl-8'>

            <div className='col-xl-4'>
                <MixedWidget1 className='card-xl-stretch mb-xl-8' color='primary' />
            </div>

            <div className='col-xl-4'>
                <MixedWidget7
                    className='card-xl-stretch mb-xl-8'
                    chartColor='primary'
                    chartHeight='200px'
                />
            </div>
            <div className='col-xl-4'>
                <StatisticsWidget3
                    className='card-xl-stretch mb-5 mb-xl-8'
                    color='primary'
                    title='Electric Vehicle Usage Chart'
                    description='Charging Sessions'
                    change='+180'
                />
            </div>
        </div>


    )
}

export default ChargerConfiguration
