/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../helpers'

type Props = {
  className: string
}

type ChargeEntry = {
  user: string;
  chargerID: string;
  connectorID: string;
  actualConsumption: number;
};

const TablesWidget9: React.FC<Props> = ({ className }) => {
  const [chargeData, setChargeData] = useState<ChargeEntry[]>([]);

  useEffect(() => {
    const socket = new WebSocket('ws://127.0.0.1:8000/ws_charging_table');

    socket.onopen = (event) => {
      console.log('WebSocket connected');
    };

    socket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setChargeData(newData); // Update charge data upon receiving from WebSocket
    };

    socket.onclose = (event) => {
      console.log('WebSocket closed');
    };

    // Clean up the WebSocket connection when unmounting
    return () => {
      socket.close();
    };
  }, []);

  const getColorForProgress = (progress) => {
    switch (true) {
      case progress >= 0 && progress <= 10:
        return '#FF0000'; // Red for 0-10%
      case progress > 10 && progress <= 20:
        return '#FF4500'; // OrangeRed for 11-20%
      case progress > 20 && progress <= 30:
        return '#FFA500'; // Orange for 21-30%
      case progress > 30 && progress <= 40:
        return '#FFD700'; // Gold for 31-40%
      case progress > 40 && progress <= 50:
        return '#FFFF00'; // Yellow for 41-50%
      case progress > 50 && progress <= 60:
        return '#ADFF2F'; // GreenYellow for 51-60%
      case progress > 60 && progress <= 70:
        return '#32CD32'; // LimeGreen for 61-70%
      case progress > 70 && progress <= 80:
        return '#008000'; // Green for 71-80%
      case progress > 80 && progress <= 90:
        return '#006400'; // DarkGreen for 81-90%
      case progress > 90 && progress <= 100:
        return '#000080'; // Navy for 91-100%
      default:
        return '#000000'; // Default color for other ranges
    }
  };

  const avatarImages = [
    '/media/avatars/300-1.jpg',
    '/media/avatars/300-2.jpg',
    '/media/avatars/300-3.jpg',
    '/media/avatars/300-4.jpg',
    '/media/avatars/300-5.jpg',
    '/media/avatars/300-6.jpg',
  ];

  const getRandomImage = () => {
    // Get a random index within the range of available images
    const randomIndex = Math.floor(Math.random() * avatarImages.length);
    return avatarImages[randomIndex];
  };

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Charge in progress</span>
        </h3>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            <thead>
              <tr className='fw-bold text-muted'>
                <th className='min-w-150px'>User</th>
                <th className='min-w-140px'>Charger ID</th>
                <th className='min-w-140px'>Connector ID</th>
                <th className='min-w-120px'> Actual Consumption</th>
                <th className='min-w-100px text-end'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {chargeData.map((entry, index) => (
                <tr key={index}>
                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-45px me-5'>
                        <img src={toAbsoluteUrl(getRandomImage())} alt='' />
                      </div>
                      <div className='d-flex justify-content-start flex-column'>
                        <a className='text-dark fw-bold text-hover-primary fs-6'>{entry.user}</a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                      {entry.chargerID}
                    </span>
                  </td>
                  <td>
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                      {entry.connectorID}
                    </span>
                  </td>
                  <td className='text-end'>
                    <div className='d-flex flex-column w-100 me-2'>
                      <div className='d-flex flex-stack mb-2'>
                        <span className='text-muted me-2 fs-7 fw-semibold'>{entry.actualConsumption}%</span>
                      </div>
                      <div className='progress h-6px w-100'>
                        <div
                          className='progress-bar'
                          role='progressbar'
                          style={{ width: `${entry.actualConsumption}%`, backgroundColor: getColorForProgress(entry.actualConsumption) }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className='d-flex justify-content-end flex-shrink-0'>
                      <a className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                        <KTIcon iconName='pencil' className='fs-3' />
                      </a>
                      <a className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                        <KTIcon iconName='trash' className='fs-3' />
                      </a>
                    </div>
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

export { TablesWidget9 }
