import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.tarkov.dev/graphql",
  cache: new InMemoryCache(),
});

export const GET_MAPS = gql`
  query {
    maps {
      id
      name
      normalizedName
      wiki
      enemies
      description
      raidDuration
      players
      bosses {
        boss {
          id
          name
        }
        spawnChance
        spawnLocations {
          name
        }
        escorts {
          boss {
            name
          }
          amount {
            count
            chance
          }
        }
      }
    }
  }
`;
export default client;
