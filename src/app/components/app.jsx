import { Toolbar } from './toolbar';
import { Navbar } from './navbar';
import { Feature1Page } from '../../feature1';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Toolbar />
                <Navbar />
                <Feature1Page />
            </div>
        );
    }
}
