import Layout from "src/core/layouts/Layout";
import { BlitzPage } from "@blitzjs/next";

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div>
        <h1 className="text-3xl font-bold underline bg-gray-500">Hello world!</h1>
      </div>
    </Layout>
  );
};

export default Home;
