import { MainDiv } from '../elements/mainDiv';
import { Link } from 'react-router-dom';
import MajorReqsTester from './MajorReqsTester';
import { Header } from '../elements/header';

function SchoolProjects() {
    return (
        <main className="grid grid-cols-8 gap-4">
          <MainDiv>
            <Header>
                DTC Work
            </Header>
            <Link to="/MajorReqsTester">Major Requirements tester</Link> which I hope to eventually integrate into paper.nu.
            <Link to="/NewCAESARExample">A page</Link> from a new CAESAR design our team made.
          </MainDiv>
        </main>
    );
}

export default SchoolProjects
