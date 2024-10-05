import { useEffect, useState } from "react";
import { fetchPosts } from "../API/api";

export const FetchOld = () => {
  const [posts, setPosts] = useState([]);

  const getPostsData = async () => {
    try {
      const res = await fetchPosts();
      //console.log(res.data);
      res.status === 200 ? setPosts(res.data) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  useEffect(() => {
    getPostsData();
  }, []);

  // Define the color sequence
  const colors = ["#11CBD7", "#FA4659", "#7E49AC", "#E760BF", "#FBF46D", "#B4FE98", "#E6D2AA", "#E8B86D"];

  return (
    <>
      <div className="container p-3">
        <div className="row g-3">
          {posts?.map((curElem, index) => {
            const { id, title, body } = curElem;
            return (
              <>
                <div className="col-3" key={id}>
                  <div className="card">
                    <h5 className="card-header" style={{ background: colors[index % 8] }}>
                      &nbsp;
                    </h5>
                    <div className="card-body">
                      <h5 className="card-title text-truncate">{title}</h5>
                      <p className="card-text textlength-3">{body}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
