import React, {useState, useEffect} from 'react';
import {Button2 } from '../elements/button2';
import { MainDiv3 } from '../elements/mainDiv3';
import { MainDiv } from '../elements/mainDiv';
import { Background } from '../elements/background';
import { GrpSelect } from '../elements/grpSelect';
import { Header } from '../elements/header';

const MajorReqsTester = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/CIV_ENV.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
    return (
      <Background>
        <main className="grid grid-cols-8 gap-4">
          <MainDiv>
          <Header>{data.Major}</Header>
          {data.CourseReqs.map(reqs => (
              <MainDiv3 key={reqs.ReqsName}>
                <p className="basis-full">{reqs.ReqsName}</p>
                {reqs.Courses.map(course => (
                  <Button2 key={course}>{course}</Button2>
                ))}
                {reqs.Coreqs.map(coreqs => (
                  <form key={coreqs.CoreqsName}>
                    <label className="text-lg">{coreqs.CoreqsName}</label>
                    <GrpSelect>
                    {coreqs.CoreqsCourses.map(coreqscourse =>
                      <option>{coreqscourse}</option>
                    )}
                    </GrpSelect>
                  </form>
                ))}
              </MainDiv3>
          ))}
          </MainDiv>
        </main>
      </Background>
    );
}

export default MajorReqsTester