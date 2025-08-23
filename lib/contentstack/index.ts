import { GraphQLClient, gql } from 'graphql-request';

export interface PageContent {
  readonly title: string;
  readonly content: string;
  readonly metaTitle?: string;
  readonly metaDescription?: string;
  readonly slug: string;
  readonly locale: string;
}

export interface HomepageData {
  readonly title: string;
  readonly description: string;
  readonly modular_blocks: ReadonlyArray<{
    readonly __typename: string;
    readonly mill?: {
      readonly hero: {
        readonly cta_link: {
          readonly href: string;
          readonly title: string;
        };
        readonly cta_text: string;
        readonly subtitle: string;
        readonly title: string;
      };
    };
  }>;
  readonly system: {
    readonly locale: string;
    readonly publish_details: {
      readonly user: string;
      readonly variants: Array<{
        readonly locale: string;
        readonly user: string;
      }>;
    };
    readonly tags: string[];
  };
}

const apiKey = process.env.CONTENTSTACK_API_KEY as string;
const deliveryToken = process.env.CONTENTSTACK_DELIVERY_TOKEN as string;
const endpoint = `${process.env.CONTENTSTACK_ENDPOINT}/${apiKey}?environment=${process.env.CONTENTSTACK_ENVIRONMENT}` as string;

const client = new GraphQLClient(endpoint, {
  headers: {
    access_token: deliveryToken,
    api_key: apiKey,
  },
});

export async function getHomepageData(locale: string): Promise<HomepageData | null> {
  const query = gql`
    query GetHomepage($locale: String!) {
      all_homepage(locale: $locale) {
        items {
          modular_blocks {
            ... on HomepageModularBlocksMill {
              __typename
              mill {
                hero {
                  cta_link {
                    href
                    title
                  }
                  cta_text
                  subtitle
                  title
                }
              }
            }
          }
          description
          system {
            locale
            publish_details {
              user
              variants {
                locale
                user
              }
            }
            tags
          }
          title
        }
        total
      }
    }
  `;

  const variables = {
    locale: locale,
  };

  try {
    const data = await client.request(query, variables) as { all_homepage: { items: HomepageData[]; total: number } };
    return data.all_homepage.items[0] || null;
  } catch (error) {
    // Log error for debugging (server-side only)
    console.error('Error fetching homepage data from Contentstack GraphQL:', error);
    return null;
  }
}

export async function getPageContent(country: string, language: string, slug: string): Promise<PageContent | null> {
  // Adjust contentTypeUid and field names as per your Contentstack schema
  const query = gql`
    query GetPage($slug: String!, $locale: String!) {
      all_page(where: { url: $slug }, locale: $locale) {
        items {
          title
          content
          meta_title
          meta_description
          url
        }
      }
    }
  `;

  const variables = {
    slug: `/${slug}`,
    locale: language,
  };

  try {
    const data = await client.request(query, variables) as { all_page: { items: unknown[] } };
    const page = data.all_page.items[0] as { title: string; content: string; meta_title: string; meta_description: string; url: string } | undefined;
    if (!page) return null;
    return {
      title: page.title,
      content: page.content,
      metaTitle: page.meta_title,
      metaDescription: page.meta_description,
      slug: page.url,
      locale: language,
    };
  } catch (error) {
    // Log error for debugging (server-side only)
    console.error('Error fetching page content from Contentstack GraphQL:', error);
    return null;
  }
}

export async function getAboutUsContent(country: string, language: string, slug: string, uid?: string){
  // Query for single about us page entry by UID
  const query = gql`
    query GetAboutUsPageDemo($uid: String!, $locale: String!) {
      about_us_demo(uid: $uid, locale: $locale) {
        title
        json_rte {
          json
        }
        json_rich_text_editor_2 {
          json
        }
      }
    }
  `;

  const variables = {
    uid: uid,
    locale: language,
  };

  try {
    const data = await client.request(query, variables) as {
      about_us_demo?: {
        title: string;
        json_rte?: { json: string };
        json_rich_text_editor_2?: { json: string };
        meta_title?: string;
        meta_description?: string;
        url?: string;
      }
    };

    if (data?.about_us_demo) {
      const page = data.about_us_demo;
      return {
        title: page.title,
        content: {
         json_rte:  page.json_rte?.json,
         json_rte_2: page.json_rich_text_editor_2?.json ?? '',},
        metaTitle: page.meta_title,
        metaDescription: page.meta_description,
        slug: page.url ?? slug,
        locale: language,
      };
    }
    return null;
  } catch (error) {
    // Log error for debugging (server-side only)
    console.error('Error fetching about us content from Contentstack GraphQL:', error);
    return null;
  }
}

export async function getContentstackData(contentType: string): Promise<unknown> {
  // You can add more generic queries here as needed
  return { contentType, message: 'Data not implemented yet' };
} 