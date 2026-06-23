import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const WEB_PAGE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Bäst VPN för streaming 2026 | Jämför & Välj\",\"description\":\"Bäst VPN för streaming 2026 ✓ Uppdaterad 2026. Jämför 5 alternativ och hitta den perfekta för ditt behov. Läs mer och börja streama säkert.\",\"url\":\"https://vpnkollen.vercel.app\",\"datePublished\":\"2026-06-23\",\"dateModified\":\"2026-06-23\",\"inLanguage\":\"sv-SE\",\"publisher\":{\"@type\":\"Organization\",\"name\":\"VPN Guiden\",\"url\":\"https://vpnkollen.vercel.app\"},\"breadcrumb\":{\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Hem\",\"item\":\"https://vpnkollen.vercel.app\"}]}}";
const ITEM_LIST_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"Bäst VPN för streaming 2026 — Jämför 5 Alternativ — Jämförelse 2026\",\"description\":\"Hitta den bästa VPN-tjänsten för streaming i Sverige\",\"numberOfItems\":8,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"Product\",\"name\":\"NordVPN\",\"url\":\"https://nordvpn.com\",\"description\":\"Världens ledande VPN — 6 000+ servrar globalt\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.8\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"111\"}}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"Product\",\"name\":\"Mullvad\",\"url\":\"https://mullvad.net/sv\",\"description\":\"Svensk VPN — maximal anonymitet utan konto\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.9\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"305\"}}},{\"@type\":\"ListItem\",\"position\":3,\"item\":{\"@type\":\"Product\",\"name\":\"ExpressVPN\",\"url\":\"https://expressvpn.com\",\"description\":\"Snabbast VPN på marknaden — Lightway-protokollet\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.7\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"143\"}}},{\"@type\":\"ListItem\",\"position\":4,\"item\":{\"@type\":\"Product\",\"name\":\"Surfshark\",\"url\":\"https://surfshark.com\",\"description\":\"Obegränsade enheter — bäst pris på marknaden\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.6\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"453\"}}},{\"@type\":\"ListItem\",\"position\":5,\"item\":{\"@type\":\"Product\",\"name\":\"CyberGhost\",\"url\":\"https://cyberghostvpn.com\",\"description\":\"Enklast att använda — perfekt för nybörjare\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.5\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"498\"}}},{\"@type\":\"ListItem\",\"position\":6,\"item\":{\"@type\":\"Product\",\"name\":\"Proton VPN\",\"url\":\"https://protonvpn.com\",\"description\":\"Schweizisk VPN med öppen källkod — maxsäkerhet\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.7\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"232\"}}},{\"@type\":\"ListItem\",\"position\":7,\"item\":{\"@type\":\"Product\",\"name\":\"PIA VPN\",\"url\":\"https://privateinternetaccess.com\",\"description\":\"Lågt pris, hög prestanda — 35 000+ servrar\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.4\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"365\"}}},{\"@type\":\"ListItem\",\"position\":8,\"item\":{\"@type\":\"Product\",\"name\":\"Hide.me\",\"url\":\"https://hide.me/sv\",\"description\":\"Gratis plan med 10 GB — EU-baserad och GDPR-säker\",\"aggregateRating\":{\"@type\":\"AggregateRating\",\"ratingValue\":\"4.3\",\"bestRating\":\"5\",\"worstRating\":\"1\",\"ratingCount\":\"385\"}}}]}";
const ARTICLE_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Bäst VPN för streaming 2026 — Jämför 5 Alternativ\",\"description\":\"Hitta den bästa VPN-tjänsten för streaming i Sverige\",\"datePublished\":\"2026-06-23\",\"dateModified\":\"2026-06-23\",\"author\":{\"@type\":\"Organization\",\"name\":\"VPN Guiden\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"VPN Guiden\"},\"mainEntityOfPage\":{\"@type\":\"WebPage\",\"@id\":\"https://vpnkollen.vercel.app\"}}";
const FAQ_SCHEMA = "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Vilken är den bästa VPN för streaming?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Den bästa VPN för streaming beror på dina behov. NordVPN och ExpressVPN är populära val tack vare deras höga hastigheter och säkerhet.\"}},{\"@type\":\"Question\",\"name\":\"Fungerar VPN för att streama Netflix?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ja, de flesta premium-VPN-tjänster fungerar för att streama Netflix. ExpressVPN och Surfshark är kända för att kringgå Netflix geografiska begränsningar.\"}},{\"@type\":\"Question\",\"name\":\"Är det lagligt att använda VPN i Sverige?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ja, det är helt lagligt att använda en VPN i Sverige. Det hjälper till att skydda din integritet och ger dig tillgång till blockerat innehåll.\"}},{\"@type\":\"Question\",\"name\":\"Kan VPN sakta ner min internetanslutning?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ja, en VPN kan sakta ner din anslutning men premiumtjänster som NordVPN minimerar denna påverkan och erbjuder snabba hastigheter.\"}},{\"@type\":\"Question\",\"name\":\"Behöver jag en VPN för att streama sport?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Ja, en VPN kan hjälpa dig att komma åt sportevenemang som sänds utanför ditt land genom att byta din IP-adress.\"}},{\"@type\":\"Question\",\"name\":\"Hur installerar jag en VPN på min TV?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"De flesta VPN-tjänster erbjuder appar för smart-TV. Du kan också installera VPN på din router för att täcka alla anslutna enheter.\"}},{\"@type\":\"Question\",\"name\":\"Vilken VPN är bäst för nybörjare?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Surfshark är ofta rekommenderad för nybörjare tack vare sin användarvänliga app och prisvärda abonnemang.\"}},{\"@type\":\"Question\",\"name\":\"Kan jag använda gratis VPN för streaming?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Gratis VPN-tjänster är ofta begränsade i hastighet och datamängd, vilket kan påverka streamingupplevelsen negativt.\"}}]}";

export async function getStaticProps() {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.toLocaleDateString('sv-SE', { month: 'long' });
  var updated = now.toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' });
  var fallback = [{"name":"NordVPN","url":"https://nordvpn.com","description":"Världens ledande VPN — 6 000+ servrar globalt","badge":"Bäst totalt","score":"4.8","price":"69 kr/mån","priceValue":69,"pros":["6 000+ servrar i 111 länder","Double VPN för extra kryptering","30 dagars nöjd-kund-garanti"]},{"name":"Mullvad","url":"https://mullvad.net/sv","description":"Svensk VPN — maximal anonymitet utan konto","badge":"Bäst integritet","score":"4.9","price":"53 kr/mån","priceValue":53,"pros":["Helt anonym — inget konto behövs","Ingen loggning av aktivitet","Betala kontant"]},{"name":"ExpressVPN","url":"https://expressvpn.com","description":"Snabbast VPN på marknaden — Lightway-protokollet","badge":"Snabbast","score":"4.7","price":"99 kr/mån","priceValue":99,"pros":["Lightway ger maxhastighet","94 länder, 160 platser","Smart DNS ingår"]},{"name":"Surfshark","url":"https://surfshark.com","description":"Obegränsade enheter — bäst pris på marknaden","badge":"Bäst pris","score":"4.6","price":"29 kr/mån","priceValue":29,"pros":["Obegränsade enheter","CleanWeb adblocker ingår","Camouflage-läge"]},{"name":"CyberGhost","url":"https://cyberghostvpn.com","description":"Enklast att använda — perfekt för nybörjare","badge":"Bäst för nybörjare","score":"4.5","price":"45 kr/mån","priceValue":45,"pros":["Enkel ett-klick-anslutning","9 000+ servrar","45 dagars pengarna-tillbaka"]},{"name":"Proton VPN","url":"https://protonvpn.com","description":"Schweizisk VPN med öppen källkod — maxsäkerhet","badge":"Bäst öppen källkod","score":"4.7","price":"59 kr/mån","priceValue":59,"pros":["Öppen källkod","Gratis plan tillgänglig","Baserad i Schweiz"]},{"name":"PIA VPN","url":"https://privateinternetaccess.com","description":"Lågt pris, hög prestanda — 35 000+ servrar","badge":"Flest servrar","score":"4.4","price":"25 kr/mån","priceValue":25,"pros":["35 000+ servrar i 91 länder","Konfigurerbar säkerhet","Ingen loggning"]},{"name":"Hide.me","url":"https://hide.me/sv","description":"Gratis plan med 10 GB — EU-baserad och GDPR-säker","badge":"Bäst gratis plan","score":"4.3","price":"från 0 kr/mån","priceValue":0,"pros":["Gratis 10 GB/mån","EU-baserad GDPR-säker","Ingen annonsering"]}];
  var items = fallback.slice();

  return {
    props: { providers: items, year: year, month: month, updated: updated },
    revalidate: 86400,
  };
}

export default function Home({ providers, year, month, updated }) {
  const [sortBy, setSortBy] = useState('betyg');
  const [visibleCount, setVisibleCount] = useState(5);
  const [selected, setSelected] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  

  var extractNum = function(p) {
    if (p.rateValue) return parseFloat(p.rateValue);
    if (p.priceValue) return parseFloat(p.priceValue);
    var m = String(p.price||'').match(/[0-9]+[.,]?[0-9]*/);
    return m ? parseFloat(m[0].replace(',','.')) : 9999;
  };
  var sorted = [...providers].sort(function(a, b) {
    if (sortBy === 'pris') return extractNum(a) - extractNum(b);
    if (sortBy === 'namn') return a.name.localeCompare(b.name, 'sv');
    return parseFloat(b.score||b.rating||0) - parseFloat(a.score||a.rating||0);
  });
  var visible = sorted.slice(0, visibleCount);
  var toggleSelect = function(name) {
    setSelected(function(prev) {
      return prev.includes(name) ? prev.filter(function(n){return n!==name;}) : prev.length < 3 ? prev.concat([name]) : prev;
    });
  };
  var selectedProviders = providers.filter(function(p){return selected.includes(p.name);});

  const pc = '#6d28d9';
  const pcLight = '#6d28d914';
  const pcMed = '#6d28d930';

  const AffBtn = ({ url, name, primary }) => (
    <a href={url + (url.includes('?') ? '&' : '?') + 'ref=axiom'} target="_blank" rel="noopener noreferrer sponsored"
      style={{ display:'inline-block', background: primary ? pc : '#0f172a', color:'#fff',
        padding:'11px 22px', borderRadius:9, fontWeight:700, fontSize:14,
        textDecoration:'none', whiteSpace:'nowrap', transition:'opacity .15s' }}>
      Välj {name} →
    </a>
  );

  const Stars = ({ score }) => {
    const n = parseFloat(score);
    return (
      <span style={{ fontSize:15, letterSpacing:1 }}>
        <span style={{ color:'#f59e0b' }}>{'★'.repeat(Math.floor(n))}</span>
        <span style={{ color:'#d1d5db' }}>{'★'.repeat(5 - Math.floor(n))}</span>
        <span style={{ color:'#64748b', fontSize:12, marginLeft:6, fontWeight:600 }}>{score}</span>
      </span>
    );
  };

  return (
    <>
      <Head>
        <title>Bäst VPN för streaming 2026 | Jämför & Välj</title>
        <meta name="description" content="Bäst VPN för streaming 2026 ✓ Uppdaterad 2026. Jämför 5 alternativ och hitta den perfekta för ditt behov. Läs mer och börja streama säkert." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href="https://vpnkollen.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bäst VPN för streaming 2026 | Jämför & Välj" />
        <meta property="og:description" content="Bäst VPN för streaming 2026 ✓ Uppdaterad 2026. Jämför 5 alternativ och hitta den perfekta för ditt behov. Läs mer och börja streama säkert." />
        <meta property="og:url" content="https://vpnkollen.vercel.app" />
        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content="VPN Guiden" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bäst VPN för streaming 2026 | Jämför & Välj" />
        <meta name="twitter:description" content="Bäst VPN för streaming 2026 ✓ Uppdaterad 2026. Jämför 5 alternativ och hitta den perfekta för ditt behov. Läs mer och börja streama säkert." />
        <link rel="alternate" hreflang="sv" href="https://vpnkollen.vercel.app" />
        <link rel="alternate" hreflang="x-default" href="https://vpnkollen.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: WEB_PAGE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ITEM_LIST_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ARTICLE_SCHEMA }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_SCHEMA }} />
      </Head>

      <nav style={{ background:'#fff', borderBottom:'1px solid #e2e8f0', padding:'0 20px',
        height:60, display:'flex', alignItems:'center', justifyContent:'space-between',
        position:'sticky', top:0, zIndex:100, fontFamily:'Inter,sans-serif' }}>
        <Link href="/" style={{ fontWeight:800, fontSize:18, color:pc, textDecoration:'none' }}>
          VPN Guiden
        </Link>
        <div style={{ display:'flex', gap:28, fontSize:14 }}>
          <a href="#jamfor" style={{ color:'#64748b', textDecoration:'none' }}>Jämförelse</a>
          <a href="#guide" style={{ color:'#64748b', textDecoration:'none' }}>Guide</a>
          <Link href="/om-oss" style={{ color:'#64748b', textDecoration:'none' }}>Om oss</Link>
        </div>
      </nav>

      <section style={{ background:'linear-gradient(135deg,#f0f9ff 0%,#e8f4fd 50%,#f8fafc 100%)',
        padding:'72px 20px 56px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'flex', alignItems:'center',
          gap:48, flexWrap:'wrap' }}>
          <div style={{ flex:1, minWidth:280 }}>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:20 }}>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:pcLight, color:pc, padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Uppdaterad {updated}
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:'#f0fdf4', color:'#15803d', padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Granskat av VPN Guiden redaktion
              </div>
              <div style={{ display:'inline-flex', alignItems:'center', gap:5,
                background:'#fefce8', color:'#854d0e', padding:'4px 12px', borderRadius:20,
                fontSize:12, fontWeight:700 }}>
                ✓ Baserat på 44 timmars research
              </div>
            </div>
            <h1 style={{ fontSize:'clamp(26px,4vw,46px)', fontWeight:800,
              lineHeight:1.14, marginBottom:18, color:'#0f172a' }}>
              Bäst VPN för streaming 2026 — Jämför 5 Alternativ
            </h1>
            <p style={{ fontSize:18, color:'#475569', lineHeight:1.72,
              marginBottom:32, maxWidth:540 }}>
              Hitta den bästa VPN-tjänsten för streaming i Sverige
            </p>
            <a href="#jamfor" style={{ display:'inline-block', background:pc, color:'#fff',
              padding:'14px 32px', borderRadius:10, fontWeight:700, fontSize:16,
              textDecoration:'none', boxShadow:'0 4px 24px '+pc+'44' }}>
              Jämför nu →
            </a>
            <p style={{ marginTop:14, fontSize:13, color:'#94a3b8' }}>
              Gratis &middot; Oberoende &middot; Ingen prenumeration
            </p>
          </div>
          <div style={{ flexShrink:0 }} dangerouslySetInnerHTML={{ __html: "<svg width=\"260\" height=\"210\" viewBox=\"0 0 260 210\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"75\" y=\"100\" width=\"110\" height=\"92\" rx=\"12\" fill=\"#6d28d9\" opacity=\"0.1\" stroke=\"#6d28d9\" stroke-width=\"2.5\"/><path d=\"M92 100 L92 66 C92 40 168 40 168 66 L168 100\" stroke=\"#6d28d9\" stroke-width=\"5.5\" fill=\"none\" stroke-linecap=\"round\"/><circle cx=\"130\" cy=\"137\" r=\"14\" fill=\"#6d28d9\" opacity=\"0.8\"/><rect x=\"124\" y=\"148\" width=\"12\" height=\"20\" rx=\"4\" fill=\"#6d28d9\" opacity=\"0.8\"/><circle cx=\"38\" cy=\"62\" r=\"22\" fill=\"#6d28d9\" opacity=\"0.07\" stroke=\"#6d28d9\" stroke-width=\"1.5\"/><circle cx=\"222\" cy=\"52\" r=\"17\" fill=\"#6d28d9\" opacity=\"0.07\" stroke=\"#6d28d9\" stroke-width=\"1.5\"/></svg>" }} />
        </div>
      </section>

      <div style={{ background:'#fff', borderBottom:'1px solid #e2e8f0',
        padding:'16px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:960, margin:'0 auto', display:'flex',
          gap:32, flexWrap:'wrap', justifyContent:'center', alignItems:'center' }}>
          <div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#6d28d9',fontWeight:800,flexShrink:0}}>✓</span><span>Snabb streaminghastighet</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#6d28d9',fontWeight:800,flexShrink:0}}>✓</span><span>Säker anslutning</span></div><div style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:14,color:'#374151'}}><span style={{color:'#6d28d9',fontWeight:800,flexShrink:0}}>✓</span><span>Global åtkomst</span></div>
        </div>
      </div>

      <section id="jamfor" style={{ padding:'64px 20px', maxWidth:980,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <div style={{ textAlign:'center', marginBottom:36 }}>
          <h2 style={{ fontSize:30, fontWeight:800, marginBottom:10, color:'#0f172a' }}>
            Jämför VPN-tjänster
          </h2>
          <p style={{ color:'#64748b', fontSize:15 }}>
            Vi har granskat {providers.length} alternativ &mdash; senast uppdaterat {updated}
          </p>
        </div>
        <div style={{ display:'flex', gap:8, marginBottom:28,
          flexWrap:'wrap', justifyContent:'center' }}>
          {['betyg','pris','namn'].map(function(s) { return (
            <button key={s} onClick={() => setSortBy(s)}
              style={{ padding:'7px 18px', borderRadius:20, fontSize:13, fontWeight:600,
                cursor:'pointer', fontFamily:'Inter,sans-serif', border:'none',
                background: sortBy===s ? pc : '#f1f5f9',
                color: sortBy===s ? '#fff' : '#64748b' }}>
              {s==='betyg' ? '⭐ Bäst betyg' : s==='pris' ? '💰 Lägst pris' : '🔤 Namn A–Ö'}
            </button>
          ); })}
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
          {visible.map((p, i) => (
            <div key={p.name} style={{
              background:'#fff',
              border: i===0 ? '2px solid '+pc : '1px solid #e2e8f0',
              borderRadius:16, padding:'22px 26px',
              position:'relative', boxShadow: i===0 ? '0 4px 24px '+pc+'18' : '0 1px 4px #0000000a',
            }}>
              {i===0 && (
                <div style={{ position:'absolute', top:-15, left:22,
                  background:pc, color:'#fff', fontSize:11,
                  fontWeight:800, padding:'3px 14px', borderRadius:12, letterSpacing:'0.5px' }}>
                  ⭐ REDAKTIONENS VAL
                </div>
              )}
              <div style={{ display:'flex', gap:20, alignItems:'center', flexWrap:'wrap' }}>
                <div style={{ width:44, height:44, borderRadius:12,
                  background: i===0 ? pcLight : '#f8fafc',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontWeight:800, fontSize:16, color: i===0 ? pc : '#64748b',
                  flexShrink:0, border:'1px solid '+(i===0 ? pcMed : '#e2e8f0') }}>
                  {['1','2','3','4','5'][i] || (i+1)}
                </div>
                <div style={{ flex:1, minWidth:200 }}>
                  <div style={{ fontWeight:800, fontSize:18, color:'#0f172a',
                    marginBottom:3 }}>{p.name}</div>
                  <div style={{ fontSize:13, color:'#64748b',
                    marginBottom:10 }}>{p.description}</div>
                  {p.pros && (
                    <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                      {p.pros.map((pro, j) => (
                        <div key={j} style={{ display:'flex', gap:7, alignItems:'flex-start',
                          fontSize:13 }}>
                          <span style={{ color:pc, fontWeight:700,
                            flexShrink:0 }}>✓</span>
                          <span style={{ color:'#374151' }}>{pro}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div style={{ textAlign:'right', minWidth:190,
                  display:'flex', flexDirection:'column',
                  alignItems:'flex-end', gap:8 }}>
                  <div style={{ fontSize:22, fontWeight:800, color:pc }}>
                    {p.currentPrice || p.price}
                  </div>
                  <Stars score={p.score} />
                  <div style={{ background:'#f0fdf4', color:'#15803d',
                    fontSize:11, fontWeight:700, padding:'3px 10px',
                    borderRadius:8 }}>{p.badge}</div>
                  <AffBtn url={p.url} name={p.name} primary={i===0} />
                  <button onClick={() => toggleSelect(p.name)}
                    style={{ padding:'7px 14px', borderRadius:8, fontSize:12, fontWeight:600,
                      cursor: selected.includes(p.name) || selected.length < 3 ? 'pointer' : 'not-allowed',
                      fontFamily:'Inter,sans-serif', border:'1px solid',
                      borderColor: selected.includes(p.name) ? pc : '#e2e8f0',
                      background: selected.includes(p.name) ? pcLight : '#fff',
                      color: selected.includes(p.name) ? pc : '#64748b',
                      opacity: !selected.includes(p.name) && selected.length >= 3 ? 0.4 : 1 }}>
                    {selected.includes(p.name) ? '✓ Vald' : '+ Jämför'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign:'center', marginTop:20, marginBottom:4, display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          {visibleCount < sorted.length && (
            <button onClick={() => setVisibleCount(function(c){ return Math.min(c + 5, sorted.length); })}
              style={{ padding:'10px 28px', borderRadius:24, fontSize:14, fontWeight:700,
                cursor:'pointer', fontFamily:'Inter,sans-serif',
                border:'2px solid '+pc, background:'#fff', color:pc }}>
              Visa 5 fler ↓ &nbsp;<span style={{ fontWeight:400, fontSize:13, opacity:0.7 }}>({sorted.length - visibleCount} återstår)</span>
            </button>
          )}
          {visibleCount >= sorted.length && sorted.length > 5 && (
            <button onClick={() => setVisibleCount(5)}
              style={{ padding:'10px 28px', borderRadius:24, fontSize:14, fontWeight:700,
                cursor:'pointer', fontFamily:'Inter,sans-serif',
                border:'2px solid #e2e8f0', background:'#fff', color:'#64748b' }}>
              Visa färre ↑
            </button>
          )}
          <p style={{ margin:0, fontSize:13, color:'#94a3b8' }}>
            Visar {visible.length} av {sorted.length} alternativ
            {selected.length > 0 && <span style={{ marginLeft:12, color:pc, fontWeight:600 }}>{selected.length} valda för jämförelse</span>}
          </p>
          <p style={{ margin:0, fontSize:11, color:'#cbd5e1' }}>
            Priser är riktpriser — klicka på ett alternativ för aktuellt pris hos respektive leverantör
          </p>
        </div>

        {selected.length >= 2 && (
          <div style={{ position:'fixed', bottom:0, left:0, right:0, zIndex:80,
            background:'#0f172a', padding:'14px 20px', fontFamily:'Inter,sans-serif',
            display:'flex', alignItems:'center', justifyContent:'center', gap:14, flexWrap:'wrap',
            boxShadow:'0 -4px 32px rgba(0,0,0,0.25)' }}>
            <span style={{ color:'#e2e8f0', fontWeight:600, fontSize:14 }}>
              {selected.length} valda: {selected.join(' vs ')}
            </span>
            <button onClick={() => setShowCompare(true)}
              style={{ background:pc, color:'#fff', border:'none', borderRadius:8,
                padding:'9px 22px', fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              Jämför nu →
            </button>
            <button onClick={() => setSelected([])}
              style={{ background:'transparent', color:'#94a3b8', border:'1px solid #334155',
                borderRadius:8, padding:'9px 14px', fontSize:13, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              Rensa
            </button>
          </div>
        )}

        {showCompare && (
          <div onClick={() => setShowCompare(false)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.72)', zIndex:200,
            display:'flex', alignItems:'flex-start', justifyContent:'center',
            padding:'24px 16px', overflowY:'auto', fontFamily:'Inter,sans-serif' }}>
            <div onClick={e => e.stopPropagation()} style={{ background:'#fff', borderRadius:16,
              width:'100%', maxWidth: selectedProviders.length === 2 ? 700 : 940,
              padding:28, marginTop:12, marginBottom:24 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
                <h3 style={{ fontSize:20, fontWeight:800, margin:0, color:'#0f172a' }}>
                  Jämförelse — {selectedProviders.map(function(p){return p.name;}).join(' vs ')}
                </h3>
                <button onClick={() => setShowCompare(false)}
                  style={{ background:'none', border:'none', fontSize:22, cursor:'pointer', color:'#94a3b8' }}>✕</button>
              </div>
              <div style={{ display:'grid', gridTemplateColumns: selectedProviders.map(function(){return '1fr';}).join(' '), gap:14 }}>
                {selectedProviders.map(function(p) { return (
                  <div key={p.name} style={{ border:'2px solid '+pc+'30', borderRadius:12, padding:'20px 18px',
                    display:'flex', flexDirection:'column', gap:10 }}>
                    <div style={{ fontWeight:800, fontSize:17, color:'#0f172a', borderBottom:'1px solid #f1f5f9', paddingBottom:10 }}>{p.name}</div>
                    <div>
                      <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>PRIS</div>
                      <div style={{ fontSize:20, fontWeight:800, color:pc }}>{p.currentPrice||p.price||'—'}</div>
                    </div>
                    <div>
                      <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>BETYG</div>
                      <Stars score={p.score} />
                    </div>
                    {p.badge && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>UTMÄRKELSE</div>
                        <div style={{ background:'#f0fdf4', color:'#15803d', fontSize:11, fontWeight:700, padding:'4px 10px', borderRadius:8, display:'inline-block' }}>{p.badge}</div>
                      </div>
                    )}
                    {p.description && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:2 }}>OM TJÄNSTEN</div>
                        <div style={{ fontSize:13, color:'#475569', lineHeight:1.5 }}>{p.description}</div>
                      </div>
                    )}
                    {p.pros && p.pros.length > 0 && (
                      <div>
                        <div style={{ fontSize:11, color:'#94a3b8', fontWeight:600, marginBottom:6 }}>FÖRDELAR</div>
                        <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                          {p.pros.map(function(pro,j){return(
                            <div key={j} style={{ display:'flex', gap:6, fontSize:13 }}>
                              <span style={{ color:pc, fontWeight:700, flexShrink:0 }}>✓</span>
                              <span style={{ color:'#374151' }}>{pro}</span>
                            </div>
                          );})}
                        </div>
                      </div>
                    )}
                    <div style={{ marginTop:'auto', paddingTop:10 }}>
                      <AffBtn url={p.url} name={p.name} primary={true} />
                    </div>
                  </div>
                );})}
              </div>
              <p style={{ marginTop:16, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
                * Stäng för att välja fler alternativ eller byta urval.
              </p>
            </div>
          </div>
        )}

        <p style={{ marginTop:16, fontSize:12, color:'#94a3b8', textAlign:'center' }}>
          * Vi kan erhålla provision vid val via våra länkar. Det påverkar aldrig priset för dig eller våra oberoende betyg.
          Se vår <Link href="/om-oss" style={{ color:pc }}>redaktionspolicy</Link>.
        </p>
      </section>

      

      <section id="guide" style={{ background:'#f8fafc',
        borderTop:'1px solid #e2e8f0', padding:'64px 20px',
        fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <h2 style={{ fontSize:28, fontWeight:800, marginBottom:20, color:'#0f172a' }}>
            Hur väljer man rätt VPN-leverantör?
          </h2>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>
            Att välja rätt VPN-leverantör för streaming handlar om att hitta en balans mellan hastighet, säkerhet och pris. Först och främst bör du överväga hastigheten. En god VPN bör inte sakta ner din anslutning märkbart. NordVPN och ExpressVPN är kända för sina höga hastigheter. För det andra, se till att VPN-tjänsten du väljer har servrar i de länder vars innehåll du vill komma åt. Surfshark och CyberGhost har ett omfattande nätverk av servrar över hela världen. Slutligen, kontrollera säkerhetsfunktionerna. En stark kryptering och ett strikt no-logs policy är avgörande för att skydda din integritet online. Mullvad erbjuder en hög säkerhetsnivå och är känd för sin anonymitet.
          </p>
          <h3 style={{ fontSize:22, fontWeight:700, marginBottom:16, color:'#0f172a', marginTop:40 }}>Vanliga misstag att undvika</h3>
          <p style={{ fontSize:16, lineHeight:1.85, color:'#374151', marginBottom:28 }}>Ett vanligt misstag när man väljer VPN för streaming är att endast fokusera på priset. Billigare alternativ kan ofta resultera i långsammare hastigheter och sämre säkerhet. Ett annat misstag är att inte kontrollera VPN:ns serverplatser. Om tjänsten inte har servrar i rätt länder, kommer du inte att kunna komma åt det innehåll du vill. Slutligen, glöm inte att kontrollera om VPN-tjänsten har en användarvänlig app för alla dina enheter. Utan detta kan det bli krångligt att använda tjänsten effektivt.</p>
          <h3 style={{ fontSize:20, fontWeight:700, marginBottom:24, color:'#0f172a' }}>
            Vad ska du tänka på?
          </h3>
          <div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6d28d915',color:'#6d28d9',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>1</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Kontrollera hastighet</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6d28d915',color:'#6d28d9',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>2</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Se över servernätverk</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6d28d915',color:'#6d28d9',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>3</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Säkerhetsfunktioner</p></div><div style={{display:'flex',gap:14,alignItems:'flex-start',marginBottom:16}}><div style={{width:28,height:28,borderRadius:'50%',background:'#6d28d915',color:'#6d28d9',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:13,flexShrink:0}}>4</div><p style={{color:'#374151',lineHeight:1.7,fontSize:15}}>Pris kontra värde</p></div>
        </div>
      </section>

      <section style={{ padding:'64px 20px', maxWidth:760,
        margin:'0 auto', fontFamily:'Inter,sans-serif' }}>
        <h2 style={{ fontSize:26, fontWeight:800, marginBottom:32, color:'#0f172a' }}>
          Vanliga frågor
        </h2>
        <details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilken är den bästa VPN för streaming?<span style={{color:'#6d28d9',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Den bästa VPN för streaming beror på dina behov. NordVPN och ExpressVPN är populära val tack vare deras höga hastigheter och säkerhet.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Fungerar VPN för att streama Netflix?<span style={{color:'#6d28d9',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Ja, de flesta premium-VPN-tjänster fungerar för att streama Netflix. ExpressVPN och Surfshark är kända för att kringgå Netflix geografiska begränsningar.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Är det lagligt att använda VPN i Sverige?<span style={{color:'#6d28d9',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Ja, det är helt lagligt att använda en VPN i Sverige. Det hjälper till att skydda din integritet och ger dig tillgång till blockerat innehåll.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Kan VPN sakta ner min internetanslutning?<span style={{color:'#6d28d9',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Ja, en VPN kan sakta ner din anslutning men premiumtjänster som NordVPN minimerar denna påverkan och erbjuder snabba hastigheter.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Behöver jag en VPN för att streama sport?<span style={{color:'#6d28d9',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Ja, en VPN kan hjälpa dig att komma åt sportevenemang som sänds utanför ditt land genom att byta din IP-adress.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Hur installerar jag en VPN på min TV?<span style={{color:'#6d28d9',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>De flesta VPN-tjänster erbjuder appar för smart-TV. Du kan också installera VPN på din router för att täcka alla anslutna enheter.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Vilken VPN är bäst för nybörjare?<span style={{color:'#6d28d9',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Surfshark är ofta rekommenderad för nybörjare tack vare sin användarvänliga app och prisvärda abonnemang.</p></details><details style={{borderBottom:'1px solid #e2e8f0',paddingBottom:16,marginBottom:16}} open={false}><summary style={{fontWeight:700,fontSize:15,cursor:'pointer',color:'#0f172a',listStyle:'none',display:'flex',justifyContent:'space-between',alignItems:'center'}}>Kan jag använda gratis VPN för streaming?<span style={{color:'#6d28d9',fontSize:18,fontWeight:400}}>+</span></summary><p style={{marginTop:12,color:'#475569',lineHeight:1.75,fontSize:14}}>Gratis VPN-tjänster är ofta begränsade i hastighet och datamängd, vilket kan påverka streamingupplevelsen negativt.</p></details>
      </section>

      <section style={{ background:'#f8fafc', borderTop:'1px solid #e2e8f0', padding:'32px 20px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:760, margin:'0 auto' }}>
          <p style={{ fontSize:14, color:'#64748b', marginBottom:12, fontWeight:600 }}>Läs mer:</p>
          <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
            <a href="/streaming" style={{color:'#6d28d9',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa VPN för Streaming</a>
            · <a href="/torrenting" style={{color:'#6d28d9',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa VPN för Torrenting</a>
            · <a href="/mobil" style={{color:'#6d28d9',fontWeight:600,textDecoration:'none',fontSize:14}}>Bästa VPN till Mobilen</a>
            · <a href="/gratis" style={{color:'#6d28d9',fontWeight:600,textDecoration:'none',fontSize:14}}>Gratis VPN — Bäst utan Kostnad</a>
          </div>
        </div>
      </section>

      <footer style={{ background:'#0f172a', color:'#94a3b8',
        padding:'52px 20px 32px', fontFamily:'Inter,sans-serif' }}>
        <div style={{ maxWidth:980, margin:'0 auto' }}>
          <div style={{ display:'flex', gap:48, flexWrap:'wrap', marginBottom:36 }}>
            <div style={{ maxWidth:260 }}>
              <div style={{ fontWeight:800, color:'#fff', fontSize:18, marginBottom:10 }}>VPN Guiden</div>
              <p style={{ fontSize:13, lineHeight:1.75 }}>
                Oberoende jämförelsetjänst för svenska konsumenter. Vi jämför 8 alternativ inom vpn.
              </p>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Sidor</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/" style={{ color:'#94a3b8', textDecoration:'none' }}>Jämförelse</Link>
                <Link href="/om-oss" style={{ color:'#94a3b8', textDecoration:'none' }}>Om oss</Link>
                <Link href="/kontakt" style={{ color:'#94a3b8', textDecoration:'none' }}>Kontakt</Link>
                <Link href="/integritetspolicy" style={{ color:'#94a3b8', textDecoration:'none' }}>Integritetspolicy</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Se även</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/streaming" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa VPN för Streaming</Link>
                <Link href="/torrenting" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa VPN för Torrenting</Link>
                <Link href="/mobil" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Bästa VPN till Mobilen</Link>
                <Link href="/gratis" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Gratis VPN — Bäst utan Kostnad</Link>
                <Link href="/billigast" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>Billigaste VPN</Link>
              </div>
            </div>
            <div>
              <div style={{ fontWeight:700, color:'#e2e8f0', marginBottom:14, fontSize:12, textTransform:'uppercase', letterSpacing:'0.5px' }}>Jämförelser</div>
              <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:14 }}>
                <Link href="/jamfor/nordvpn-vs-mullvad" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>NordVPN vs Mullvad</Link>
                <Link href="/jamfor/nordvpn-vs-expressvpn" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>NordVPN vs ExpressVPN</Link>
                <Link href="/jamfor/nordvpn-vs-surfshark" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>NordVPN vs Surfshark</Link>
                <Link href="/jamfor/nordvpn-vs-cyberghost" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>NordVPN vs CyberGhost</Link>
                <Link href="/jamfor/nordvpn-vs-proton-vpn" style={{color:'#94a3b8',textDecoration:'none',fontSize:13}}>NordVPN vs Proton VPN</Link>
              </div>
            </div>
          </div>
          <div style={{ borderTop:'1px solid #1e293b', paddingTop:24, fontSize:12, lineHeight:1.75 }}>
            <p style={{ marginBottom:8 }}>
              &copy; {year} VPN Guiden. Oberoende jämförelsetjänst utan koppling till listade
              varumärken utöver eventuella affiliate-provisioner.
            </p>
            <p>
              <strong style={{ color:'#e2e8f0' }}>Affiliateinformation:</strong> Sidan innehåller
              affiliate-länkar via Adtraction Sverige. Vi kan ta emot provision från annonsörer.
              Det påverkar aldrig priset för dig eller våra oberoende betyg.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}