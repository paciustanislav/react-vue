
function Post ({ text, liked, like, remove }) {

  const classList = liked ? 'icon red' : 'icon'

  return (
    <div>
      <div className="row">
        <div className="post">
          <div className="body row">
            <div className="row">
              { text }
            </div>
          </div>
          <hr/>
          <div className="footer row flex justify-end">
            <div className="row">
              <button className="icon" onClick={remove}>
                <i className="uil uil-times"></i>
              </button>
            </div>
            <div className="row">
              <button className={classList} onClick={like}>
                <i className="uil uil-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
