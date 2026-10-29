import Head from 'next/head';
import '../styles/TestFontFaces.module.css';

const thunderWeights = [
  { weight: 100, label: 'Thin' },
  { weight: 200, label: 'ExtraLight' },
  { weight: 300, label: 'Light' },
  { weight: 400, label: 'Regular' },
  { weight: 500, label: 'Medium' },
  { weight: 600, label: 'SemiBold' },
  { weight: 700, label: 'Bold' },
  { weight: 800, label: 'ExtraBold' },
  { weight: 900, label: 'Black' },
];

const fonts = [
  { name: 'Caveat', weights: [400, 500, 600, 700] },
  { name: 'Kalam', weights: [300, 400, 700] },
  { name: 'Architects Daughter', weights: [400] },
  { name: 'Patrick Hand', weights: [400] },
  { name: 'Shadows Into Light Two', weights: [400] },
  { name: 'Comic Neue', weights: [300, 400, 700] },
  { name: 'Gochi Hand', weights: [400] },
  { name: 'Permanent Marker', weights: [400] },
];

const googleLink = fonts
  .map(
    (f) =>
      `family=${f.name.replace(/ /g, '+')}:wght@${f.weights.join(';')}`
  )
  .join('&');

const sampleText =
  'The quick brown fox jumps over the lazy dog — const hello = () => { return 42; };';

export default function TestPage() {
  return (
    <>
      <Head>
        <link
          href={`https://fonts.googleapis.com/css2?${googleLink}&display=swap`}
          rel="stylesheet"
        />
      </Head>

      <div style={{ padding: '32px 24px', maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ marginBottom: 8 }}>Font Test</h1>
        <p style={{ opacity: 0.6, marginBottom: 32 }}>
          THUNDER (free) + Avoin Demo Bold (Limitype) + Google handwriting fonts
        </p>

        <section
          style={{
            marginBottom: 40,
            paddingBottom: 24,
            borderBottom: '1px solid rgba(128,128,128,0.25)',
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontFamily: 'monospace',
              opacity: 0.55,
              marginBottom: 8,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            THUNDER — 9 weights (condensed display)
          </div>

          <div
            style={{
              fontFamily: '"Thunder", sans-serif',
              fontSize: 42,
              lineHeight: 1.15,
              letterSpacing: '0.5px',
              marginBottom: 6,
              textTransform: 'uppercase',
            }}
          >
            BUILT MAGIC
          </div>

          {thunderWeights.map(({ weight, label }) => (
            <div key={weight} style={{ marginBottom: 6 }}>
              <div
                style={{
                  fontFamily: '"Thunder", sans-serif',
                  fontWeight: weight,
                  fontSize: 30,
                  lineHeight: 1.3,
                }}
              >
                {sampleText}
              </div>
              <div
                style={{
                  fontFamily: '"Thunder", sans-serif',
                  fontWeight: weight,
                  fontSize: 15,
                  opacity: 0.7,
                }}
              >
                {label} (weight {weight}) — 0123456789 small size check
              </div>
            </div>
          ))}
        </section>

        <section
          style={{
            marginBottom: 40,
            paddingBottom: 24,
            borderBottom: '1px solid rgba(128,128,128,0.25)',
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontFamily: 'monospace',
              opacity: 0.55,
              marginBottom: 8,
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            Avoin Demo Bold — Limitype (demo, personal use)
          </div>

          <div
            style={{
              fontFamily: '"AvoinDemo", sans-serif',
              fontWeight: 700,
              fontSize: 56,
              lineHeight: 1.1,
              marginBottom: 4,
              textTransform: 'uppercase',
            }}
          >
            Gozie Brain Izuka
          </div>
          <div
            style={{
              fontFamily: '"AvoinDemo", sans-serif',
              fontWeight: 700,
              fontSize: 56,
              lineHeight: 1.1,
              marginBottom: 4,
            }}
          >
            Gozie Brain Izuka
          </div>
          <div
            style={{
              fontFamily: '"AvoinDemo", sans-serif',
              fontWeight: 700,
              fontSize: 34,
              lineHeight: 1.2,
              marginBottom: 4,
            }}
          >
            Gozie Brain Izuka
          </div>
          <div
            style={{
              fontFamily: '"AvoinDemo", sans-serif',
              fontWeight: 700,
              fontSize: 22,
              lineHeight: 1.3,
              marginBottom: 4,
            }}
          >
            Gozie Brain Izuka — {sampleText}
          </div>
          <div
            style={{
              fontFamily: '"AvoinDemo", sans-serif',
              fontWeight: 700,
              fontSize: 15,
              opacity: 0.75,
            }}
          >
            GOZIE BRAIN IZUKA — small size check 0123456789 !@#$%^&*()
          </div>
        </section>

        {fonts.map((font) => (
          <section
            key={font.name}
            style={{
              marginBottom: 40,
              paddingBottom: 24,
              borderBottom: '1px solid rgba(128,128,128,0.2)',
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontFamily: 'monospace',
                opacity: 0.55,
                marginBottom: 8,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              {font.name}
            </div>

            {font.weights.map((weight) => (
              <div key={weight} style={{ marginBottom: 6 }}>
                <div
                  style={{
                    fontFamily: `"${font.name}", cursive`,
                    fontWeight: weight,
                    fontSize: 28,
                    lineHeight: 1.3,
                  }}
                >
                  {sampleText}
                </div>
                <div
                  style={{
                    fontFamily: `"${font.name}", cursive`,
                    fontWeight: weight,
                    fontSize: 16,
                    opacity: 0.75,
                  }}
                >
                  Small size readability check: 0123456789 !@#$%^&*()
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Font Test' },
  };
}