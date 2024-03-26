import "./App.css";
import Layout from "./pages/Layout";
import Header from "./components/sections/heroSection/Hearder";
import BlogPostSection from "./components/sections/blogPostSections/BlogPostSection";
import FooterSection from "./components/sections/FooterSection/FooterSection";
function App() {
  return (
    <>
      <Layout>
     

        <Header />
        <BlogPostSection/>
     
        <FooterSection/>
      </Layout>
    </>
  );
}

export default App;
