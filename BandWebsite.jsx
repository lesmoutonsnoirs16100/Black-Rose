import React from "react";

// BandWebsite.jsx — bilingual (English + French) with full setlist and GitHub-ready structure
// Single-file React component using Tailwind CSS for the band "Black Rose".

export default function BandWebsite() {
  const BAND_NAME = "Black Rose";
  const logoSrc = "/mnt/data/473804782_1295636628177274_1163752926575167948_n.jpg";
  const contactEmail = "booking@blackroseband.com";

  const bio = {
    en: `Black Rose are a high-energy rock covers band playing classic and contemporary rock anthems — tight riffs, big choruses, and anthemic live shows. Available for pubs, private parties, and festivals.`,
    fr: `Black Rose est un groupe de reprises rock énergique jouant des hymnes rock classiques et contemporains — riffs puissants, refrains épiques et shows scéniques inoubliables. Disponible pour bars, soirées privées et festivals.`
  };

  const videos = [
    { id: "PNf3-wdd3hQ", title: "Black Rose — Live Performance", src: "https://www.youtube.com/embed/PNf3-wdd3hQ" },
    { id: "20YYfYqXStg", title: "Rosalie — Live (Thin Lizzy cover)", src: "https://www.youtube.com/embed/20YYfYqXStg" }
  ];

  const socials = [
    { name: "YouTube", url: "https://youtu.be/PNf3-wdd3hQ" },
    { name: "Facebook", url: "https://www.facebook.com/blackrosecognac?locale=fr_FR" },
    { name: "GitHub", url: "https://github.com/blackrosecognac" }
  ];

  const setlist = [
    { song: "Boulevard of Broken Dreams", artist: "Green Day" },
    { song: "Don’t Believe a Word", artist: "Thin Lizzy" },
    { song: "Rosalie", artist: "Thin Lizzy" },
    { song: "Pride ’n’ Joy", artist: "Stevie Ray Vaughan" },
    { song: "Tush / Moving On", artist: "ZZ Top / Gary Moore" },
    { song: "Dock of the Bay", artist: "Otis Redding" },
    { song: "Whiskey in the Jar", artist: "Thin Lizzy" },
    { song: "Alright Now", artist: "Free" },
    { song: "Fortunate Son", artist: "CCR" },
    { song: "Smoke on the Water", artist: "Deep Purple" },
    { song: "Stairway to Heaven", artist: "Led Zeppelin" },
    { song: "Schools Out / Another Brick in the Wall", artist: "Alice Cooper / Pink Floyd" },
    { song: "Paranoid", artist: "Black Sabbath" },
    { song: "Heroes", artist: "Motörhead" },
    { song: "Highway to Hell", artist: "AC/DC" },
    { song: "Whole Lotta Rosie", artist: "AC/DC" },
    { song: "You Shook Me All Night Long", artist: "AC/DC" },
    { song: "Sweet Child of Mine", artist: "Guns N’ Roses" },
    { song: "Boys Are Back in Town", artist: "Thin Lizzy" },
    { song: "Born to Be Wild", artist: "Steppenwolf" },
    { song: "Here I Go Again", artist: "Whitesnake" },
    { song: "Fool for Your Loving", artist: "Whitesnake" },
    { song: "Baba O’Riley", artist: "The Who" },
    { song: "Rockin’ in the Free World", artist: "Neil Young / Leningrad Cowboys" },
    { song: "Blitzkrieg Bop", artist: "Ramones" },
    { song: "Black Velvet", artist: "Alannah Myles" },
    { song: "Mama I’m Coming Home", artist: "Ozzy Osbourne" },
    { song: "Bad Romance / Paparazzi", artist: "Lady Gaga (Rock Cover)" },
    { song: "Sanctuary", artist: "The Cult" },
    { song: "Bad Penny", artist: "Rory Gallagher" },
    { song: "Cowboy Song", artist: "Thin Lizzy" },
    { song: "Nothing Else Matters", artist: "Metallica" },
    { song: "Cocaine", artist: "Eric Clapton" },
    { song: "Jailbreak", artist: "Thin Lizzy" },
    { song: "Black Rose", artist: "Thin Lizzy" },
    { song: "Dancing in the Moonlight", artist: "Thin Lizzy" },
    { song: "The Trooper", artist: "Iron Maiden" },
    { song: "Over the Hills", artist: "Gary Moore" },
    { song: "Won’t Get Fooled Again", artist: "The Who" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={logoSrc} alt={`${BAND_NAME} logo`} className="w-16 h-16 object-contain" />
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">{BAND_NAME}</h1>
              <p className="text-sm text-gray-600">Rock covers • Reprises rock • High energy / Énergie garantie</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#about" className="hover:underline">About / À propos</a>
            <a href="#media" className="hover:underline">Media / Médias</a>
            <a href="#setlist" className="hover:underline">Setlist / Répertoire</a>
            <a href="#gigs" className="hover:underline">Gigs / Concerts</a>
            <a href="#contact" className="px-4 py-2 bg-black text-white rounded-md text-sm">Book Us / Réservez</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm uppercase text-gray-500 mb-2">Live rock covers / Reprises rock live</p>
            <h2 className="text-4xl font-bold mb-4">Feel the energy / Ressentez l’énergie — {BAND_NAME}</h2>
            <p className="text-gray-700 mb-6">{bio.en}</p>
            <p className="text-gray-700 italic mb-6">{bio.fr}</p>
            <div className="flex items-center space-x-4">
              <a href="#contact" className="px-5 py-3 bg-black text-white rounded-md">Book Us / Réservez</a>
              <a href="#media" className="px-5 py-3 border rounded-md">Watch Videos / Voir les vidéos</a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-black">
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe
                title={videos[0].title}
                src={videos[0].src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </section>

        <section id="about" className="mt-14">
          <h3 className="text-2xl font-semibold mb-4">About / À propos</h3>
          <div className="prose max-w-none text-gray-700">
            <p>{bio.en}</p>
            <p>{bio.fr}</p>
          </div>
        </section>

        <section id="setlist" className="mt-14">
          <h3 className="text-2xl font-semibold mb-6">Setlist / Répertoire</h3>
          <p className="text-gray-600 mb-4 text-sm italic">All songs are performed in tribute to the great rock artists that inspired us. / Toutes les chansons sont interprétées en hommage aux grands artistes rock qui nous inspirent.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {setlist.map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
                <h4 className="font-bold text-lg">{item.song}</h4>
                <p className="text-sm text-gray-600">by {item.artist} / par {item.artist}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="media" className="mt-14">
          <h3 className="text-2xl font-semibold mb-6">Media / Médias</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((v) => (
              <div key={v.id} className="rounded-lg overflow-hidden shadow">
                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                  <iframe
                    title={v.title}
                    src={v.src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{v.title}</h4>
                  <a href={`https://youtu.be/${v.id}`} className="text-sm hover:underline">Open on YouTube / Ouvrir sur YouTube</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="gigs" className="mt-14">
          <h3 className="text-2xl font-semibold mb-4">Upcoming Gigs / Concerts à venir</h3>
          <p className="text-gray-700">No gigs listed yet. / Aucun concert listé pour le moment.</p>
        </section>

        <section id="contact" className="mt-14 mb-20">
          <h3 className="text-2xl font-semibold mb-4">Contact / Réservations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="p-6 bg-white rounded-lg shadow">
              <p className="mb-4">For bookings and enquiries / Pour les réservations et demandes :</p>
              <a href={`mailto:${contactEmail}`} className="text-sm font-medium text-blue-600">{contactEmail}</a>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Follow / Suivez-nous</h4>
                <div className="flex items-center space-x-4">
                  {socials.map(s => (
                    <a key={s.name} href={s.url} className="text-sm hover:underline">{s.name}</a>
                  ))}
                </div>
              </div>
            </div>

            <form className="p-6 bg-white rounded-lg shadow">
              <label className="block mb-2 text-sm">Name / Nom</label>
              <input className="w-full mb-3 p-2 border rounded" placeholder="Your name / Votre nom" />
              <label className="block mb-2 text-sm">Email</label>
              <input className="w-full mb-3 p-2 border rounded" placeholder="you@example.com" />
              <label className="block mb-2 text-sm">Message / Message</label>
              <textarea className="w-full mb-3 p-2 border rounded" rows={5} placeholder="Booking request / Demande de réservation" />
              <button type="button" className="px-4 py-2 bg-black text-white rounded">Send / Envoyer</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t">
        <div className="container mx-auto px-6 py-6 text-sm text-gray-600 flex items-center justify-between">
          <div>© {new Date().getFullYear()} {BAND_NAME}. All rights reserved. / Tous droits réservés.</div>
          <div>Built with ❤️ / Créé avec ❤️</div>
        </div>
      </footer>
    </div>
  );
}
