import { API } from 'aws-amplify'
import gql from 'graphql-tag'

const query = gql`
	query getMyProfile {
		getMyProfile {
			backgroundImageUrl
			bio
			birthdate
			createdAt
			followersCount
			followingCount
			id
			imageUrl
			likesCounts
			location
			name
			screenName
			tweetsCount
			website
		}
	}
`

const getMyProfile = async () => {
	const result = await API.graphql({
		query,
		authMode: 'AMAZON_COGNITO_USER_POOLS',
	})
	const profile = result.getMyProfile.data
	profile.imageUrl = profile.imageUrl || 'default_profile.png'
	return profile
}

export { getMyProfile }
