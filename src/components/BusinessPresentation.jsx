// src/components/BusinessPresentation.jsx
import React from 'react';

const Section = ({ title, text, image }) => (
  <div className="my-8 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
    <img src={`/images/${image}`} alt={title} className="rounded-2xl shadow-md max-h-96 object-cover" />
    <div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700">{text}</p>
    </div>
  </div>
);

const BusinessPresentation = () => (
  <div className="p-6 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center mb-10">私たちの強み・取り組み</h1>
    <Section
      title="ポップアップ展開"
      text="短期イベントでも魅力を最大限に伝えるため、ブランドの世界観を効果的に演出したポップアップを多数実施しています。"
      image="popup.jpg"
    />
    <Section
      title="ディストリビュート（流通戦略）"
      text="ターゲット層に対し適切な場所・チャネルを通じてブランドを展開。地域や顧客層ごとの販売戦略を実践しています。"
      image="distribute.jpg"
    />
    <Section
      title="マーチャンダイジング"
      text="商品企画から売場づくりまで一貫して提案。魅せ方・価格設定・シーズン設計も含め、売れる売場をデザインします。"
      image="merchandising.jpg"
    />
  </div>
);

export default BusinessPresentation;
