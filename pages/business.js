import Link from 'next/link';

export default function Business() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Business Solutions</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Services for Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Investment Analysis</h3>
            <p className="text-gray-600 mb-4">Comprehensive analysis of real estate investment opportunities with detailed ROI projections.</p>
            <Link href="#" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Property Management</h3>
            <p className="text-gray-600 mb-4">End-to-end property management services for commercial and residential properties.</p>
            <Link href="#" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Development Consulting</h3>
            <p className="text-gray-600 mb-4">Expert guidance for real estate development projects from concept to completion.</p>
            <Link href="#" className="text-blue-600 hover:text-blue-800">Learn More →</Link>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-300 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Case Study Image 1
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Commercial Complex Development</h3>
              <p className="text-gray-600 mb-4">How we helped a client develop a multi-use commercial complex with 25% higher ROI than projected.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800">Read Case Study →</Link>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-300 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Case Study Image 2
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Residential Portfolio Optimization</h3>
              <p className="text-gray-600 mb-4">How our management services increased property values by 18% across a residential portfolio.</p>
              <Link href="#" className="text-blue-600 hover:text-blue-800">Read Case Study →</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h2>
        <p className="text-gray-700 mb-6">Our team of experts is ready to help you achieve your real estate business goals.</p>
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-block">
          Schedule a Consultation
        </Link>
      </div>
    </div>
  );
}
