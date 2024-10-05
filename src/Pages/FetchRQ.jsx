import { NavLink } from "react-router-dom";
import { fetchPosts } from "../API/api";
import { useQuery } from "@tanstack/react-query";

export const FetchRQ = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError.message || "Something went wrong"}</p>;

  // Define the color sequence
  const colors = ["#11CBD7", "#FA4659", "#7E49AC", "#E760BF", "#FBF46D", "#B4FE98", "#E6D2AA", "#E8B86D"];

  return (
    <>
      <div className="container p-3">
        <div className="row g-3">
          {data?.map((curElem, index) => {
            const { id, title, body } = curElem;
            return (
              <>
                <div className="col-3" key={id}>
                  <NavLink to={`/rq/${id}`}>
                    <div className="card">
                      <h5 className="card-header" style={{ background: colors[index % 8] }}>
                        &nbsp;
                      </h5>
                      <div className="card-body">
                        <h5 className="card-title text-truncate">{title}</h5>
                        <p className="card-text textlength-3">{body}</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
