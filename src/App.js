import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { GithubOutlined, FacebookFilled } from '@ant-design/icons'

import {
	Navbar,
	Homepage,
	Exchanges,
	Cryptocurrencies,
	CryptoDetails,
	News,
	NoMatch,
} from './components'
import './App.css'

const App = () => {
	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'>
				<Layout>
					<div className='routes'>
						<Switch>
							<Route exact path='/'>
								<Homepage />
							</Route>
							<Route exact path='/exchanges'>
								<Exchanges />
							</Route>
							<Route exact path='/cryptocurrencies'>
								<Cryptocurrencies />
							</Route>
							<Route exact path='/crypto/:coinId'>
								<CryptoDetails />
							</Route>
							<Route exact path='/news'>
								<News />
							</Route>
							<Route exact path='*'>
								<NoMatch />
							</Route>
						</Switch>
					</div>
				</Layout>
				<div className='footer'>
					<Typography.Title
						level={5}
						style={{ color: 'white', textAlign: 'center' }}
					>
						Cryptoverse
						<br />
						All rights reserverd
					</Typography.Title>
					<Space>
						<a
							href='https://github.com/tquann286'
							target='_blank'
							rel='noreferrer'
						>
							<GithubOutlined />
						</a>
						<a
							href='https://www.facebook.com/trung.quann.2806'
							target='_blank'
							rel='noreferrer'
						>
							<FacebookFilled />
						</a>
					</Space>
				</div>
			</div>
		</div>
	)
}

export default App
