import React, {useState, useEffect} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';

import { fetchCountries } from '../../api';


const CountryPicker = ({ handleCountryChange}) => {
const [fetchedCountries, setFetchedCountries] = useState([]);

useEffect(() => {
    const fetchAPI = async () => {
        setFetchedCountries(await fetchCountries());
    }

    fetchAPI();
},[setFetchedCountries]);

//console.log(fetchedCountries);
const myFunction = () => Date().toString().split(' ').splice(1,3).join(' ')
  


    return (
        
        <Container className="py-4">
            <Row>
            <Col md={4}>
    <h6>{myFunction()}</h6>
            </Col>
                <Col md={6} className="ml-auto">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Control as="select" defaultValue="" onChangeCapture={(e) => {handleCountryChange(e.target.value)}}>
                        <option value="">Global</option>
                        {fetchedCountries.map((country, i) =>
                        country.latest_data.confirmed ? (
                            <option key={i} value={country.code}>{country.name}
                            </option>
                        ): null 
                         
                         
                         )}
                    </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    )
}

export default CountryPicker;