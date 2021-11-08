import { Col, Row, Statistic, Typography } from 'antd'
import React from 'react'
import millify from 'millify'

const { Title } = Typography;

const Homepage = () => {
    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value='5' /> </Col>
                <Col span={12}><Statistic title='Total Exchanges' value='5' /> </Col>
                <Col span={12}><Statistic title='Market Cap' value='5' /> </Col>
                <Col span={12}><Statistic title='24h Volume' value='5' /> </Col>
                <Col span={12}><Statistic title='Total Market' value='5' /> </Col>
            </Row>
        </>
    )
}

export default Homepage
