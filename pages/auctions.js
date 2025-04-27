import Link from 'next/link';

export default function Auctions() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Property Auctions</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Upcoming Auctions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md p-6 border-l-4 border-blue-600">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Luxury Property Auction {item}</h3>
                  <p className="text-gray-700 mb-2">123 Example Street, City</p>
                  <p className="text-gray-600 mb-4">Date: May {10 + item}, 2025 at 2:00 PM</p>
                  <p className="text-blue-600 font-bold mb-2">Starting Bid: $450,000</p>
                  <p className="text-gray-600">A rare opportunity to acquire a premium property in an exclusive neighborhood.</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Upcoming
                </div>
              </div>
              <div className="mt-4">
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  Register for Auction →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Past Auctions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md p-6 border-l-4 border-gray-400">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-2">Commercial Property Auction {item}</h3>
                  <p className="text-gray-700 mb-2">456 Business Avenue, City</p>
                  <p className="text-gray-600 mb-4">Date: April {item}, 2025</p>
                  <p className="text-gray-600 font-bold mb-2">Sold for: $750,000</p>
                  <p className="text-gray-600">Successfully auctioned commercial property in the business district.</p>
                </div>
                <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Completed
                </div>
              </div>
              <div className="mt-4">
                <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                  View Results →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
