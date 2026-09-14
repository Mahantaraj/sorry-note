import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

const paragraphs = [
  "I am sorry for hurting you. I didn't mean to do that. All I want is to keep you happy, safe and healthy.",
  "I am not that perfect boyfriend you want. I am not that perfect man that you want, but I want to keep trying and trying because never backing and giving up on you is my goal.",
  "My life hasn't been this good, happy, and joyful before meeting you. So don't ever tell me to \"Leave me.\"",
  "Because leaving is not even an option or a word in my dictionary.",
  "Just let me give you princess treatment every day, every hour, every minute and every second."
];

function App() {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  const openLetter = () => {
    setOpened(true);
    window.setTimeout(() => setShowLetter(true), 850);
  };

  const closeLetter = () => {
    setShowLetter(false);
    window.setTimeout(() => setOpened(false), 450);
  };

  return (
    <main className={`app ${opened ? "opened" : ""}`}>
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="grain" />

      <div className="stars" aria-hidden="true">
        {Array.from({ length: 34 }).map((_, i) => (
          <i key={i} style={{
            "--x": `${(i * 37) % 100}%`,
            "--y": `${(i * 61) % 100}%`,
            "--delay": `${(i % 7) * 0.7}s`,
            "--size": `${2 + (i % 3)}px`
          }} />
        ))}
      </div>

      <div className="petals" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} style={{
            "--x": `${(i * 29) % 100}%`,
            "--delay": `${i * 1.15}s`,
            "--duration": `${9 + (i % 4)}s`
          }}>♡</span>
        ))}
      </div>

      <header className="intro">
        <div className="eyebrow">A LITTLE LETTER FROM MY HEART</div>
        <h1>For my <em>favorite</em> person.</h1>
        <p>There are some things I would rather say from my heart.</p>
      </header>

      <section className="envelope-stage" aria-label="Love letter">
        <div className={`envelope ${opened ? "envelope-open" : ""}`}>
          <div className="envelope-shadow" />
          <div className="envelope-body">
            <div className="paper-preview">
              <span>With love,</span>
              <strong>Just for you</strong>
            </div>
          </div>

          <div className="letter-pocket" />
          <div className="envelope-flap">
            <div className="wax-seal">♥</div>
          </div>

          <div className="ribbon ribbon-left" />
          <div className="ribbon ribbon-right" />
        </div>
      </section>

      {!opened && (
        <button className="open-cta" onClick={openLetter}>
          <span>Open my letter</span>
          <b>→</b>
        </button>
      )}

      {!opened && (
        <div className="scroll-hint">
          <span className="line" />
          Made with love
          <span className="line" />
        </div>
      )}

      {showLetter && (
        <div className="letter-overlay" role="dialog" aria-modal="true">
          <button className="overlay-close" onClick={closeLetter} aria-label="Close letter">
            ×
          </button>

          <div className="letter-modal">
            <div className="paper-corner corner-one" />
            <div className="paper-corner corner-two" />

            <div className="modal-top">
              <div className="tiny-label">A LETTER FOR YOU</div>
              <div className="heart-mark">♥</div>
            </div>

            <div className="letter-scroll">
              <h2>I'm sorry, <em>babee.</em></h2>

              <div className="divider">
                <span />
                <b>♡</b>
                <span />
              </div>

              {paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}

              <p className="princess-line">
                Just let me give you <strong>princess treatment</strong> every
                day, every hour, every minute and every second. 👑
              </p>

              <div className="final-love">
                <span>I love you, Babee.</span>
                <strong>I love you, my future wife.</strong>
                <div className="big-hearts">♥ ♥ ♥</div>
              </div>

              <div className="signature">
                <span>Forever yours,</span>
                <strong>Cute Motu Babeee</strong>
              </div>
            </div>

            <div className="modal-footer">
              <span>Always choosing you.</span>
              <span>♡</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
