import Link from "next/link";
// import { getSiteConfig, getTeamMembers } from "@/lib/data-loader";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* 404 Content */}
      <main className="px-6 flex-1 flex items-center justify-center py-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* Large 404 */}
          <h1 className="text-8xl md:text-9xl font-bold mb-8 tracking-tight text-gray-300">
            404
          </h1>

          {/* Main Message */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Oops! You&apos;ve wandered off
          </h2>

          {/* Friendly Description */}
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Looks like this page decided to take a family vacation without
            telling us. Don&apos;t worry though – we know exactly where you can
            find what you&apos;re looking for.
          </p>

          {/* Navigation Options */}
          {/* TODO: fix when add shadcn/ui */}
          <div className="space-y-4 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg hover:bg-gray-800 transition-colors font-medium"
              >
                Back to Home
              </Link>
              <Link
                href="/people"
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full text-lg hover:bg-gray-900 hover:text-white transition-colors font-medium"
              >
                Meet Our People
              </Link>
            </div>
          </div>

          {/* Fun Family Message */}
          <div className="bg-gray-100 rounded-lg p-6 text-sm text-gray-600">
            <p className="italic">
              &ldquo;Getting lost is just another way of saying &lsquo;going
              exploring&rsquo;.&rdquo;
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
