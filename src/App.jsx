import React from "react";
import "./App.css";

// あなたの提供画像を仮に以下のようにインポート
import popupImg from "./assets/popup_main.png";
import distImg from "./assets/distribution.png";
import mdImg from "./assets/merchandising.png";
import brandImg from "./assets/brand_showcase.png";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Business Presentation</h1>
        <p>現場発のポップアップ・ディストリビューション戦略</p>
      </header>

      <section className="section">
        <h2>ポップアップ戦略</h2>
        <p>各地での期間限定ポップアップ展開によりブランドの鮮度と話題性を最大化します。</p>
        <img src={popupImg} alt="ポップアップ展開" />
      </section>

      <section className="section">
        <h2>ディストリビューションの工夫</h2>
        <p>現地のニーズに合わせた柔軟な流通設計で、売上最大化に貢献します。</p>
        <img src={distImg} alt="ディストリビューション" />
      </section>

      <section className="section">
        <h2>マーチャンダイジング</h2>
        <p>販促計画からVMDまでトータルで設計し、ブランドの世界観を的確に表現します。</p>
        <img src={mdImg} alt="マーチャンダイジング施策" />
      </section>

      <section className="section">
        <h2>ブランド事例紹介</h2>
        <img src={brandImg} alt="ブランドのビジュアル" />
      </section>

      <footer className="footer">
        © 2025 Your Company | <a href="https://your-website.com">your-website.com</a>
      </footer>
    </div>
  );
}

export default App;
