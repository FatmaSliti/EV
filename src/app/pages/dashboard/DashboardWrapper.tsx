import { useEffect } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import {
  CardsWidget17,
  CardsWidget20,
  CardsWidget7,
  EngageWidget10,
  ListsWidget26,
  ListsWidget3,
  ListsWidget4,
  ListsWidget5,
  ListsWidget6,
  ListsWidget9,
  MixedWidget6,
  MixedWidget7,
  MixedWidget8,
  StatisticsWidget5,
  TablesWidget11,
  TablesWidget9,
} from '../../../_metronic/partials/widgets'
import { toAbsoluteUrl } from '../../../_metronic/helpers'

const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
      <PageTitle breadcrumbs={[]} description='#XRS-45670'>
        Dashboard
      </PageTitle>
      {/* begin::Row */}
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        {/* begin::Col */}
        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget20
            className='h-md-50 mb-5 mb-xl-10'
            description='Active Charging Sessions'
            color='#009ef7'
            img={toAbsoluteUrl('/media/patterns/vector-11.png')}
          />
          <CardsWidget7
            className='h-md-50 mb-5 mb-xl-10'
            description='New Users'
            icon={false}
            stats={357}
            labelColor='dark'
            textColor='gray-300'
          />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
          <CardsWidget17 className='h-md-50 mb-5 mb-xl-10' />
          <ListsWidget26 className='h-lg-50' />
        </div>
        {/* end::Col */}

        {/* begin::Col */}
        <div className='col-xxl-6'>
          <EngageWidget10 className='h-md-100' />
        </div>
        {/* end::Col */}
      </div>
      {/* end::Row */}
      <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
        <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'></div>
        <div className='col-xxl-6'></div>
      </div>

      {/* <div className='row g-5 g-xl-8'> */}
      {/* <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='basket'
            color='danger'
            iconColor='white'
            title='Shopping Cart'
            titleColor='white'
            description='Lands, Houses, Ranchos, Farms'
            descriptionColor='white'
          />
        </div> */}

      {/* <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-xl-8'
            svgIcon='cheque'
            color='primary'
            iconColor='white'
            title='Appartments'
            titleColor='white'
            descriptionColor='white'
            description='Flats, Shared Rooms, Duplex'
          />
        </div> */}

      {/* <div className='col-xl-4'>
          <StatisticsWidget5
            className='card-xl-stretch mb-5 mb-xl-8'
            svgIcon='chart-simple-3'
            color='success'
            iconColor='white'
            titleColor='white'
            descriptionColor='white'
            title='Sales Stats'
            description='50% Increased for FY20'
          />
        </div> */}
      {/* </div> */}
      {/* end::Row */}

      {/* begin::Row */}
      {/* <div className='row gy-5 g-xl-8'> */}
      {/* begin::Col */}
      {/* <div className='col-xl-4'>
          <MixedWidget6
            className='card-xl-stretch mb-xl-8'
            chartColor='primary'
            chartHeight='150px'
          />
        </div> */}
      {/* end::Col */}

      {/* begin::Col */}
      {/* <div className='col-xl-4'>
          <MixedWidget7 className='card-xl-stretch' chartColor='primary' chartHeight='225px' />
        </div> */}
      {/* end::Col */}

      {/* begin::Col */}
      {/* <div className='col-xl-4'>
          <MixedWidget8
            className='card-xl-stretch mb-5 mb-xl-8'
            chartColor='danger'
            chartHeight='150px'
          />
        </div> */}
      {/* end::Col */}
      {/* </div> */}
      {/* end::Row */}

      {/* begin::Row */}
      <div className='row gy-5 g-xl-8'>
        {/* begin::Col */}
        {/* <div className='col-xxl-4'>
          <ListsWidget9 className='card-xxl-stretch' />
          {/* begin::Col */}
        
        {/* end::Col */}
        
        {/* begin::Col */}
        {/* <div className='col-xxl-4'>
          <ListsWidget6 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div> */}
        {/* end::Col */}
      </div>
      {/* end::Row */}
      

      {/* begin::Row */}
      
      <div className='row g-5 g-xl-8'>
        
        <div className='col-xxl-8'>
          <TablesWidget9 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>

        <div className='col-xxl-4'>
          <ListsWidget6 className='card-xxl-stretch mb-5 mb-xl-8' />
        </div>

        {/* <div className='col-xl-4'>
          <ListsWidget5 className='card-xl-stretch mb-xl-8' />
        </div>

        <div className='col-xl-4'>
          <ListsWidget3 className='card-xl-stretch mb-5 mb-xl-8' />
        </div> */}
      </div>
      {/* end::Row */}

      {/* begin::Row */}
      {/* <div className='g-5 gx-xxl-8'>
        <TablesWidget11 className='' />
      </div> */}
      {/* end::Row */}
    </>
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
      <DashboardPage />
    </>
  )
}

export { DashboardWrapper }
