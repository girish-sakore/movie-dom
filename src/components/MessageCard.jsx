const MessageCard = ({ title, body }) => (
  <section className="message-card" role="status">
    <h2>{title}</h2>
    <p>{body}</p>
  </section>
);

export default MessageCard;
