'use server'
import { gql, request } from 'graphql-request'

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY, NEXT_PUBLIC_CONNECTION_NAME } =
  process.env;

const ALL_PRODUCTS = gql`
	query all_product {
		product {
			id
			value
			slug
		}
	}
`

export async function getAllProducts() {
	const url = process.env.NEXT_PUBLIC_GRAPHQL
	const variables = {
		key: NEXT_PUBLIC_KEY,
	}
	return await request(url, ALL_PRODUCTS, variables)
}
