import { useState, useEffect } from 'react';

type Props = {
    addNewRow: (newRow: any) => void;
    websocket: any;
    closeModal: () => void;
};

const EditMappingForm: React.FC<Props> = ({ addNewRow, websocket, closeModal }) => {
    const [tableData, setTableData] = useState([]);

    const [rowDataForEditing, setRowDataForEditing] = useState<any>(null);

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
                    closeModal();
                    setNewRow({
                        externalID: '',
                        chargerID: '',
                        connectorID: '',
                        location: '',
                        externalUnit: '',
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

    const handleEditRow = (rowData: any) => {
        // Set the row data to populate the form
        setRowDataForEditing(rowData);

        // You might also want to set the newRow state with the row data here if required
        // setNewRow(rowData);

        // Additional logic if needed when editing a row
    };

    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <div>
                    <label className='d-flex align-items-center fs-5 fw-bold form-label mb-2'>
                        External ID
                    </label>
                    <input required className='form-control form-control-solid mb-8' type="text" name="externalID" value={newRow.externalID} onChange={handleInputChange} />
                </div>
                <div>
                    <label className='d-flex align-items-center fs-5 fw-bold form-label mb-2'>
                        Charger ID
                    </label>
                    <input required className='form-control form-control-solid mb-8' type="text" name="chargerID" value={newRow.chargerID} onChange={handleInputChange} />
                </div>
                <div>
                    <label className='d-flex align-items-center fs-5 fw-bold form-label mb-2'>
                        Connector ID
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
                <button type="submit" className='btn btn-lg btn-primary'  >Save Changes</button>

            </form> */}

            {rowDataForEditing && (
                <form onSubmit={handleSubmit}>
                    {/* Populate inputs with rowDataForEditing */}
                    <div>
                        <label>External ID</label>
                        <input
                            required
                            type="text"
                            name="externalID"
                            value={rowDataForEditing.externalID}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Charger ID</label>
                        <input
                            required
                            type="text"
                            name="chargerID"
                            value={rowDataForEditing.chargerID}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Connector ID</label>
                        <input
                            required
                            type="text"
                            name="connectorID"
                            value={rowDataForEditing.connectorID}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Location</label>
                        <input
                            type="text"
                            name="location"
                            value={rowDataForEditing.location}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>External Unit</label>
                        <input
                            type="text"
                            name="externalUnit"
                            value={rowDataForEditing.externalUnit}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            )}
            {!rowDataForEditing && <p className='text-center text-warning fw-bold' style={{fontSize: '20px'}}>No data for editing</p>}
        </div>
    );
}

export default EditMappingForm;
