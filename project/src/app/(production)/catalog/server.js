"use server";
import { gql, request } from "graphql-request";

const { NEXT_PUBLIC_GRAPHQL, NEXT_PUBLIC_KEY, NEXT_PUBLIC_CONNECTION_NAME } =
  process.env;

//   const requestHeaders = {
//     ConnectionName: NEXT_PUBLIC_CONNECTION_NAME,
//   };

const CATEGORY_ONE = gql`
  query category($slug: String!, $key: String!) {
    category_one(slug: $slug, key: $key) {
      value
      seoTitle {
        value
      }
      seoDescription {
        value
      }
      product {
        value
        slug
        image {
          hash
        }
      }
    }
  }
`;

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

export async function getOneCategory({ params }) {
  const variables = {
    key: NEXT_PUBLIC_KEY,
    slug: params.slug,
  };
  try {
    return await request(NEXT_PUBLIC_GRAPHQL, CATEGORY_ONE, variables);
  } catch (error) {
    console.error("Error occurred while fetching category:", error);
    throw error;
  }
}

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
