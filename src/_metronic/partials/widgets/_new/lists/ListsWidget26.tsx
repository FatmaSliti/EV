/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from 'react'
import { KTIcon } from '../../../../helpers'

type Props = {
  className: string
}



const ListsWidget26 = ({ className }: Props) => (
  <div className={`card card-flush ${className}`}>
    <div className='card-header pt-5'>
      <h3 className='card-title text-gray-800 fw-bold'>New Charge Points</h3>
      <div className='card-toolbar'></div>
    </div>
    <div className='card-body pt-5'>

      <div className="d-flex justify-content-center align-items-center">

        <h1 style={{fontSize: '30px'}}>750 </h1>
        {/* <span className='fw-semibold fs-6 text-gray-400 pt-1'>Additional Charge Points</span> */}
      </div>

    </div>
  </div>
)
export { ListsWidget26 }
