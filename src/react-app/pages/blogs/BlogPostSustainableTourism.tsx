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

      {/* Featured Image */}
      <div className="mb-12 md:mb-16 rounded-2xl overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop"
          alt="East African coastline with turquoise waters"
          className="w-full h-auto object-cover"
        />
        <p className="text-center text-sm text-gray-500 mt-3 italic">
          Along the Swahili coast, sustainability is no longer a trend — it’s becoming a way of life.
        </p>
      </div>

      {/* Article Body */}
      <div className="prose prose-lg prose-headings:font-serif prose-headings:text-ocean-900 prose-p:text-gray-800 prose-p:leading-relaxed prose-p:mb-8 prose-li:mb-3 prose-a:text-ocean-600 prose-a:no-underline hover:prose-a:underline max-w-none">

        <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-ocean-700 first-letter:mr-2 first-letter:float-left first-letter:leading-none">
          Let’s rewind a bit. When most people think of the East African coast, images of turquoise waters, endless beaches, and hammocks swaying in the breeze come to mind. But there’s a deeper story beneath those sun-drenched pictures — one that doesn’t just involve Instagram, mojitos, and sunscreen. It’s a story about people, culture, community, and — wait for it — sustainability.
        </p>

        <p>
          And no, this isn’t one of those eco-blogs that slides into your feed and immediately makes you feel guilty for buying a plastic straw in 2018. This is a real conversation about how sustainable tourism is literally changing lives for the better, one tide at a time — especially here along Kenya’s coastline, where experiences are slowly shifting from consumption to connection.
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

        <p>
          Not just saying it. Not just printing it on a brochure. Actually doing it. That’s where intentional tour operators — including emerging brands like Nobel Sea Tours — are positioning themselves: as connectors, not exploiters.
        </p>

        <p>
          This shift isn’t just environmentally friendly… it’s culture friendly, economy friendly, and (if done right) joyfully profitable.
        </p>

        <h2>The Transformation Happening Right Now</h2>

        <p>
          Here’s what we’re seeing along towns and islands up and down the East African coast:
        </p>

        <ol className="list-decimal pl-6 space-y-6">
          <li>
            <strong>Cleaner Beaches, Happier People</strong><br />
            Communities and youth groups are organizing beach cleanups not as one-off events, but as ongoing rituals of pride. Cleaner beaches mean stronger local identity — and tourists notice.
          </li>

          <li>
            <strong>Local Art + Culture Get Their Moment</strong><br />
            Travelers are no longer satisfied with generic souvenirs. They want handcrafted pieces, real Swahili stories, and experiences rooted in heritage.
          </li>

          <li>
            <strong>Respectful Wildlife Encounters</strong><br />
            Dolphin tours and marine excursions are increasingly guided by ethical principles. The shift is subtle but powerful.
          </li>

          <li>
            <strong>Food that Tells a Story</strong><br />
            Coastal cuisine is becoming part of the narrative — spices explained, recipes shared, traditions honored.
          </li>
        </ol>

        <blockquote className="text-2xl font-serif italic text-ocean-800 border-t-2 border-b-2 border-ocean-200 py-8 my-12 text-center">
          That’s a shift from “Find dolphins!” to “Share the ocean with dolphins.”
        </blockquote>

        <h2>So Why Are Tourists Actually Choosing These Experiences?</h2>

        <p>Great question. Let’s break it down:</p>

        <ul>
          <li>
            <strong>It’s Authentic.</strong> People don’t want cookie-cutter beach tours anymore.
          </li>
          <li>
            <strong>It Feels Good.</strong> Not in a preachy way — but in a “my trip meant something” way.
          </li>
          <li>
            <strong>It Creates Stories.</strong> And stories are the real souvenirs.
          </li>
        </ul>

        <h2>Not Everything Is Perfect (Yet)</h2>

        <p>
          Infrastructure gaps exist. Some operators still prioritize volume over value. Training communities takes time. Sustainability is a journey, not a switch you flip overnight.
        </p>

        <p>
          But here’s the exciting part: travelers are demanding better. Investors are noticing. Communities are stepping forward.
        </p>

        <h2>What’s Next for the Coast?</h2>

        <p>
          The future of coastal tourism in East Africa isn’t about bigger resorts. It’s about better relationships — between guests and hosts, between business and ocean, between culture and commerce.
        </p>

        <p>
          When done intentionally, tourism doesn’t just sell a destination — it strengthens it.
        </p>

        <blockquote className="text-2xl font-serif italic text-ocean-800 border-t-2 border-b-2 border-ocean-200 py-8 my-12 text-center">
          Sustainable tourism is turning the East African coast from “a pretty place to visit” into “a powerful place to belong.”
        </blockquote>

        <p>
          And honestly? That transformation might be the most beautiful view of all.
        </p>

      </div>
    </article>
  </div>
  );
}