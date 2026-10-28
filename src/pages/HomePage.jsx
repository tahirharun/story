import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  PenLine,
  BookOpen,
  Feather,
  TrendingUp,
  Clock,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import StoryCard from "../components/StoryCard";
import { stories } from "../data/stories";

function HomePage() {
  const navigate = useNavigate();

  const featuredStories = stories.slice(0, 3);
  const latestStories = stories.slice(3, 7);

  const categories = [
    {
      name: "Journalism",
      description: "Real stories. Real people. Real impact.",
      icon: <BookOpen size={25} />,
      color: "category-blue",
    },
    {
      name: "Life Stories",
      description: "Personal experiences worth sharing.",
      icon: <Feather size={25} />,
      color: "category-orange",
    },
    {
      name: "Fiction",
      description: "Discover worlds beyond imagination.",
      icon: <Sparkles size={25} />,
      color: "category-purple",
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <Sparkles size={15} />
                <span>Every story deserves a voice</span>
              </div>

              <h1>
                Stories that
                <br />
                <span>move the world.</span>
              </h1>

              <p className="hero-description">
                Discover powerful journalism, unforgettable life
                experiences, and imaginative fiction from writers
                who have something meaningful to share.
              </p>

              <div className="hero-actions">
                <a href="#stories" className="primary-button">
                  Explore stories
                  <ArrowRight size={18} />
                </a>

                <button
                  type="button"
                  className="secondary-button"
                  onClick={() => navigate("/write")}
                >
                  <PenLine size={17} />
                  Share your story
                </button>
              </div>

              <div className="hero-trust">
                <div className="hero-trust-icon">
                  <BookOpen size={18} />
                </div>

                <div>
                  <strong>A home for every voice</strong>
                  <p>Read. Write. Inspire.</p>
                </div>
              </div>
            </div>

            {/* HERO FEATURE CARD */}
            <div className="hero-visual">
              <div className="hero-image-card">
                <div className="hero-image-overlay">
                  <span className="featured-label">
                    EDITOR'S SPOTLIGHT
                  </span>

                  <h2>
                    Every great story begins with a single word.
                  </h2>

                  <p>
                    Your next favorite story is waiting to be discovered.
                  </p>

                  <a href="#stories" className="hero-card-link">
                    Start exploring
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>

              <div className="floating-note">
                <span className="floating-note-icon">
                  <Feather size={19} />
                </span>

                <div>
                  <strong>Your words matter.</strong>
                  <p>Make them count.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories-section" id="categories">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="section-eyebrow">
                  FIND YOUR NEXT READ
                </span>

                <h2>Explore by category</h2>

                <p>
                  Different perspectives. Different worlds.
                  One place to discover them all.
                </p>
              </div>
            </div>

            <div className="categories-grid">
              {categories.map((category) => (
                <button
                  type="button"
                  className={`category-card ${category.color}`}
                  key={category.name}
                  onClick={() =>
                    navigate(
                      `/?category=${encodeURIComponent(category.name)}#stories`
                    )
                  }
                >
                  <span className="category-icon">
                    {category.icon}
                  </span>

                  <h3>{category.name}</h3>

                  <p>{category.description}</p>

                  <span className="category-arrow">
                    <ArrowRight size={18} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED STORIES */}
        <section className="stories-section" id="stories">
          <div className="section-container">
            <div className="section-heading stories-heading">
              <div>
                <span className="section-eyebrow">
                  HANDPICKED FOR YOU
                </span>

                <h2>Featured stories</h2>

                <p>
                  Stories that inspire curiosity, spark conversation,
                  and stay with you long after reading.
                </p>
              </div>

              <Link to="/stories" className="text-link">
                View all stories
                <ArrowRight size={17} />
              </Link>
            </div>

            {featuredStories.length > 0 ? (
              <div className="stories-grid">
                {featuredStories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="empty-stories">
                <BookOpen size={34} />

                <h3>Your next favorite story starts here.</h3>

                <p>
                  Our collection is growing. Check back soon for
                  something worth reading.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* LATEST STORIES */}
        <section className="latest-section">
          <div className="section-container">
            <div className="section-heading stories-heading">
              <div>
                <span className="section-eyebrow">
                  FRESH FROM THE COMMUNITY
                </span>

                <h2>Latest stories</h2>

                <p>
                  Catch up on the latest ideas, experiences,
                  and creative discoveries.
                </p>
              </div>

              <div className="latest-indicator">
                <Clock size={16} />
                Recently added
              </div>
            </div>

            {latestStories.length > 0 ? (
              <div className="stories-grid">
                {latestStories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            ) : (
              <div className="empty-stories">
                <TrendingUp size={34} />

                <h3>More stories are on their way.</h3>

                <p>
                  Stay curious. There is always another story to tell.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* WRITER CTA */}
        <section className="writer-cta-section" id="about">
          <div className="writer-cta-container">
            <div className="writer-cta-icon">
              <PenLine size={30} />
            </div>

            <span className="section-eyebrow">
              YOUR STORY STARTS HERE
            </span>

            <h2>
              You have a story.
              <br />
              <span>The world is ready to listen.</span>
            </h2>

            <p>
              Share your experiences, report what matters,
              or create a world only you can imagine.
              Your next chapter begins with a blank page.
            </p>

            <button
              type="button"
              className="cta-button"
              onClick={() => navigate("/write")}
            >
              Start writing
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-container">
          <Link to="/" className="navbar-logo footer-logo">
            <span className="logo-icon">
              <BookOpen size={23} />
            </span>

            <span className="logo-text">
              Story<span>Verse</span>
            </span>
          </Link>

          <p>
            A space for stories, ideas, and voices that matter.
          </p>

          <div className="footer-links">
            <a href="#stories">Discover</a>
            <a href="#categories">Categories</a>
            <a href="#about">About</a>

            <button
              type="button"
              onClick={() => navigate("/write")}
            >
              Write a story
            </button>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} StoryVerse. All rights reserved.
            </span>

            <span>Every voice has a story.</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomePage;