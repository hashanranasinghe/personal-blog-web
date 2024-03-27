import "./App.css";
import Layout from "./pages/Layout";
import Header from "./components/sections/heroSection/Hearder";
import BlogPostSection from "./components/sections/blogPostSections/BlogPostSection";
import FooterSection from "./components/sections/FooterSection/FooterSection";
import BlogViewPage from "./pages/BlogViewPage";
function App() {
  return (
    <>
      <Layout>
     

        <Header />
        <BlogPostSection/>
     <BlogViewPage/>
        <FooterSection/>
      </Layout>
    </>
  );
}

export default App;
