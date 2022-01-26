import React, { useState } from 'react'
import millify from 'millify'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = () => {
	const { data: cryptosList, isFetching } = useGetCryptosQuery()
	const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)

	console.log(cryptos)

	return (
		<React.Fragment>
			<Row gutters={[32, 32]} className='crypto-card-container'></Row>
		</React.Fragment>
	)
}

export default Cryptocurrencies
