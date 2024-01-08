// /* eslint-disable jsx-a11y/anchor-is-valid */
// import { FC, useState } from 'react'
// import { KTIcon } from '../../../helpers'
// import MappingForm from '../../../../app/pages/device_management/device_management-sub-menues/ThirdPartyMapping/MappingForm'
// import EditMappingForm from '../../../../app/pages/device_management/device_management-sub-menues/ThirdPartyMapping/EditMappingForm';

// const EditModal: FC = () => {
//     const [data, setData] = useState<RowData[]>([]);
//     const [showModal, setShowModal] = useState(false);

//     type RowData = {
//         externalID: string;
//         chargerID: string;
//         connectorID: string;
//         location: string;
//         externalUnit: string;
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     const handleAddRow = (newRow: RowData) => {
//         // if (newRow.externalID && newRow.chargerID && newRow.connectorID) {
//         setData([...data, newRow]);
//         setShowModal(false); // Show the modal after adding a new row
//         // toast.success('Successfully toasted!')
//         // } else {
//         // console.error('Please fill all required fields');
//         // }
//     };

//     const websocket = new WebSocket('ws://localhost:8000/ws_mapping_data');

//     return (
//         <>
//             {/* <div className='modal fade' id='kt_modal_invite_friends' aria-hidden='true'> */}
//             <div className='modal fade' id='kt_modal_edit_row' aria-hidden='true'>
//                 <div className='modal-dialog mw-650px'>
//                     <div className='modal-content'>
//                         <div className='modal-header pb-0 border-0 justify-content-end'>
//                             <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
//                                 <KTIcon iconName='cross' className='fs-1' />
//                             </div>
//                         </div>
//                         <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
//                             <div className='text-center mb-13'>
//                                 <h1 className='mb-3'>Edit Actual Row</h1>
//                                 <div className='text-muted fw-bold fs-5 link-primary fw-bolder'>
//                                     Modify the details for the selected row
//                                 </div>
//                             </div>
//                             <EditMappingForm />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export { EditModal }


/* eslint-disable jsx-a11y/anchor-is-valid */
// import { FC, useState } from 'react'
// import { KTIcon } from '../../../helpers'
// import EditMappingForm from '../../../../app/pages/device_management/device_management-sub-menues/ThirdPartyMapping/EditMappingForm';

// const EditModal: FC = () => {
//     const [data, setData] = useState<RowData[]>([]);


//     type RowData = {
//         externalID: string;
//         chargerID: string;
//         connectorID: string;
//         location: string;
//         externalUnit: string;
//     };

//     const websocket = new WebSocket('ws://localhost:8000/ws_mapping_data');

//     return (
//         <>
//             {/* <div className='modal fade' id='kt_modal_invite_friends' aria-hidden='true'> */}
//             <div className='modal fade' id='kt_modal_edit_row' aria-hidden='true'>
//                 <div className='modal-dialog mw-650px'>
//                     <div className='modal-content'>
//                         <div className='modal-header pb-0 border-0 justify-content-end'>
//                             <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
//                                 <KTIcon iconName='cross' className='fs-1' />
//                             </div>
//                         </div>
//                         <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
//                             <div className='text-center mb-13'>
//                                 <h1 className='mb-3'>Edit Actual Row</h1>
//                                 <div className='text-muted fw-bold fs-5 link-primary fw-bolder'>
//                                     Modify the details for the selected row
//                                 </div>
//                             </div>
//                             <EditMappingForm />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export { EditModal }

// import { FC, useState } from 'react'
// import { KTIcon } from '../../../helpers'
// import EditMappingForm from '../../../../app/pages/device_management/device_management-sub-menues/ThirdPartyMapping/EditMappingForm';

// const EditModal: FC = () => {
//     const [data, setData] = useState<RowData[]>([]);

//     type RowData = {
//         externalID: string;
//         chargerID: string;
//         connectorID: string;
//         location: string;
//         externalUnit: string;
//     };

//     const websocket = new WebSocket('ws://localhost:8000/ws_mapping_data');


//     const handleEditRow = (rowData: RowData) => {
//         // Handle editing row logic here
//     };

//     return (
//         <>
//             <div className='modal fade' id='kt_modal_edit_row' aria-hidden='true'>
//                 <div className='modal-dialog mw-650px'>
//                     <div className='modal-content'>
//                         <div className='modal-header pb-0 border-0 justify-content-end'>
//                             <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
//                                 <KTIcon iconName='cross' className='fs-1' />
//                             </div>
//                         </div>
//                         <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
//                             <div className='text-center mb-13'>
//                                 <h1 className='mb-3'>Edit Actual Row</h1>
//                                 <div className='text-muted fw-bold fs-5 link-primary fw-bolder'>
//                                     Modify the details for the selected row
//                                 </div>
//                             </div>
//                             {data.map((rowData, index) => (
//                                 <div key={index}>
//                                     {/* Render EditMappingForm for each row */}
//                                     <EditMappingForm
//                                         editRow={handleEditRow}
//                                         editedData={rowData} // Pass each row data dynamically
//                                         // rowData={rowData} // Pass each row data dynamically
//                                         websocket={websocket}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export { EditModal }


/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from 'react'
import { KTIcon } from '../../../helpers'
// import MappingForm from '../../../../app/pages/device_management/device_management-sub-menues/ThirdPartyMapping/MappingForm'
import EditMappingForm from '../../../../app/pages/device_management/device_management-sub-menues/ThirdPartyMapping/EditMappingForm';

const EditModal: FC = () => {
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
            <div className='modal fade' id='kt_modal_edit_row' aria-hidden='true'>
                <div className='modal-dialog mw-650px'>
                    <div className='modal-content'>
                        <div className='modal-header pb-0 border-0 justify-content-end'>
                            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                                <KTIcon iconName='cross' className='fs-1' />
                            </div>
                        </div>
                        <div className='modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15'>
                            <div className='text-center mb-13'>
                                <h1 className='mb-3'>Edit Actual Row</h1>
                                <div className='text-muted fw-bold fs-5 link-primary fw-bolder'>
                                    Modify the details for the selected row
                                </div>
                            </div>
                            <EditMappingForm addNewRow={handleAddRow} websocket={websocket} closeModal={handleCloseModal} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { EditModal }
