import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      {/* 404 Content */}
      <main className="px-6 flex-1 flex items-center justify-center py-6">
        <div className="text-center max-w-2xl mx-auto">
          {/* Large 404 */}
          <h1 className="text-8xl md:text-9xl font-bold mb-8 tracking-tight text-muted-foreground/30">
            404
          </h1>

          {/* Main Message */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Oops! You&apos;ve wandered off
          </h2>

          {/* Friendly Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Looks like this page decided to take a family vacation without
            telling us. Don&apos;t worry though – we know exactly where you can
            find what you&apos;re looking for.
          </p>

          {/* Navigation Options */}
          <div className="space-y-4 mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/">Back to Home</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <Link href="/people">Meet Our People</Link>
              </Button>
            </div>
          </div>

          {/* Fun Family Message */}
          <Card className="bg-muted">
            <CardContent className="p-6">
              <p className="italic text-sm text-muted-foreground">
                &ldquo;Getting lost is just another way of saying &lsquo;going
                exploring&rsquo;.&rdquo;
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
