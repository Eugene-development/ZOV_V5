import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY, NEXT_PUBLIC_CONNECTION_NAME } =
  process.env;

const ONE_PRODUCT = gql`
  query product($slug: String!, $key: String!) {
    product_one(slug: $slug, key: $key) {
      id
      value
      slug
      text {
        value
      }
      image {
        hash
      }
      seoTitle {
        value
      }
      seoDescription {
        value
      }
      parent: parentable {
        ... on Category {
          value
          slug
        }
      }
    }
  }
`;

export async function getOneProduct({ params }) {
  const url = process.env.NEXT_PUBLIC_GRAPHQL;
  const variables = {
    key: NEXT_PUBLIC_KEY,
    slug: params.slug,
  };

  try {
    return await request(url, ONE_PRODUCT, variables);
  } catch (error) {
    console.error("Error occurred while fetching category:", error);
    throw error;
  }
}
