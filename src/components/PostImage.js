import "../App.css";

let postNum = 0;

const PostImage = () => {
  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <label>
          title:
          <input type="text" name="title" />
        </label>
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};
function handleSubmit(e) {
  e.preventDefault();
  const postTitle = e.target[0].value;
  postNum++;
  console.log(`Title: ${postTitle}, the post number is ${postNum}`);
}
export default PostImage;
