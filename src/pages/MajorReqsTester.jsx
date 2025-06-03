import React, {useState, useEffect} from 'react';
import {Button2 } from '../elements/button2';
import { MainDiv3 } from '../elements/mainDiv3';
import { MainDiv } from '../elements/mainDiv';
import { Background } from '../elements/background';
import { GrpSelect } from '../elements/grpSelect';
import { Header } from '../elements/header';
import { Database } from '@sqlitecloud/drivers';

const MajorReqsTester = () => {
  const [data, setData] = useState([]);
  const getCourses = async () => {
    let db = null;
    try {
      db = new Database('sqlitecloud://cx0rr9ufhk.g3.sqlite.cloud:8860?apikey=azJOjZgbnrta8hEq5Xo0F2SwxPCrGFJyZaLmbJ7W9wQ')
      const result = await db.sql(`
        USE DATABASE NUcourses.db;
        SELECT * FROM NU_COURSES LIMIT 20;
        `);
      setData(result);
    } catch (err) {
      console.error('getCourses error - ${err}', err);
    } finally {
      db?.close();
    }
  };
useEffect(() => {
  getCourses();
}, []);
  if (!data) {
    return(
      <Background>
        <div>Loading...</div>
      </Background>
    ); 
  }
    return (
      <Background>
        <main className="grid grid-cols-8 gap-4">
          {data.map((course) => (
            <MainDiv key={course.cid}>
              <strong>{course.Department} {course.Number}</strong>
              <br></br>
              {course.Description}
              </MainDiv>
          ))}
        </main>
      </Background>
    );
}

export default MajorReqsTester