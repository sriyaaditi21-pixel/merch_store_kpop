import { useEffect, useState } from "react";

function Comments() {

  const [comments, setComments] =
    useState([]);

  useEffect(() => {

    fetch(
      "https://dummyjson.com/comments"
    )
      .then((response) =>
        response.json()
      )
      .then((data) =>
        setComments(data.comments)
      )
      .catch((error) =>
        console.log(error)
      );

  }, []);

  return (
    <div className="api-page">

      <h2>💜 Customer Reviews</h2>

      {comments
        .slice(0, 10)
        .map((comment) => (

        <div
          className="api-card"
          key={comment.id}
        >

          <h3>
            ⭐⭐⭐⭐⭐
          </h3>

          <p>
            {comment.body}
          </p>

          <small>
            Reviewer ID:
            {" "}
            {comment.user?.id}
          </small>

        </div>

      ))}

    </div>
  );
}

export default Comments;