import { motion as m } from "framer-motion";
import BlogPostCard from "../../cards/BlogPostCard";
import TopicCard from "../../cards/TopicCard";

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
          <div className="flex flex-row h-screen w-screen">
            <div className="h-screen w-3/4 flex flex-col">
            <h1 className="text-gray-600 font-semibold text-3xl pl-5">
              Latest Blog Posts
            </h1>
              {[...Array(10)].map((_, index) => (
                <div
                  className="flex flex-wrap justify-start items-start gap-x-10 gap-y-5 pt-5 ml-20"
                  key={index}
                >
                  <BlogPostCard
                    // handleReadMoreClick={}
                    title="Food Care Mobile App"
                    gitLink=""
                    short="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
                    image="/src/assets/p.jpg"
                  />
                </div>
              ))}
            </div>
            <div className="flex h-screen w-1/4 justify-start items-center flex-col">
            <h1 className="text-gray-600 font-semibold text-2xl">
              Topics
            </h1>
            <TopicCard/>
            </div>
          </div>
        </div>
      
    </m.div>
  );
}

export default BlogPostSection;
