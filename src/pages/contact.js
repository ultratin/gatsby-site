import React from 'react';
import Head from "../components/head";

import Layout from '../components/layout';
const ContactPage = () => {

  return (
    <div>
      <Layout>
        <Head title="Contact me" />
        <h1>Contact</h1>
        <p>
          The best way to reach me is via <a href="https://twitter.com/@tintinn95" target="_blank">@tintinn95</a> on Twitter!
        </p>
      </Layout>
    </div>
  );
};

export default ContactPage;