import { motion as m } from "framer-motion";
import BlogPostCard from "../../cards/BlogPostCard";
import TopicCard from "../../cards/TopicCard";
import TagCard from "../../cards/TagCard";
import LetsTalkCard from "../../cards/LetsTalkCard";
import PortfolioCard from "../../cards/PortfolioCard";
import { Link } from "react-router-dom";
import PathConstants from "../../../routes/PathConstants";

function BlogPostSection() {
  const sectionVariant = {
    offscreen: {
      opacity: 0,
      y: "20%",
    },
    onscreen: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.0,
      },
    },
  };

  return (
    <m.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: "some" }}
      variants={sectionVariant}
      className="bg-gray-50 py-20 px-20"
      id="project"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-row w-screen">
          <div className="w-3/5 flex flex-col">
            <h1 className="text-gray-600 font-semibold text-3xl pl-5">
              Latest Blog Posts
            </h1>
            {[...Array(10)].map((_, index) => (
              <Link key={index} to={PathConstants.BLOG_VIEW}>
                <div className="flex flex-wrap justify-start items-start gap-x-10 gap-y-5 pt-5 ml-20">
                  <BlogPostCard
                    // handleReadMoreClick={}
                    title="Food Care Mobile App"
                    gitLink=""
                    short="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
                    image="/src/assets/p.jpg"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="flex h-screen w-2/5 justify-start items-center flex-col">
            <h1 className="text-gray-600 font-semibold text-2xl">Topics</h1>
            {[...Array(4)].map((_, index) => (
              <TopicCard key={index} />
            ))}
            <h1 className="text-gray-600 font-semibold text-2xl py-5">Tags</h1>
            <div className="flex flex-wrap gap-1 bg-gray-100 p-5 rounded-lg w-96">
              {[...Array(9)].map((_, index) => (
                <TagCard key={index} />
              ))}
            </div>
            <LetsTalkCard />
            <h1 className="text-gray-600 font-semibold text-2xl py-5">
              Portfolio
            </h1>
            <PortfolioCard />
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default BlogPostSection;
