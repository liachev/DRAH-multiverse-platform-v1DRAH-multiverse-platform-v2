import Link from 'next/link';

export default function Properties() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Properties</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-300 relative">
              {/* Placeholder for property image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Property Image {item}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Modern Property {item}</h3>
              <p className="text-gray-700 mb-2">123 Example Street, City</p>
              <p className="text-blue-600 font-bold mb-4">$499,000</p>
              <div className="flex justify-between text-sm text-gray-600">
                <span>3 Beds</span>
                <span>2 Baths</span>
                <span>1,500 sqft</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
