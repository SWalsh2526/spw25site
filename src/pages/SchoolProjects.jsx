import { MainDiv } from '../elements/mainDiv';
import { Link } from 'react-router-dom';
import { Header } from '../elements/header';

function SchoolProjects() {
    return (
        <main className="grid grid-cols-8 gap-4">
          <MainDiv>
            <Header>
                DTC Work
            </Header>
            <Link to="/SchoolProjects/MajorReqsTester">Major Requirements tester</Link> which I hope to eventually integrate into paper.nu.
          </MainDiv>
        </main>
    );
}

export default SchoolProjects
