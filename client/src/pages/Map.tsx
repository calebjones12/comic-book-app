/**
 * Map Page — Full-page world map display
 */

export default function Map() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <img
        src="https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/mapdithered_f24edbb1.jpg"
        alt="World Map of Xorath, Klor, Auron, Jeslam and surrounding regions"
        style={{
          width: '100%',
          height: 'calc(100vh - 80px)',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}
