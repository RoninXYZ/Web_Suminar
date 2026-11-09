

import { useState, useEffect } from "react";
import "./Detailing.css";

// Fake REST API
const API_URL = "http://localhost:3000/comments";

function Detailing() {
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // GET COMMENTS
  async function getComments() {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Gagal mengambil komentar");
      }

      const data = await response.json();

      setComments(data.reverse());

    } catch (error) {
      setStatus("Tidak dapat terhubung ke REST API.");
    }
  }

  useEffect(() => {
    getComments();
  }, []);

  // POST COMMENT
  async function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setStatus("Semua kolom harus diisi.");
      return;
    }

    setLoading(true);
    setStatus("");

    const newComment = {
      name: name.trim(),
      phone: phone.trim(),
      message: message.trim(),
      created_at: new Date().toISOString()
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
      });

      if (!response.ok) {
        throw new Error("POST gagal");
      }

      const savedComment = await response.json();

      setComments((previous) => [
        savedComment,
        ...previous
      ]);

      setName("");
      setPhone("");
      setMessage("");

      setStatus("Komentar berhasil dikirim!");

    } catch (error) {
      setStatus("Gagal mengirim komentar.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="detailing page-content">

      <p className="eyebrow">
        SUMINAR CAR WASH / CUSTOMER REVIEW
      </p>

      <h1 className="detailing-title">
        CUSTOMER
        <span>COMMENTS</span>
      </h1>

      <div className="line"></div>

      <p className="description">
        YOUR EXPERIENCE MATTERS TO US.
      </p>

      {/* COMMENT FORM */}
      <div className="comment-form">

        <h2>WRITE YOUR COMMENT</h2>

        <form onSubmit={handleSubmit}>

          <label>YOUR NAME</label>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={80}
            required
          />

          <label>PHONE NUMBER</label>

          <input
            type="tel"
            placeholder="08xxxxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            maxLength={20}
            required
          />

          <label>YOUR COMMENT</label>

          <textarea
            placeholder="Write your experience..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={1000}
            rows={5}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "SENDING..." : "POST COMMENT"}
          </button>

          {status && (
            <p className="comment-status">
              {status}
            </p>
          )}

        </form>
      </div>

      {/* COMMENT LIST */}
      <div className="comment-list">

        <h2>CUSTOMER REVIEWS</h2>

        <p className="comment-total">
          TOTAL COMMENTS: {comments.length}
        </p>

        {comments.length === 0 ? (
          <p className="empty-comment">
            No comments yet. Be the first to share your experience!
          </p>
        ) : (

          comments.map((comment) => (

            <article className="comment-card" key={comment.id}>

              <div className="comment-header">
                <h3>{comment.name}</h3>

                <span>
                  {new Date(comment.created_at).toLocaleString("id-ID")}
                </span>
              </div>

              <p className="comment-phone">
                {comment.phone}
              </p>

              <p className="comment-message">
                {comment.message}
              </p>

            </article>

          ))

        )}

      </div>

    </section>
  );
}

export default Detailing;
