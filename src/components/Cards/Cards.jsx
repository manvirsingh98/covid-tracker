import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed,active, recovered, deaths, updated_at,critical } }) => {
    if (!confirmed) {
      return 'Loading...';
    }
    return (
        <Container className="mb-5">          
            <Row>
            {active ? (
                <Col md={3} className="d-flex">
                    
                        <Card  className={`border-0 ${styles.active} ${styles.textGray600}  w-100`}>
                        <Card.Body>
                            <Card.Title className={styles.titleFont}>Active</Card.Title>
                            <Card.Title className={`text-white mb-3 ${styles.titleStatus}`}>
                               
                                <CountUp
                                start={0}
                                end={active || 0} 
                                duration={2}
                                separator=","
                                />
                                
                            </Card.Title>
                            <Card.Subtitle className="mb-3 text-white">{new Date(updated_at).toDateString()}</Card.Subtitle>
                            <Card.Subtitle >Number of active cases of COVID-19</Card.Subtitle>

                        </Card.Body>
                    </Card>

                    
                    
                </Col>
                ): 
                <Col md={3} className="d-flex">
                    
                        <Card  className={`border-0 ${styles.critical}  ${styles.criticalText}  w-100`}>
                        <Card.Body>
                            <Card.Title className={`${styles.titleFont}`}>Critical</Card.Title>
                            <Card.Title className={`text-white mb-3 ${styles.titleStatus}`}>
                               
                                <CountUp
                                start={0}
                                end={critical || 0} 
                                duration={2}
                                separator=","
                                />
                                
                            </Card.Title>
                            <Card.Subtitle className="mb-3 text-white">{new Date(updated_at).toDateString()}</Card.Subtitle>
                            <Card.Subtitle >Number of critical cases of COVID-19</Card.Subtitle>

                        </Card.Body>
                    </Card>

                    
                    
                </Col>
                    }
                <Col md={3} className="d-flex">
                    <Card className={`border-0 ${styles.confirmed} ${styles.textGray700} w-100`}>
                        <Card.Body>
                            <Card.Title className={styles.titleFont}>Infected</Card.Title>
                            <Card.Title className={`mb-3 text-white ${styles.titleStatus}`}>
                            <CountUp
                                start={0}
                                end={confirmed} 
                                duration={2}
                                separator=","
                                />
                                </Card.Title>
                                <Card.Subtitle className="mb-3 text-white">{new Date(updated_at).toDateString()}</Card.Subtitle>
                            <Card.Subtitle >Number of infected cases of COVID-19</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="d-flex">
                    <Card className={`border-0 ${styles.recovered} ${styles.textGreen800} w-100`}>
                        <Card.Body>
                            <Card.Title className={styles.titleFont}>Recovered</Card.Title>
                            <Card.Title className={`mb-3 text-white ${styles.titleStatus}`}>
                            <CountUp
                                start={0}
                                end={recovered} 
                                duration={2}
                                separator=","
                                />
                            </Card.Title>
                            <Card.Subtitle className="mb-3 text-white">{new Date(updated_at).toDateString()}</Card.Subtitle>
                            <Card.Subtitle >Number of recoveries from COVID-19</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="d-flex">
                    <Card className={`border-0 ${styles.deaths} ${styles.textRed700} w-100`}>
                        <Card.Body>
                            <Card.Title className={styles.titleFont}>Deaths</Card.Title>
                            <Card.Title className={`mb-3 text-white ${styles.titleStatus}`}>
                            <CountUp
                                start={0}
                                end={deaths} 
                                duration={2}
                                separator=","
                                />
                            </Card.Title>
                            <Card.Subtitle className="mb-3 text-white">{new Date(updated_at).toDateString()}</Card.Subtitle>
                            <Card.Subtitle >Number of deaths caused by COVID-19</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
           
        </Container>
    )
}

export default Info;