import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { fetchInvPost } from "../../API/api";

export const FetchIndv = () => {
  const { id } = useParams();
  const { data, isPending, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchInvPost(id),
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError.message || "Something went wrong"}</p>;

  return (
    <>
      <div className="container">
        <div className="card text-center">
          <div className="card-header">{data.id}</div>
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.body}</p>
            <NavLink to="/rq">
              <button className="btn btn-primary">Go Back</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
