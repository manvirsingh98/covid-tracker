import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import './App.module.css';
import { fetchData } from './api';
//import logo from './images/logo.jpg';


class App extends React.Component {

    state = {
        data: {},
        country:'',
      }

    async componentDidMount () {
        const data = await fetchData();
        this.setState({ data });
        //console.log(data);
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
        this.setState({ data, country });

    }

    render() {
        const { data, country } = this.state;
        return (
            <div>
                {/* <div className="row">
                    <div className="col-md-8">
                    <img src={logo} />
                    </div>
                </div> */}

               <CountryPicker handleCountryChange={this.handleCountryChange}/>
               <Cards data={data} />
               <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;