import React from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

const RoleDealer = () => (
  <Query
    query={gql`
      {
        roles(lang: {code: "cs"}) {
          code,
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.roles.map(({ code, name }) => (
        <div key={code}>
          <p>{`${code}: ${name}`}</p>
        </div>
      ));
    }}
  </Query>
)

export default RoleDealer
