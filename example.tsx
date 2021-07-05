import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Switch, Route} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';

const Doc:React.FC=()=>{
    return (
        <>
            <header>
                <img src='./images/2.jpg'/>
                <img src='./images/5.jpg'/>
                <img src='./images/6.png'/>
            </header>
            <Router>
            <aside>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/icon">Icon</Link>
                                </li>
                                <li>
                                    <Link to="/button">Button</Link>
                                </li>
                                <li>
                                    <Link to="/dialog">Dialog</Link>
                                </li>
                                <li>
                                    <Link to="/layout">Layout</Link>
                                </li>
                            </ul>
                        </nav>

                    </div>

            </aside>
            <main>

                <Switch>
                    <Route path="/icon" component={IconExample}>
                    </Route>
                    <Route path="/button" component={ButtonExample}>
                    </Route>
                    <Route path="/dialog" component={DialogExample}>
                    </Route>
                    <Route path="/layout" component={LayoutExample}>
                    </Route>
                    <Route path="/" component={IconExample}>
                    </Route>
                </Switch>

            </main>
            </Router>
        </>
    )
}
ReactDOM.render(<Doc></Doc>,
    document.querySelector('#root'));
