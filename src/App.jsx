import "./App.css";
import Layout from "./pages/Layout";
import Header from "./components/sections/heroSection/Hearder";
import BlogPostSection from "./components/sections/blogPostSections/BlogPostSection";
function App() {
  return (
    <>
      <Layout>
        <Header />
        <BlogPostSection/>
      </Layout>
    </>
  );
}

export default App;
