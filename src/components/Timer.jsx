import React, { useContext } from 'react'
import { Context } from '..';
import cl from '../styles/Timer.module.css';
import {observer} from 'mobx-react-lite';

const Timer = observer(({newYearDate}) => {
    const {date} = useContext(Context);

  return (
    <div className={cl.content}>
        <div className={cl.timer}>
            <div className={cl.time}>{date.date.toLocaleTimeString()}</div>
            <div className={cl.text}>
                <p>Новогоднее поздравление в настоящее время недоступно.</p>
                <p>Оно будет доступно для просмотра {newYearDate.toLocaleString()}</p>
            </div>
        </div>
    </div>
  );
});

export default Timer