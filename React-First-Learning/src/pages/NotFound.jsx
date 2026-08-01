import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="relative flex h-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-black px-6">

        {/* Background Glow */}
        <div className="absolute -top-40 left-20 h-96 w-96 animate-pulse rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-10 h-80 w-80 animate-pulse rounded-full bg-cyan-400/20 blur-3xl"></div>

        {/* Floating Stars */}
        <svg
          className="absolute left-10 top-20 h-5 w-5 animate-float text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 1l2.3 6.9H19l-5.5 4 2.1 6.6L10 14.8 4.4 18.5 6.5 12 1 7.9h6.7L10 1z" />
        </svg>

        <svg
          className="absolute right-16 top-32 h-4 w-4 animate-float-delayed text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <circle cx="10" cy="10" r="5" />
        </svg>

        <svg
          className="absolute bottom-32 left-16 h-6 w-6 animate-float text-cyan-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />
        </svg>

        {/* Floating Blob */}
        <div className="absolute right-20 top-44 h-24 w-24 animate-float rounded-full bg-pink-500/20 blur-xl"></div>

        <div className="relative z-10 max-w-2xl text-center">

          {/* Astronaut SVG */}
          <div className="mx-auto mb-10 w-64 animate-float">
            <svg
              viewBox="0 0 512 512"
              className="drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]"
            >
              <circle cx="256" cy="256" r="170" fill="#E5E7EB" />
              <circle cx="256" cy="210" r="80" fill="#93C5FD" />
              <rect
                x="190"
                y="290"
                width="132"
                height="100"
                rx="20"
                fill="#F8FAFC"
              />
              <circle cx="230" cy="205" r="10" fill="#fff" />
              <circle cx="280" cy="205" r="10" fill="#fff" />
              <path
                d="M220 240c20 18 52 18 72 0"
                stroke="#fff"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 404 */}
          <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-8xl font-extrabold text-transparent">
            404
          </h1>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Lost in Space
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-slate-300">
            Oops! The page you're looking for has drifted into another galaxy.
            It may have been moved, deleted, or never existed.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/"
              className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-cyan-500/50"
            >
              🏠 Back Home
            </Link>

            <button
              onClick={() => window.location.reload()}
              className="rounded-xl border border-slate-600 bg-slate-900/60 px-7 py-3 font-semibold text-white backdrop-blur transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-slate-800"
            >
              🔄 Refresh
            </button>
          </div>

          {/* Animated Divider */}
          <div className="mt-14 flex items-center justify-center gap-2">
            <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400"></span>
            <span className="h-[2px] w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
            <span className="h-2 w-2 animate-ping rounded-full bg-cyan-400"></span>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Error Code: 404 • Cosmic Navigation Failure
          </p>
        </div>

        {/* Planet */}
        <svg
          className="absolute bottom-8 right-8 h-32 w-32 animate-spin-slow opacity-70"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="55" fill="#6366F1" />
          <ellipse
            cx="100"
            cy="100"
            rx="85"
            ry="22"
            fill="none"
            stroke="#A5B4FC"
            strokeWidth="8"
          />
        </svg>

      </div>

      <style>{`
        @keyframes float {
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-18px);
          }
        }

        @keyframes floatDelayed {
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-12px);
          }
        }

        @keyframes spinSlow{
          from{
            transform:rotate(0deg);
          }
          to{
            transform:rotate(360deg);
          }
        }

        .animate-float{
          animation:float 4s ease-in-out infinite;
        }

        .animate-float-delayed{
          animation:floatDelayed 6s ease-in-out infinite;
        }

        .animate-spin-slow{
          animation:spinSlow 18s linear infinite;
        }
      `}</style>
    </>
  );
}