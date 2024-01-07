"use server";
import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY, NEXT_PUBLIC_CONNECTION_NAME } =
  process.env;

//   const requestHeaders = {
//     ConnectionName: NEXT_PUBLIC_CONNECTION_NAME,
//   };

const ALL_PRODUCTS = gql`
  query product {
    product(orderBy: [{ column: CREATED_AT, order: DESC }]) {
      ...body
      ...SEO
      ...parent
      ...children
      image {
        hash
      }
    }
  }
  fragment body on Product {
    id
    value
    slug
    key
    created_at
    updated_at
  }
  fragment SEO on Product {
    seoTitle {
      value
    }
    seoDescription {
      value
    }
  }

  fragment parent on Product {
    parent: parentable {
      ... on Category {
        id
        value
      }
    }
  }
  fragment children on Product {
    unit {
      id
      value
    }
  }
`;

export async function getProduct() {
  const variables = {
    key: NEXT_PUBLIC_KEY,
  };
  try {
    return await request(
      NEXT_PUBLIC_GRAPHQL,
      ALL_PRODUCTS,
      variables
      //   requestHeaders
    );
  } catch (error) {
    console.error("Error occurred while fetching category:", error);
    throw error;
  }
}
