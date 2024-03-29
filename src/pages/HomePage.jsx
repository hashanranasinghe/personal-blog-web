import Layout from "../components/layouts/Layout";
import BlogPostSection from "../components/sections/blogPostSections/BlogPostSection";
import HeroSection from "../components/sections/heroSection/HeroSection";

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
