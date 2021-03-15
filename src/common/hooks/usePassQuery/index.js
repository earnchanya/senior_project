import { useCallback } from 'react'

import { useHistory } from 'react-router-dom'

import useQuery from '../useQuery'

import buildUrlWithParams from '../../utils/buildUrlWithParams'

export default function usePassQuery() {
	const query = useQuery()
	const history = useHistory()

	const passQuery = useCallback(
		({ params, targetUrl, withOldQuery = true }) => {
			const newQuery = withOldQuery ? { ...query, ...params } : params
			console.log(targetUrl)
			const url = buildUrlWithParams(targetUrl || history.location.pathname, newQuery)
			
			history.push(url)
			console.log(url)
		},
		[history, query],
	)
	return passQuery
}
