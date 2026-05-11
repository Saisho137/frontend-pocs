import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

const LargeContent = () => {
  const { posts, lastPostElementRef, loading } = useInfiniteScroll();

  return (
    <div>
      <h1>Your Feed</h1>
      <section style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
        {posts.map((post, index) => {
          return (
            <article
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                textAlign: "left",
                padding: "16px",
                maxWidth: "300px",
                margin: "20px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
              key={post.id}
              ref={posts.length === index + 1 ? lastPostElementRef : null}
            >
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          );
        })}
      </section>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default LargeContent;
