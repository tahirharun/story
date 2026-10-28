import { Clock3, ArrowUpRight } from "lucide-react";

function StoryCard({ story }) {
  return (
    <article className="story-card">
      <a
        className="story-card-image"
        href={`/stories/${story.slug}`}
        aria-label={`Read ${story.title}`}
      >
        <img
          src={story.image}
          alt=""
          loading="lazy"
        />

        <span className="story-image-arrow">
          <ArrowUpRight size={19} />
        </span>
      </a>

      <div className="story-card-content">
        <span className={`story-category category-${story.category
          .toLowerCase()
          .replace(/\s+/g, "-")}`}>
          {story.category}
        </span>

        <h3>
          <a href={`/stories/${story.slug}`}>
            {story.title}
          </a>
        </h3>

        <p className="story-excerpt">
          {story.excerpt}
        </p>

        <div className="story-card-meta">
          <span className="story-author">
            {story.author}
          </span>

          <span className="story-read-time">
            <Clock3 size={13} />
            {story.readTime}
          </span>
        </div>
      </div>
    </article>
  );
}

export default StoryCard;