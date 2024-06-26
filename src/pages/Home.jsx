import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getAllPost().then((posts) => {
      console.log(posts.documents);
      if (posts) setPosts(posts.documents);
    });
    return () => {};
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h2 className="text-2xl font-bold hover:text-gray-400">
                Login to read posts
              </h2>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center w-full">
          {posts?.map((post) => {
            return (
              <div className="p-2 w-3/4 md:w-1/4" key={post.$id}>
                <PostCard {...post} />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Home;
