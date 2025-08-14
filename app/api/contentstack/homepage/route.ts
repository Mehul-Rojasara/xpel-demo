import { NextRequest, NextResponse } from 'next/server';
import { GraphQLClient, gql } from 'graphql-request';
import { API_MESSAGES } from '@/config/messages';

export async function GET(request: NextRequest) {
  try {
    const endpoint = process.env.CONTENTSTACK_GRAPHQL_ENDPOINT;
    const apiKey = process.env.CONTENTSTACK_API_KEY;
    const deliveryToken = process.env.CONTENTSTACK_DELIVERY_TOKEN;

    // Check if required environment variables are set
    if (!endpoint || !apiKey || !deliveryToken) {
      return NextResponse.json(
        { 
          success: false, 
          ...API_MESSAGES.errors.configurationError
        },
        { status: 503 }
      );
    }

    const client = new GraphQLClient(endpoint, {
      headers: {
        api_key: apiKey,
        access_token: deliveryToken,
      },
    });

    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') || 'en-us';

    const query = gql`
      query MyQuery {
        all_homepage {
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

    const data = await client.request(query);
    
    return NextResponse.json({
      success: true,
      data: data,
      locale: locale
    });
  } catch {
    return NextResponse.json(
      { 
        success: false, 
        ...API_MESSAGES.errors.serviceUnavailable
      },
      { status: 503 }
    );
  }
} 