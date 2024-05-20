import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getAllPost([]).then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center w-full">
          {posts?.map((post) => (
            <div key={post.$id} className="p-2 w-3/4 md:w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
