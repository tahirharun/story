import { useState } from "react";
import { Link } from "react-router-dom";
import {
ArrowLeft,
BookOpen,
Eye,
Feather,
ImagePlus,
Save,
Send,
} from "lucide-react";
import "../WriteStory.css";

function WriteStoryPage() {
const [title, setTitle] = useState("");
const [subtitle, setSubtitle] = useState("");
const [category, setCategory] = useState("LIFE STORIES");
const [content, setContent] = useState("");
const [message, setMessage] = useState("");
const [preview, setPreview] = useState(false);

const wordCount = content.trim()
? content.trim().split(/\s+/).length
: 0;

function saveDraft() {
const draft = {
title,
subtitle,
category,
content,
updatedAt: new Date().toISOString(),
};

localStorage.setItem("storyverse-draft", JSON.stringify(draft));
setMessage("Draft saved on this device!");

}

function loadDraft() {
const saved = localStorage.getItem("storyverse-draft");

if (saved) {
  const draft = JSON.parse(saved);
  setTitle(draft.title || "");
  setSubtitle(draft.subtitle || "");
  setCategory(draft.category || "LIFE STORIES");
  setContent(draft.content || "");
  setMessage("Your previous draft has been restored.");
}

}

function submitStory(event) {
event.preventDefault();

if (!title.trim() || !content.trim()) {
  setMessage("Please add a title and write your story first.");
  return;
}

saveDraft();

setMessage(
  category === "JOURNALISM"
    ? "Your journalism draft is saved. Editorial submission will be available when we connect the backend."
    : "Your story draft is saved. Publishing will be available when we connect the backend."
);

}

return ( <div className="write-page"> <header className="write-header"> <Link to="/" className="write-brand"> <BookOpen size={23} /> <span>
Story<span>Verse</span> </span> </Link>

    <div className="write-header-actions">
      <button
        type="button"
        className="editor-button secondary-editor-button"
        onClick={loadDraft}
      >
        Load draft
      </button>

      <button
        type="button"
        className="editor-button secondary-editor-button"
        onClick={() => setPreview(!preview)}
      >
        <Eye size={16} />
        {preview ? "Edit story" : "Preview"}
      </button>

      <button
        type="button"
        className="editor-button save-button"
        onClick={saveDraft}
      >
        <Save size={16} />
        Save draft
      </button>
    </div>
  </header>

  <main className="write-main">
    <Link to="/" className="back-home">
      <ArrowLeft size={16} />
      Back to homepage
    </Link>

    <div className="write-intro">
      <div className="write-intro-icon">
        <Feather size={22} />
      </div>

      <p className="write-eyebrow">YOUR SPACE, YOUR VOICE</p>

      <h1>
        Every great story
        <br />
        starts with <span>a sentence.</span>
      </h1>

      <p>
        Take your time. Find your words. Share something
        worth remembering.
      </p>
    </div>

    <form className="story-editor" onSubmit={submitStory}>
      {!preview ? (
        <>
          <div className="editor-field">
            <label htmlFor="story-category">STORY CATEGORY</label>

            <select
              id="story-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="JOURNALISM">Journalism & News</option>
              <option value="LIFE STORIES">Personal & Life Stories</option>
              <option value="FICTION">Fiction & Creative Writing</option>
            </select>
          </div>

          <div className="editor-field">
            <label htmlFor="story-title">STORY TITLE</label>

            <input
              id="story-title"
              type="text"
              placeholder="Give your story a memorable title..."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              maxLength={150}
            />
          </div>

          <div className="editor-field">
            <label htmlFor="story-subtitle">
              SUBTITLE <span>(OPTIONAL)</span>
            </label>

            <input
              id="story-subtitle"
              type="text"
              placeholder="A short introduction to your story..."
              value={subtitle}
              onChange={(event) => setSubtitle(event.target.value)}
              maxLength={250}
            />
          </div>

          <div className="editor-field">
            <label htmlFor="story-content">YOUR STORY</label>

            <textarea
              id="story-content"
              placeholder="It all started when..."
              value={content}
              onChange={(event) => setContent(event.target.value)}
              rows={14}
            />

            <div className="editor-footer">
              <span>{wordCount} words</span>

              <span>
                {category === "JOURNALISM"
                  ? "Journalism submissions require editorial review."
                  : "Your story deserves to be told."}
              </span>
            </div>
          </div>

          <div className="editor-notice">
            <ImagePlus size={19} />

            <div>
              <strong>Want to add a cover image?</strong>
              <p>
                Image uploads will be available when we build
                the full publishing workflow.
              </p>
            </div>
          </div>

          <div className="editor-submit-row">
            <button
              type="button"
              className="editor-button secondary-editor-button"
              onClick={saveDraft}
            >
              <Save size={16} />
              Save for later
            </button>

            <button type="submit" className="editor-button save-button">
              <Send size={16} />
              {category === "JOURNALISM"
                ? "Prepare submission"
                : "Prepare story"}
            </button>
          </div>
        </>
      ) : (
        <article className="story-preview">
          <span className="story-category">{category}</span>

          <h2>{title || "Your story title will appear here"}</h2>

          {subtitle && <p className="preview-subtitle">{subtitle}</p>}

          <div className="preview-divider" />

          <p className="preview-content">
            {content || "Your story will appear here as you write."}
          </p>

          <div className="preview-meta">{wordCount} words</div>
        </article>
      )}

      {message && (
        <div className="editor-message" role="status">
          {message}
        </div>
      )}
    </form>

    <p className="write-bottom-note">
      <BookOpen size={15} />
      Every voice matters. Every story has a place.
    </p>
  </main>
</div>


);
}

export default WriteStoryPage;