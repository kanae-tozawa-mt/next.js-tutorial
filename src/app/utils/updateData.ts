
/** Tipsを更新する関数 */
export const updateData = async (id: string, mutate: () => void) => {
  const updatedContent: { [key: string]: { title: string; description: string } } = {
    "1": { 
    title: "レグルスとネメアの獅子", 
    description: "しし座のレグルスは「王者の星」として知られ、ギリシャ神話ではヘラクレスが倒したネメアの獅子と関係している。ネメアの獅子は強靭な毛皮を持ち、どんな武器も通じなかったが、ヘラクレスは素手で戦い、ついに勝利した。この偉業を讃え、ネメアの獅子は夜空へと昇り、しし座となった。" 
  },
    "2": { 
      title: "ヘラクレスの十二の功績", 
      description: "ヘラクレスは、ゼウスの息子でありながら大きな試練を課された英雄であった。彼は神々から与えられた十二の試練を見事に乗り越え、怪物と戦いながら数々の偉業を成し遂げた。その功績を讃えられ、彼の姿は夜空に刻まれ、ヘラクレス座として輝くことになった。この神話は、勇気と不屈の精神を象徴している。" 
    },
    "3": { 
      title: "ペガススの誕生", 
      description: "ペガススは、怪物メデューサの血から生まれた翼を持つ神聖な馬である。英雄ペルセウスがメデューサを倒した際、その血からペガススが誕生し、すぐに天へと昇っていった。後に彼は神々の乗り物となり、空を駆ける伝説的な存在として星座に刻まれた。この神話は、神秘と冒険の象徴となっている。" 
    },
    "4": { 
      title: "シリウスと忠実な犬", 
      description: "シリウスは、オリオンの忠実な犬として知られ、常に彼のそばで狩りをしていた。しかし、オリオンが死んだ後、彼の犬も主人を追うように天へと昇り、夜空で最も明るい星として輝くこととなった。冬の夜空を彩るおおいぬ座の中心として、その忠誠心と絆を今も象徴している。" 
    }
  };
  await fetch(`/api/memos`, {
    method: "POST",
    body: JSON.stringify({
      id,
      title: updatedContent[id].title,
      description: updatedContent[id].description,
    }),
    headers: { "Content-Type": "application/json" },
  });

  // mutate() で画面のデータを更新
  mutate();
};