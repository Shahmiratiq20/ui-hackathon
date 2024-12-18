import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#F6F5FF] max-w-screen-2xl h-[286px] justify-start items-center flex">
        <h1 className="text-4xl text-[#101750] font-extrabold justify-start items-center flex ml-5 sm:ml-32">
          About Us
        </h1>
        <div>
          <p className="text-gray-600">
            Home &gt; Pages &gt; <span className="text-blue-600">Contact Us</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Business History Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              src="/d.png"
              alt="Business meeting"
              width={555}
              height={390}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Know About Our Ecommerce Business History
            </h2>

            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At maiores assumenda nostrum amet placeat, quasi
              laboriosam accusantium laborum dolore repellat! Neque rem quae voluptatem nemo iusto officia ipsum omnis libero.
            </p>

            <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded">
              Contact Us
            </button>
          </div>
        </div>

        {/* Features Section */}
        <h1 className="text-5xl font-extrabold text-[#151875] mb-8 text-center justify-center items-center flex">
          Features Section!
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <FeatureCard
            imgSrc="/13.png"
            title="24/7 Support"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          {/* Feature 2 */}
          <FeatureCard
            imgSrc="/14.png"
            title="Affordable Prices"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          {/* Feature 3 */}
          <FeatureCard
            imgSrc="/15.png"
            title="Premium Quality"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
          {/* Feature 4 */}
          <FeatureCard
            imgSrc="/16.png"
            title="Fast Delivery"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
          />
        </div>
      </main>
    </div>
  );
}

// Reusable feature card component
const FeatureCard = ({ imgSrc, title, description }: { imgSrc: string; title: string; description: string }) => (
  <div className="flex flex-col items-center justify-center text-center bg-white p-6 rounded-lg shadow-2xl shadow-gray-200 w-[270px] h-[320px]">
    <Image src={imgSrc} alt={title} className="w-16 h-16 mb-4" width={64} height={64} />
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-gray-500 mt-2">{description}</p>
  </div>
);