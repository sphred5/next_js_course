import { useState, useEffect, useContext } from 'react';
import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context.js';

function Comments(props) {
  const { eventId } = props;
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const notificationCtx = useContext(NotificationContext);
  
  useEffect(() => {
    if(showComments){
     setIsLoading(true); 
      fetch(`/api/comments/${eventId}`)
      .then(response => response.json())
      .then(data => {
        setIsLoading(false)
        setComments(data.comments)
      })
    }
  }, [showComments, eventId ]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {

    notificationCtx.showNotification({
      title: 'Sending comment..',
      message: "Your comment is being stored into a database",
      status: "pending"
    })

    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if(response.ok){
      return response.json()
      } 
    return response.json().then(data => {
        throw new Error(data.message || 'Something went wrong');
    });
  })
    .then(data => {
     notificationCtx.showNotification({
          title: 'Success',
          message: 'Added Comment',
          status: 'success'
        })
      console.log(data)
    }).catch( error => {
      notificationCtx.showNotification({
          title: 'Error',
          message: error.message || 'Something went wrong',
          status: 'error'
        })
    })
  }

  if(isLoading){
    return <p>Loading...</p>;
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && comments && <CommentList items={comments} />}
    </section>
  );
}

export default Comments;
