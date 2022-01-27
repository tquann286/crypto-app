import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': '806b4ed36bmsh97d96b82cdb67c8p146942jsn2b0952e5ccb0',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
	}),
})

export const {
  useGetCryptosQuery,
} = cryptoApi