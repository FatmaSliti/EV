/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react'
import { KTIcon } from '../../../helpers'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    className: string
}

type RowData = {
    externalID: number;
    chargerID: number;
    connectorID: number;
    location: string;
    externalUnit: string;
};

const TablesWidget14: React.FC<Props> = ({ className }) => {
    // const [data, setData] = useState<RowData[]>([]);
    // const socket = useRef<WebSocket | null>(null);

    // const [editIndex, setEditIndex] = useState<number | null>(null);
    // const [editedData, setEditedData] = useState<RowData | null>(null);

    const [data, setData] = useState<RowData[]>([]);
    const [editIndex, setEditIndex] = useState<number | null>(null);
    const [editedData, setEditedData] = useState<RowData | null>(null);
    const [showModal, setShowModal] = useState(false); // State for the modal
    const socket = useRef<WebSocket | null>(null);

    useEffect(() => {
        socket.current = new WebSocket('ws://localhost:8000/ws_mapping_data');

        socket.current.onopen = () => {
            console.log('WebSocket connected');
        };

        socket.current.onmessage = (event) => {
            const receivedData = JSON.parse(event.data);
            console.log('Received data:', receivedData);
            setData(receivedData);
        };

        return () => {
            if (socket.current) {
                socket.current.close();
            }
        };
    }, []);



    const confirmDelete = async (index: number) => {
        // Display modal or dialog confirmation here
        const confirmDeletion = window.confirm('Are you sure you want to delete this row?');

        if (confirmDeletion && index !== null) {
            try {
                const response = await fetch(`http://localhost:8000/delete_mapping_data/${index}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    const updatedData = [...data];
                    updatedData.splice(index, 1);
                    setData(updatedData);
                    toast.success('Row deleted successfully!', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                } else {
                    console.error('Failed to delete row:', response.statusText);
                }
            } catch (error) {
                console.error('Error deleting row:', error);
            }
        }
    };


    const handleEdit = (index: number, rowData: RowData) => {
        setEditIndex(index);
        setEditedData(rowData);
        setShowModal(true); // Show the modal
    };

    const confirmEdit = async (updatedData: RowData) => {
        if (editIndex !== null) {
            try {
                const response = await fetch(`http://localhost:8000/update_mapping_data/${editIndex}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedData),
                });
                if (response.ok) {
                    const updatedRows = [...data];
                    updatedRows[editIndex] = updatedData;
                    setData(updatedRows);
                    setShowModal(false);
                    setEditIndex(null);
                    setEditedData(null);
                } else {
                    console.error('Failed to update row:', response.statusText);
                }
            } catch (error) {
                console.error('Error updating row:', error);
            }
        }
    };

    return (
        <div className={`card ${className}`}>
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Charger Location Mapping Overview</span>
                </h3>
                <div
                    className='card-toolbar'
                    data-bs-toggle='tooltip'
                    data-bs-placement='top'
                    data-bs-trigger='hover'
                    title='Click to add a user'
                >
                    <a
                        href='#'
                        className='btn btn-sm btn-light-primary'
                        data-bs-toggle='modal'
                        data-bs-target='#kt_modal_add_row'
                    >
                        <KTIcon iconName='plus' className='fs-3' />
                        New Row
                    </a>
                </div>
            </div>

            <div className='card-body py-3'>
                <div className='table-responsive'>
                    <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                        <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-40px'>External ID</th>
                                <th className='min-w-120px'>Charger ID</th>
                                <th className='max-w-40px'>Connector ID</th>
                                <th className='min-w-160px'>Location</th>
                                <th className='min-w-100px'>External Unit</th>
                                <th className='min-w-100px text-end'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                <React.Fragment key={index}>
                                    <tr>
                                        
                                        <td className='text-dark fw-bold text-hover-primary fs-6'>{row['externalID']}</td>
                                        <td className='text-dark fw-bold text-hover-primary fs-6'>{row['chargerID']}</td>
                                        <td className='text-dark fw-bold text-hover-primary fs-6'>{row['connectorID']}</td>
                                        <td className='text-success fw-bold text-hover-primary fs-6 '>{row['location']}</td>
                                        <td className='text-dark fw-bold text-hover-primary fs-6'>{row['externalUnit']}</td>
                                        <td className='text-end'>
                                            <button
                                                className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1 '
                                                data-bs-toggle='modal'
                                                data-bs-target='#kt_modal_edit_row'
                                                onClick={() => handleEdit(index, row)}
                                            >
                                                <KTIcon iconName='pencil' className='fs-3' />
                                            </button>
                                            <button
                                                className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                                onClick={() => confirmDelete(index)}
                                            >
                                                <KTIcon iconName='trash' className='fs-3' />
                                            </button>
                                        </td>
                                    </tr>
                                    
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export { TablesWidget14 }


// {/* <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                            // <KTIcon iconName='trash' className='fs-3' />
                                        // </a> */}







// const handleDelete = async (index: number) => {
//     try {
//         // Make an API call to the backend to delete the row
//         const response = await fetch(`http://localhost:8000/delete_mapping_data/${index}`, {
//             method: 'DELETE',
//         });

//         if (response.ok) {
//             // If the deletion is successful, update the frontend data
//             const updatedData = [...data];
//             updatedData.splice(index, 1);
//             setData(updatedData);
//         } else {
//             console.error('Failed to delete row:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error deleting row:', error);
//     }
// };
