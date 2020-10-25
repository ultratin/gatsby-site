import React from 'react';
import { Link } from 'gatsby';
import Layout from "../components/layout";

const Notfound = () => {
    return (
        <Layout>
            <h1>Page not found</h1>
            <p >Go back to civilization <Link to="/">here</Link></p>
            <p><Link to="https://www.youtube.com/watch?v=6AXPnH0C9UA">I love to count</Link></p>
        </Layout>
    );
};

export default Notfound;