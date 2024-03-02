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

export const GET_TASKS = gql`
  query {
    tasks {
      name
      wikiLink
      objectives {
        description

        maps {
          name
        }
      }
      minPlayerLevel
      map {
        name
      }
      startRewards {
        items {
          item {
            name
          }
          count
        }
      }
    }
  }
`;
export default client;
