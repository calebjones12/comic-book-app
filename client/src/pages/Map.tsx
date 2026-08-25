/**
 * Map Page — Full-page world map display
 */

export default function Map() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center pt-24">
      <p className="text-gray-300 text-center text-base max-w-2xl px-6 mb-6">
        This is a map of the region where the first 12 or so graphic novels take place. Not every location is detailed here, and more will be revealed in the future.
      </p>
      <img
        src="/images/maps/Map-Final-lowres.jpg"
        alt="World Map of Xorath, Klor, Auron, Jeslam and surrounding regions"
        style={{
          width: '100%',
          maxHeight: 'calc(100vh - 160px)',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}
