import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/utils/map"), {
  ssr: false,
});
import {
  Globe,
  MapPin,
  Download,
  MessageSquare,
  Star,
  ChevronRight,
  MountainIcon as Hiking,
} from "lucide-react";

export default function NorwayGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 px-8 border-b">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-customTeal font-bold text-2xl flex items-center"
          >
            <Image
              src="/RexbyLogo.svg"
              alt="Rexby Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            Rexby
          </Link>
        </div>
        <div className="flex items-center gap-4 ">
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-black hidden md:block">
            Login
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Globe className="h-5 w-5 text-gray-500" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <span className="sr-only">Menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-gray-500"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Guide Header */}
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 mb-12">
          {/* Featured Image */}
          <div className="rounded-lg overflow-hidden h-4/5 mx-4 ">
            <Image
              src="/norway_guide.webp"
              alt="Norway landscape with hammock"
              width={500}
              height={500}
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

          {/* Guide Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Norway Guide</h1>

            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/profile.webp"
                alt="Åsa Steinars"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span>Guide by Åsa Steinars</span>
                  <span className="text-gray-500">|</span>
                  <span>Norway</span>
                  <span className="ml-2 px-2 py-0.5 rounded-full text-xs flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-current" /> New
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-gray-500 text-base">
              <p>
                Norway is my second home. I was born in Norway and I lived there
                until I was 7 years old. I often come back and I love this
                country almost as much as Iceland. Last summer I spent 3 months
                on the road with my van exploring everything from the south tip
                up to Lofoten.
              </p>
              <p>
                This guide is my best tips for Norway to make sure you get the
                most out of your trip. It&apos;s focused around the fjords in the
                west and Lofoten in the north. In my opinion, it&apos;s the best
                areas to explore in Norway.
              </p>
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-2 gap-4 mt-6 border-t border-gray-200 pt-10">
              <button className="border border-black rounded-lg p-3 w-full">
                Preview
              </button>
              <button className="text-white font-bold bg-customTeal rounded-lg p-3 w-full">
                GET ACCESS
              </button>
            </div>
            <div className="text-right mt-2 text-gray-500 text-sm">
              Used for 100+ trips
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-8 py-8 border-t border-b w-full justify-around px-6">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-gray-500" />
            <span>161 things to do</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-gray-500" />
            <span>Interactive Map</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="h-5 w-5 text-gray-500" />
            <span>1 itinerary</span>
          </div>
          <div className="flex items-center gap-3">
            <Download className="h-5 w-5 text-gray-500" />
            <span>Offline usage in app</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="h-5 w-5 text-gray-500" />
            <span>Itinerary Builder access</span>
          </div>
          <div className="flex items-center gap-3">
            <MessageSquare className="h-5 w-5 text-gray-500" />
            <span>Priority in chat</span>
          </div>
        </div>

        {/* Interactive Map Section */}
        <section className="py-12">
          <h2 className="text-2xl font-bold mb-2">Interactive Map</h2>
          <p className="text-gray-600 mb-6">
            Get an interactive, playful and visually appealing map that helps
            you navigate the noise
          </p>

          {/* Map Container - This is where you'll integrate your map API */}
          <div className="w-full h-[500px] bg-blue-50 rounded-lg border relative overflow-hidden">
            {/* Placeholder for the map - Replace this with your map API integration */}
            <div className="absolute h-full w-full inset-0 flex items-center justify-center">
              <Map />
            </div>

            {/* Expand button */}
            <button className="absolute top-4 right-4 bg-white p-1 rounded shadow">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 3H21M21 3V9M21 3L14 10M9 21H3M3 21V15M3 21L10 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>

        {/* 161 Things to Do Section */}
        <section className="py-12 border-t">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="flex flex-col justify-start gap-4 items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">161 things to do</h2>
                <p className="text-gray-400 max-w-2xl text-sm">
                  Get a curated list of all the best things to do with exact
                  location, detailed info and inspiring content
                </p>
              </div>
              <Link href="#" className="text-black font-medium hover:underline">
                Preview for FREE
              </Link>
            </div>
            {/* Activity 1 */}
            <div className="group">
              <div className="rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/1.webp"
                  alt="Waterfall in Norway"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center text-white gap-1 mb-1">
                    <Globe className="h-4 w-4" />
                    <span className="text-sm">Sightseeing</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    One of my favourite spots
                  </h3>
                </div>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="group">
              <div className="rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/2.webp"
                  alt="Swing with fjord view"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center text-white gap-1 mb-1">
                    <Globe className="h-4 w-4" />
                    <span className="text-sm">Sightseeing</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    Swing with amazing views
                  </h3>
                </div>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="group">
              <div className="rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/3.webp"
                  alt="Hammock with fjord view"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center text-white gap-1 mb-1">
                    <Hiking className="h-4 w-4" />
                    <span className="text-sm">Hike</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    Beautiful view point
                  </h3>
                </div>
              </div>
            </div>

            {/* Next button */}
            <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </section>

        {/* 1 Itinerary Section */}
        <section className="py-12 border-t">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="flex flex-col justify-start gap-4 items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">1 Itenerary</h2>
                <p className="text-gray-400 max-w-2xl text-sm">
                  Get expertly curated itineraries that help you organise all
                  the &apos;things to do&apos; in an ideal time order
                </p>
              </div>
              <Link href="#" className="text-black font-medium hover:underline">
                Preview for FREE
              </Link>
            </div>
            {/* Activity 1 */}
            <div className="group">
              <div className="rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/1.webp"
                  alt="Waterfall in Norway"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center text-white gap-1 mb-1">
                    <Globe className="h-4 w-4" />
                    <span className="text-sm">Sightseeing</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    One of my favourite spots
                  </h3>
                </div>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="group">
              <div className="rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/2.webp"
                  alt="Swing with fjord view"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center text-white gap-1 mb-1">
                    <Globe className="h-4 w-4" />
                    <span className="text-sm">Sightseeing</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    Swing with amazing views
                  </h3>
                </div>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="group">
              <div className="rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/3.webp"
                  alt="Hammock with fjord view"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center text-white gap-1 mb-1">
                    <Hiking className="h-4 w-4" />
                    <span className="text-sm">Hike</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    Beautiful view point
                  </h3>
                </div>
              </div>
            </div>

            {/* Next button */}
            <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </section>

        {/* Author Profile Section */}
        <section className="py-12 border-t">
          <div className="grid md:grid-cols-[300px,1fr] gap-12">
            <div className="rounded-lg overflow-hidden p-2 shadow-2xl mx-4 ">
              <Image
                src="/norway_guide.webp"
                alt="Åsa Steinars"
                width={300}
                height={600}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Guide by Åsa Steinars</h2>
              <p className="text-gray-500 mb-4">Joined in April 2022</p>

              <div className="flex gap-3 mb-6">
                <Link href="#" className="p-2  hover:bg-gray-50">
                  <Globe className="h-5 w-5" />
                </Link>
                <Link href="#" className="p-2  hover:bg-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="p-2  hover:bg-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5z"></path>
                    <path d="M10 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                    <path d="M17 9h.01"></path>
                    <path d="M14 15h.01"></path>
                    <path d="M7 15h.01"></path>
                  </svg>
                </Link>
                <Link href="#" className="p-2  hover:bg-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </Link>
              </div>

              <div className="text-gray-700 space-y-4 mb-8">
                <p>
                  Åsa Steinars is an adventure photographer and videographer
                  from Iceland. Growing up in the north, surrounded by extreme
                  landscapes and forever changing weather has given her a tight
                  bond to nature and its forces. This you can clearly see in her
                  photography.
                </p>
                <p>
                  She works as a full time content creator, helping people to
                  travel like she does. She has a total following of almost 2
                  million across her social media platforms.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="#"
                  className="px-6 py-3 border rounded-lg font-medium hover:bg-gray-50"
                >
                  Message
                </Link>
                <Link
                  href="#"
                  className="px-6 py-3 border rounded-lg font-medium hover:bg-gray-50"
                >
                  Storefront
                </Link>
                <Link
                  href="#"
                  className="px-6 py-3 border rounded-lg font-medium hover:bg-gray-50"
                >
                  Guide Affiliate Program
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 border-t">
          <div className="grid md:grid-cols-[300px,1fr] gap-12">
            <div>
              <h2 className="text-3xl font-bold">Your questions, answered</h2>
            </div>
            <div className="space-y-6">
              <div className="border-b pb-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  How do I access the Guide and Map?
                </h3>
                <p className="text-gray-600">
                  You can access the guide and map through our website or mobile
                  app. Once purchased, the guide will be available in your
                  account. You can view it online or download it for offline
                  use.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Do I need internet connection?
                </h3>
                <p className="text-gray-600">
                  You need internet connection to initially download the guide,
                  but once downloaded, you can access all content offline
                  through our mobile app. This is especially useful when
                  traveling in remote areas of Norway with limited connectivity.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  How long will I have access?
                </h3>
                <p className="text-gray-600">
                  Once purchased, you will have lifetime access to the guide.
                  This includes all future updates and additions to the content.
                  We regularly update our guides with new locations and tips.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  Can I share it with my travel buddy?
                </h3>
                <p className="text-gray-600">
                  Yes, you can share the guide with one travel companion. Our
                  family sharing feature allows you to share your purchase with
                  one additional person who can access it on their own device.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
