import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    addNewRow: (newRow: any) => void;
    websocket: any;
    closeModal: () => void;
};

const MappingForm: React.FC<Props> = ({ addNewRow, websocket, closeModal }) => {
    const [tableData, setTableData] = useState([]);
    const [addRow, setAddRow] = useState(false);

    const [newRow, setNewRow] = useState({
        externalID: '',
        chargerID: '',
        connectorID: '',
        location: '',
        externalUnit: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewRow({ ...newRow, [name]: value });
    };

    useEffect(() => {
        websocket.onmessage = (event: MessageEvent) => {
            const newData = JSON.parse(event.data);
            setTableData(newData);
        };

        return () => {
            websocket.onmessage = null;
        };
    }, [websocket]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (websocket && websocket.readyState === WebSocket.OPEN) {
                const response = await fetch('http://localhost:8000/add_mapping_data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newRow),
                });

                if (response.ok) {
                    const responseData = await response.json();
                    console.log('Mapping data added:', responseData);
                    addNewRow(newRow);
                    setAddRow(true)
                    // closeModal();
                    setNewRow({
                        externalID: '',
                        chargerID: '',
                        connectorID: '',
                        location: '',
                        externalUnit: '',
                    });
                    toast.success('Mapping data added successfully!', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                } else {
                    console.error('Failed to add mapping data:', response.statusText);
                }
            } else {
                console.error('WebSocket connection not available.');
            }
        } catch (error) {
            console.error('Error adding mapping data:', error);
        }
    };

    let btn;
    if (newRow.chargerID && newRow.connectorID && newRow.externalID && addRow) {
        btn = <button type="submit" className='btn btn-lg btn-primary' data-bs-dismiss='modal' >Save</button>
    } else {
        btn = <button type="submit" className='btn btn-lg btn-primary'>Save</button>
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='d-flex align-items-center fs-5 fw-bold form-label mb-2'>
                        <span className='required'>External ID</span>
                        <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title="Specify a card holder's name"
                        ></i>
                    </label>
                    <input required className='form-control form-control-solid mb-8' type="text" name="externalID" value={newRow.externalID} onChange={handleInputChange} />
                </div>
                <div>
                    <label className='d-flex align-items-center fs-5 fw-bold form-label mb-2'>
                        <span className='required'>Charger ID</span>
                        <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title="Specify a card holder's name"
                        ></i>
                    </label>
                    <input required className='form-control form-control-solid mb-8' type="text" name="chargerID" value={newRow.chargerID} onChange={handleInputChange} />
                </div>
                <div>
                    <label className='d-flex align-items-center fs-5 fw-bold form-label mb-2'>
                        <span className='required'>Connector ID</span>
                        <i
                            className='fas fa-exclamation-circle ms-2 fs-7'
                            data-bs-toggle='tooltip'
                            title="Specify a card holder's name"
                        ></i>
                    </label>
                    <input required className='form-control form-control-solid mb-8' type="text" name="connectorID" value={newRow.connectorID} onChange={handleInputChange} />
                </div>
                <div>
                    <label className='d-flex align-items-center fs-5 fw-bold mb-2'>Location</label>
                    <input className='form-control form-control-solid mb-8' type="text" name="location" value={newRow.location} onChange={handleInputChange} />
                </div>
                <div>
                    <label className='d-flex align-items-center fs-5 fw-bold mb-2'>External Unit</label>
                    <input className='form-control form-control-solid mb-8' type="text" name="externalUnit" value={newRow.externalUnit} onChange={handleInputChange} />
                </div>
                {/* {newRow.chargerID && newRow.connectorID && newRow.externalID && <button type="submit" className='btn btn-lg btn-primary' data-bs-dismiss='modal' >Save</button> } */}
                {/* {!newRow.chargerID && !newRow.connectorID && !newRow.externalID && <button type="submit" className='btn btn-lg btn-primary'>Save</button>} */}
                {/* <button type="submit" className='btn btn-lg btn-primary' >Save</button> */}
                {btn}
            </form>
        </div>
    );
}

export default MappingForm;

// {/* <button type="submit" className='btn btn-lg btn-primary' data-bs-dismiss='modal' >Save</button>  */}
