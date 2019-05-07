import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <Mutation
        mutation={gql`
          mutation {
            login(input: { email: "mauro@md.com", password: "password" }) {
              id
              email
            }
          }
        `}
      >
        {mutate => (
          <button
            onClick={async () => {
              const response = await mutate();
              console.log(response);
            }}
          >
            call login mutation
          </button>
        )}
      </Mutation>
    </Layout>
  );
};

export default IndexPage;
