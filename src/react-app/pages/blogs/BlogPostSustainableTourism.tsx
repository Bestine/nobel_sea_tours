import { Calendar, Clock, Share2, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export default function BlogPostSustainableTourism() {
  const readingTime = "8 min read"; // You can calculate dynamically if needed
  const publishDate = "February 20, 2026";

  return (
    <div className="min-h-screen bg-white pt-20 pb-24">
      <article className="max-w-3xl mx-auto px-6 md:px-8 lg:px-0">
        {/* Hero / Header */}
        <header className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ocean-900 leading-tight mb-6">
            How Sustainable Tourism is Transforming East African Coastal Communities
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light mb-8 leading-relaxed">
            (…And Why It’s Not Just About Pretty Sunsets)
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600 text-sm md:text-base">
            <span className="font-medium">Bestine Okinda</span>
            <span className="hidden sm:block">·</span>
            <time dateTime="2026-02-20">{publishDate}</time>
            <span className="hidden sm:block">·</span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5" />
              {readingTime}
            </span>
          </div>
        </header>

        {/* Featured Image – Hero style */}
        <div className="mb-12 md:mb-16 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop"
            alt="Pristine East African coastline with turquoise waters and palm trees"
            className="w-full h-auto object-cover"
          />
          <p className="text-center text-sm text-gray-500 mt-3 italic">
            The serene beauty of Kenya's South Coast — where sustainable tourism meets natural wonder
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-headings:font-serif prose-headings:text-ocean-900 prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-8 prose-li:mb-3 prose-a:text-ocean-600 prose-a:no-underline hover:prose-a:underline max-w-none">
          {/* Drop cap on first paragraph */}
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-ocean-700 first-letter:mr-2 first-letter:float-left first-letter:leading-none">
            Let’s rewind a bit. When most people think of the East African coast, images of turquoise waters, endless beaches, and hammocks swaying in the breeze come to mind. But there’s a deeper story beneath those sun-drenched pictures — one that doesn’t just involve Instagram, mojitos, and sunscreen. It’s a story about people, culture, community, and — wait for it — sustainability.
          </p>

          <p>
            And no, this isn’t one of those eco-blogs that slides into your feed and immediately makes you feel guilty for buying a plastic straw in 2018. This is a real conversation about how sustainable tourism is literally changing lives for the better, one tide at a time.
          </p>

          <h2>Tourism + Environment = A Not-So-Strange Love Story</h2>

          <p>
            If we rewind 10 years or so, many coastal towns were stuck in the classic tourism trap: build an expensive resort, slap a sign on the beach, bring tourists, rinse, repeat.
          </p>

          <p>And sure, it worked — for a while. But then something strange happened:</p>

          <ul>
            <li>Ocean trash became the unofficial beach decoration (no, not the cute kind)</li>
            <li>Local artists had nowhere to sell</li>
            <li>Fish traps got tangled with plastic, not fish</li>
            <li>And tourists started asking questions like, “Hey… is this sustainable?”</li>
          </ul>

          <p>
            Cue the entrance of sustainable tourism: a philosophy that doesn’t just ask “How do we make money from the coast?” but “How do we make the coast better for everyone — wildlife included?”
          </p>

          <h2>What “Sustainable Tourism” Actually Means (Without the Buzzwords)</h2>

          <p>
            Okay, real talk: sustainability has become a buzzword. People use it more than they use sunscreen on a beach trip (and we all know THAT’S saying something).
          </p>

          <p>But here’s the core idea in plain English:</p>

          <blockquote className="border-l-4 border-ocean-500 pl-6 italic text-xl text-ocean-800 my-10">
            Make travel experiences that help the environment <strong>AND</strong> help the people who actually live there.
          </blockquote>

          <p>Not just saying it. Not just printing it on a brochure. Actually doing it.</p>

          <p>
            This shift isn’t just environmentally friendly… it’s culture friendly, economy friendly, and (if done right) joyfully profitable.
          </p>

          {/* More content formatted similarly... */}
          <h2>The Transformation Happening Right Now</h2>

          <p>Here’s what we’re seeing along towns and islands up and down the East African coast:</p>

          <ol className="list-decimal pl-6 space-y-6">
            <li>
              <strong>Cleaner Beaches, Happier People</strong><br />
              Communities, NGOs, and even local youth groups are organizing beach cleanups not as one-off events, but as ongoing cultural rituals...
            </li>
            <li>
              <strong>Local Art + Culture Get Their Moment</strong><br />
              Before, tourists came, took photos, and left with a postcard or a shell necklace...
            </li>
            <li>
              <strong>Respectful Wildlife Encounters</strong><br />
              Let’s be honest — seeing dolphins, snorkeling, or watching a crab race is way better...
            </li>
            <li>
              <strong>Food that Tells a Story</strong><br />
              Remember when coastal food in tourism was just “seafood platter”? Now you get...
            </li>
          </ol>

          {/* Pull quote example */}
          <blockquote className="text-2xl font-serif italic text-ocean-800 border-t-2 border-b-2 border-ocean-200 py-8 my-12 text-center">
            That’s a shift from “Find dolphins!” to “Share the ocean with dolphins.”
          </blockquote>

          {/* Additional sections follow the same pattern */}
          <h2>So Why Are Tourists Actually Choosing These Experiences?</h2>
          <p>Great question. Let’s break it down:</p>
          <ul>
            <li><strong>It’s Authentic.</strong> People don’t want “cookie-cutter beach tours anymore.”</li>
            <li><strong>It Feels Good.</strong> Not in a judging-your-plastic-habit way… but in a “I’m helping a community thrive” way.</li>
          </ul>

          <h2>Not Everything Is Perfect (Yet)</h2>
          {/* ... remaining content ... */}

          <h2>What’s Next for the Coast? (The Really Exciting Part)</h2>
          <p>More collaborations between tour creators, local leaders, marine scientists, storytellers...</p>

          <h2>Final Thought (With A Little Humor)</h2>
          <p>Sustainable tourism isn’t about telling people to stop having fun on the beach.</p>
          <p>
            In short: Sustainable tourism is turning the East African coast from “pretty place to visit” into “powerful place to belong.”
          </p>

          <p className="text-xl font-medium text-ocean-700 mt-12">
            And honestly? That’s way cooler than any postcard.
          </p>
        </div>

        {/* Featured Experience CTA */}
        <div className="my-16 p-8 md:p-12 bg-ocean-50 rounded-3xl border border-ocean-100 text-center">
          <h3 className="text-3xl font-serif font-bold text-ocean-900 mb-4">
            Experience the Transformation Yourself
          </h3>
          <p className="text-lg text-gray-700 mb-8">
            Join one of our carefully crafted coastal adventures and become part of the positive change.
          </p>
          <Link
            to="/experiences/wasini-dolphin"
            className="inline-flex items-center px-8 py-5 bg-ocean-500 text-white rounded-full font-semibold text-lg hover:bg-ocean-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Book the Wasini Island Dolphin Experience
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {/* Engagement / Share */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 pt-10 mt-16 gap-6">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-600 hover:text-ocean-600 transition-colors">
              <Heart className="w-6 h-6" />
              <span>Clap</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-ocean-600 transition-colors">
              <Share2 className="w-6 h-6" />
              <span>Share</span>
            </button>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-ocean-600">X</a>
            <a href="#" className="text-gray-500 hover:text-ocean-600">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-ocean-600">Facebook</a>
          </div>
        </div>
      </article>

      {/* More Articles / Footer CTA */}
      <section className="mt-20 py-16 bg-gradient-to-b from-white to-ocean-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold text-ocean-900 mb-8">
            More Stories from the Coast
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Discover how we're protecting our oceans and empowering communities.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-ocean-600 text-white rounded-full font-semibold hover:bg-ocean-700 transition-colors"
          >
            Explore All Articles
          </Link>
        </div>
      </section>

      {/* Simple Comment Placeholder */}
      <section className="max-w-3xl mx-auto px-6 mt-16">
        <h3 className="text-2xl font-serif font-bold text-ocean-900 mb-6">Comments</h3>
        <div className="bg-gray-50 p-8 rounded-xl text-center text-gray-500">
          <p>Share your thoughts below — we'd love to hear from you!</p>
          {/* Add Disqus, Commento, or custom form here later */}
        </div>
      </section>
    </div>
  );
}