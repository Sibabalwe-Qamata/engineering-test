import React from 'react';
import Switch from 'react-mdl/lib/Switch';
import { Route, Link} from 'react-router-dom';
//import landingpage from './landingpage';
import wall from './wall';


const Main = ()  => {
    <Switch>
        <Route exact path="/wall" component={wall}/>
    </Switch>

}

export default Main;