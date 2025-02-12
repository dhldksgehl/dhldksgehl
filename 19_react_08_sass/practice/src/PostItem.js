const PostItem = (props) => {
  // props
  // props => { post : {id: x, title:xxx, body:xxx} }
  console.log(props);
  const { post } = props;
  // post => {id:x, title:xxx, body:xxx}

  return (
    <>
      <div className="PostItem">
        <div>
          <span className="id">No.{post.id}</span>
          <span className="title"> - {post.title}</span>
        </div>
        <p className="body">{post.body.slice(0, 120)}...</p>
      </div>
    </>
  );
};

export default PostItem;
