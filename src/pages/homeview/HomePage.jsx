import Layout from "../../components/layouts/Layout";
import BlogPostSection from "./blogPostSections/BlogPostSection";
import HeroSection from "../../components/sections/heroSection/HeroSection";

function HomePage() {
  return (
    <>
      <Layout>
        <HeroSection/>
        <BlogPostSection />
      </Layout>
    </>
  );
}

export default HomePage;
