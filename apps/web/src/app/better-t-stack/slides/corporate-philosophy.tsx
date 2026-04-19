const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;

export default function CorporatePhilosophy() {
  return (
    <section
      data-background-image={`${R2_BASE}/外部登壇資料テンプレ/千_外部登壇スライド_企業理念.png`}
      data-background-size="contain"
    >
      {/* コンテンツをここに追加 */}
    </section>
  );
}
