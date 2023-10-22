import * as React from "react";
import { Link, type HeadFC, type PageProps, graphql } from "gatsby";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";

type SiteData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      // you can also add other fields like copyright and siteUrl if needed
    };
  };
};

const IndexPage: React.FC<PageProps<SiteData>> = ({ data }) => {
  console.log("data", data);
  const { title, description } = data.site.siteMetadata;
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Desingn </h2>
          <h3>Develop & Deploy</h3>
          <div>Hellsow</div>
          <Link className={styles.btn} to="/projects">
            My portfolio project
          </Link>
        </div>
        <img
          src="/banner.jfif"
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        copyright
        description
        siteUrl
        title
      }
    }
  }
`;
