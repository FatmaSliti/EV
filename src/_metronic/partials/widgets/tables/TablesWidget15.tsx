// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useEffect, useState, useRef } from 'react';
// // import { KTIcon } from '../../../helpers';

// type Transaction = {
//     ChargerID: string;
//     ConnectorID: string;
//     TransactionID: string;
//     StartTime: string;
//     TotalConsumption: number;
//     TransactionStatus: string;
// };

// type Props = {
//     className: string;
// };

// function getStatusBadgeColor(status) {
//     switch (status) {
//         case 'Available':
//         case 'Preparing':
//             return 'badge badge-light-success';
//         case 'Charging':
//             return 'badge badge-light-primary';
//         case 'SuspendedEVSE':
//         case 'SuspendedEV':
//             return 'badge badge-light-warning';
//         case 'Finishing':
//             return 'badge badge-light-dark';
//         case 'Reserved':
//             return 'badge badge-light-info';
//         case 'Unavailable':
//             return 'badge badge-light-secondary';
//         case 'Faulted':
//             return 'badge badge-light-danger';
//         default:
//             return 'badge badge-light-primary';
//     }
// }

// const TablesWidget15: React.FC<Props> = ({ className }) => {
//     const [transactions, setTransactions] = useState<Transaction[]>([]);
//     const ws = useRef<WebSocket | null>(null);

//     useEffect(() => {
//         ws.current = new WebSocket('ws://localhost:8000/ws_data');

//         ws.current.onopen = () => {
//             console.log('WebSocket connected');
//         };

//         ws.current.onmessage = (event) => {
//             try {
//                 const newData = JSON.parse(event.data);
//                 setTransactions((prevTransactions) => [...newData]);
//             } catch (error) {
//                 console.error('Error parsing message:', error);
//             }
//         };

//         ws.current.onclose = () => {
//             console.log('WebSocket closed');
//         };

//         return () => {
//             if (ws.current) {
//                 ws.current.close();
//             }
//         };
//     }, []);

//     return (
//         <div className={`card ${className}`}>
//             <div className='card-header border-0 pt-5'>
//                 <h3 className='card-title align-items-start flex-column'>
//                     <span className='card-label fw-bold fs-3 mb-1'>Active Transaction</span>
//                 </h3>
//             </div>

//             <div className='card-body py-3'>
//                 <div className='table-responsive'>
//                     <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
//                         <thead>
//                             <tr className='fw-bold text-muted'>
//                                 <th className='min-w-140px'>Charger ID</th>
//                                 <th className='min-w-120px'>Connector ID</th>
//                                 <th className='min-w-120px'>Transaction ID</th>
//                                 <th className='min-w-120px'>Start Time</th>
//                                 <th className='min-w-120px'>Total Consumption</th>
//                                 <th className='min-w-120px'>Transaction Status</th>
//                                 <th className='min-w-100px text-end'>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {transactions.map((transaction, index) => (
//                                 <tr key={index}>
//                                     <td className='text-dark fw-bold text-hover-primary fs-6'>{transaction.ChargerID}</td>
//                                     <td className='text-dark fw-bold text-hover-primary fs-6'>{transaction.ConnectorID}</td>
//                                     <td className='text-dark fw-bold text-hover-primary fs-6'>{transaction.TransactionID}</td>
//                                     <td className='text-dark fw-bold text-hover-primary fs-6'>{transaction.StartTime}</td>
//                                     <td className='text-dark fw-bold text-hover-primary fs-6'>{transaction.TotalConsumption}</td>
//                                     {/* <td>
//                                         <span className='badge badge-light-warning'>{transaction.TransactionStatus}</span>
//                                     </td> */}
//                                     <td>
//                                         <span className={getStatusBadgeColor(transaction.TransactionStatus)}>
//                                             {transaction.TransactionStatus}
//                                         </span>
//                                     </td>
//                                     <td className='text-end'>
//                                         <button className='btn   me-1' >
//                                             <i className='fas fa-pause text-dark'></i>
//                                         </button>
//                                         <button className='btn   me-1' >
//                                             <i className='fas fa-play text-success'></i>
//                                         </button>
//                                         <button className='btn  me-1' >
//                                             <i className='fas fa-stop text-danger'></i>
//                                         </button>
//                                         <button className='btn ' >
//                                             <i className='fas fa-sync-alt text-gray'></i>
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export { TablesWidget15 }

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
// import { KTIcon } from '../../../helpers';
import { setTransactions } from '../../../../redux/actions/transactionActions';

type Transaction = {
    ChargerID: string;
    ConnectorID: string;
    TransactionID: string;
    StartTime: string;
    TotalConsumption: number;
    ActualTransaction: number;
    TransactionStatus: string;
};

type Props = {
    className: string;
};

function getStatusBadgeColor(status) {
    switch (status) {
        case 'Available':
        case 'Preparing':
            return 'badge badge-light-success';
        case 'Charging':
            return 'badge badge-light-primary';
        case 'SuspendedEVSE':
        case 'SuspendedEV':
            return 'badge badge-light-warning';
        case 'Finishing':
            return 'badge badge-light-dark';
        case 'Reserved':
            return 'badge badge-light-info';
        case 'Unavailable':
            return 'badge badge-light-secondary';
        case 'Faulted':
            return 'badge badge-light-danger';
        default:
            return 'badge badge-light-primary';
    }
}

const handleButtonClick = async (action, chargerID, connectorID, transactionID) => {
    try {
        const response = await fetch('/backend_endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action,
                chargerID,
                connectorID,
                transactionID
            }),
        });
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error('Error:', error);
    }
};

const TablesWidget15: React.FC<Props> = ({ className }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const ws = useRef<WebSocket | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        ws.current = new WebSocket('ws://localhost:8000/ws_data');

        ws.current.onopen = () => {
            console.log('WebSocket connected');
        };

        ws.current.onmessage = (event) => {
            try {
                const newData = JSON.parse(event.data);
                dispatch(setTransactions(newData) as any); // Dispatch action to update Redux store
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        };

        ws.current.onclose = () => {
            console.log('WebSocket closed');
        };

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, [dispatch]);

    return (
        <div className={`card ${className}`}>
            <div className='card-header border-0 pt-5'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bold fs-3 mb-1'>Active Transaction</span>
                </h3>
            </div>

            <div className='card-body py-3'>
                <div className='table-responsive'>
                    <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                        <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-140px'>Charger ID</th>
                                <th className='min-w-120px'>Connector ID</th>
                                <th className='min-w-120px'>Transaction ID</th>
                                <th className='min-w-120px'>Start Time</th>
                                <th className='min-w-120px'>Total Consumption</th>
                                <th className='min-w-120px'>Transaction Status</th>
                                <th className='min-w-120px'>Actual Transaction</th>
                                <th className='min-w-100px text-end'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <tr key={index}>
                                    <td className='text-dark fw-bold text-hover-primary fs-6'>{transaction.ChargerID}</td>
                                    <td className='text-dark fw-bold text-hover-primary fs-6'>{transaction.ConnectorID}</td>
                                    <td className='text-dark fw-bold text-hover-primary fs-6'>{transaction.TransactionID}</td>
                                    <td className='text-dark fw-bold text-hover-primary fs-6'>{transaction.StartTime}</td>
                                    <td className='text-dark fw-bold text-hover-primary fs-6'>{transaction.TotalConsumption}</td>
                                    <td className='text-dark fw-bold text-hover-primary fs-6'>{transaction.ActualTransaction}</td>
                                    {/* <td>
                                        <span className='badge badge-light-warning'>{transaction.TransactionStatus}</span>
                                    </td> */}
                                    <td>
                                        <span className={getStatusBadgeColor(transaction.TransactionStatus)}>
                                            {transaction.TransactionStatus}
                                        </span>
                                    </td>
                                    <td className='text-end'>
                                        {/* <button className='btn me-1' >
                                            <i className='fas fa-pause text-dark' ></i>
                                        </button>
                                        
                                        <button className='btn   me-1' >
                                            <i className='fas fa-play text-success'></i>
                                        </button>
                                        <button className='btn  me-1' >
                                            <i className='fas fa-stop text-danger'></i>
                                        </button>
                                        <button className='btn ' >
                                            <i className='fas fa-sync-alt text-gray'></i>
                                        </button> */}
                                        <button
                                            className='btn me-1'
                                            onClick={() => handleButtonClick('pause', transaction.ChargerID, transaction.ConnectorID, transaction.TransactionID)}
                                        >
                                            <i className='fas fa-pause text-dark'></i>
                                        </button>
                                        <button
                                            className='btn me-1'
                                            onClick={() => handleButtonClick('start', transaction.ChargerID, transaction.ConnectorID, transaction.TransactionID)}
                                        >
                                            <i className='fas fa-play text-success'></i>
                                        </button>
                                        <button
                                            className='btn me-1'
                                            onClick={() => handleButtonClick('stop', transaction.ChargerID, transaction.ConnectorID, transaction.TransactionID)}
                                        >
                                            <i className='fas fa-stop text-danger'></i>
                                        </button>
                                        <button
                                            className='btn'
                                            onClick={() => handleButtonClick('refresh', transaction.ChargerID, transaction.ConnectorID, transaction.TransactionID)}
                                        >
                                            <i className='fas fa-sync-alt text-gray'></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export { TablesWidget15 }
