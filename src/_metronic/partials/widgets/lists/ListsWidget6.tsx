/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from 'react'
import { KTIcon } from '../../../helpers'

type Props = {
  className: string
}

type Notification = {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
  percentageChange: string;
};

const ListsWidget6: React.FC<Props> = ({ className }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const socket = useRef<WebSocket | null>(null);

  useEffect(() => {
    socket.current = new WebSocket('ws://localhost:8000/ws_notifications');

    socket.current.onopen = () => {
      console.log('WebSocket connected');
    };

    socket.current.onmessage = (event) => {
      const receivedNotifications = JSON.parse(event.data);
      console.log('Received notifs:', receivedNotifications);
      // setNotifications(receivedNotifications);
      const lastFiveNotifications = receivedNotifications.slice(-5);
      setNotifications(lastFiveNotifications);
    };

    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, []);

  return (
    <div className='card card-xl-stretch mb-5 mb-xl-8'>
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Notifications</h3>
      </div>
      <div className='card-body pt-0'>
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`d-flex align-items-center ${notification.bgColor} rounded p-5 mb-7`}

          >
            <span className={` ${notification.textColor} me-5`}>
              <KTIcon iconName={notification.icon} className={`${notification.textColor} fs-1 me-5`} />
            </span>

            <div className='flex-grow-1 me-2'>
              <a href='#' className={`fw-bold text-gray-800 text-hover-primary fs-6 ${notification.textColor}`}>
                {notification.title}
              </a>
              <span className={`text-muted fw-semibold d-block ${notification.textColor}`}>
                {notification.description}
              </span>
            </div>
            <span className={`fw-bold ${notification.textColor} py-1`}>{notification.percentageChange}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export { ListsWidget6 }
