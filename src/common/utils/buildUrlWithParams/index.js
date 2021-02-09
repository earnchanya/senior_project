import qs from 'qs'

export default function buildUrlWithParams(path, query) {
	const queryString = qs.stringify(query, {
		encode: true,
		arrayFormat: 'repeat',
	})

	return queryString ? `${path}?${queryString}` : path
}
