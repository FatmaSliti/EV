/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react'
import { KTIcon } from '../../../helpers'
import MappingForm from '../../../../app/pages/device_management/device_management-sub-menues/ThirdPartyMapping/MappingForm'

const InviteUsers: FC = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [showModal, setShowModal] = useState(false);

  type RowData = {
    externalID: string;
    chargerID: string;
    connectorID: string;
    location: string;
    externalUnit: string;
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddRow = (newRow: RowData) => {
    // if (newRow.externalID && newRow.chargerID && newRow.connectorID) {
      setData([...data, newRow]);
      setShowModal(false); // Show the modal after adding a new row
      // toast.success('Successfully toasted!')
    // } else {
      // console.error('Please fill all required fields');
    // }
  };

  const websocket = new WebSocket('ws://localhost:8000/ws_mapping_data');

  return (
    <>
      {/* <div className='modal fade' id='kt_modal_invite_friends' aria-hidden='true'> */}
        <div className='modal fade' id='kt_modal_add_row' aria-hidden='true'>
        <div className='modal-dialog mw-650px'>
          <div className='modal-content'>
            <div className='modal-header pb-0 border-0 justify-content-end'>
              <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                <KTIcon iconName='cross' className='fs-1' />
              </div>
            </div>
            <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
              <div className='text-center mb-13'>
                <h1 className='mb-3'>Add New Row</h1>
                  <div className='text-muted fw-bold fs-5 link-primary fw-bolder'>
                    Enter the details for the new row
                  </div>
              </div>
              <MappingForm addNewRow={handleAddRow} websocket={websocket} closeModal={handleCloseModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export { InviteUsers }
