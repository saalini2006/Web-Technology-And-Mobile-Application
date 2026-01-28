// ===== CREATE STYLE USING JAVASCRIPT =====
const style = document.createElement("style");
style.textContent = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: linear-gradient(120deg, #f6d365, #fda085);
  color: #222;
}

header {
  background: linear-gradient(90deg, #1d2671, #c33764);
  color: white;
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-weight: bold;
}

.breaking {
  background: #ff3c38;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
}

.container {
  padding: 30px 40px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 30px;
}

.card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  margin-bottom: 25px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 230px;
  object-fit: cover;
}

.content {
  padding: 15px;
}

.tag {
  background: #c33764;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
}

aside {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

footer {
  background: #111;
  color: white;
  text-align: center;
  padding: 15px;
  margin-top: 20px;
}
`;
document.head.appendChild(style);

// ===== CREATE HTML USING JAVASCRIPT =====
document.body.innerHTML = `
<header>
  <h1>VibeNews</h1>
  <nav>
    <a href="#">Home</a>
    <a href="#">World</a>
    <a href="#">Tech</a>
    <a href="#">Sports</a>
  </nav>
</header>

<div class="breaking">
🚨 BREAKING: Major national announcement expected today 🚨
</div>

<section class="container">
  <main>
    <div class="card">
      <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c">
      <div class="content">
        <span class="tag">WORLD</span>
        <h2>Global Climate Summit Begins</h2>
        <p>World leaders gather to discuss sustainability and environmental challenges.</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475">
      <div class="content">
        <span class="tag">TECH</span>
        <h2>AI Changing the Education System</h2>
        <p>Artificial intelligence is transforming classrooms worldwide.</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1505842465776-3d90f616310d">
      <div class="content">
        <span class="tag">SPORTS</span>
        <h2>Championship Final Tonight</h2>
        <p>Millions of fans eagerly await the thrilling finale.</p>
      </div>
    </div>
  </main>

  <aside>
    <h3>Trending</h3>
    <ul>
      <li>🔥 Election results</li>
      <li>🔥 Market hits record high</li>
      <li>🔥 Space mission success</li>
      <li>🔥 New smartphone launch</li>
    </ul>
  </aside>
</section>

<footer>
© 2026 VibeNews | JavaScript Only News Portal
</footer>
`;
