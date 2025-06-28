// For `app/projects/page.tsx` (App Router)
// Or `pages/projects.tsx` (Pages Router)

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Optionally map repo names to GIFs
const repoGifs = {
  "sh-datrun-app": "/assets/gif/project1.gif",
  "sh-peercode-iac": "/assets/gif/project2.gif",
  "PeerCode": "/assets/gif/project3.gif",
  "next-portolio-app": "/assets/gif/project4.gif",
};
export default function Projects() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('/api/pinned-repo')
      .then((res) => 
        res.json())
      .then(setRepos);

    // fetch('/api/other-repo')
    // .then((res) => res.json()
    // )
    // .then(console.log);
  }, []);


    return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🚀 Project Showcase
      </h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
            className="flex-col bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg my-10 md:min-w-70 md:mx-auto lg:mx-0 lg:my-0"
          >
            {/* Repo Preview */}
            {repoGifs[repo.name] && (
              <img
                src={repoGifs[repo.name]}
                alt={`${repo.name} preview`}
                className="w-full h-80 object-cover"
              />
            )}

            {/* Card Body */}
            <div className="p-5 flex flex-col height-full">
              {/* Repo Name and Description */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {repo.name}
              </h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3 min-h-16">
                {repo.description || "No description available."}
              </p>
              <div className="text-sm text-gray-500 mb-1">
                ⭐ {repo.stargazerCount} | 🍴 {repo.forkCount}
              </div>
              <div className="text-xs text-gray-400 mb-3">
                Language: {repo.primaryLanguage?.name || 'N/A'}
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-medium hover:underline"
              >
                View on GitHub →
              </a>
              <div className="mt-auto text-xs text-gray-400">Last Updated: {new Date(repo.updatedAt).toLocaleDateString()}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
//    return (
//     <div className="max-w-7xl mx-auto px-4 py-16">
//       <h1 className="text-4xl font-bold text-center mb-12">📌 Pinned Projects</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {repos.map((repo, i) => (
//           <motion.div
//             key={repo.id}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.05, delay: i * 0.1 }}
//             whileHover={{ y: -8, scale: 1.05 }}
//             className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-2xl transition-all"
//           >
//             <h2 className="text-xl font-semibold mb-2">{repo.name}</h2>
//             <p className="text-gray-600 mb-4">{repo.description || 'No description.'}</p>
//             <div className="text-sm text-gray-500 mb-4">
//               <p>⭐ {repo.stargazerCount} &nbsp; 🛠 {repo.primaryLanguage?.name || 'N/A'}</p>
//               <p>🕒 {new Date(repo.updatedAt).toLocaleDateString()}</p>
//             </div>
//             <a
//               href={repo.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block text-sm text-blue-600 hover:underline"
//             >
//               View on GitHub →
//             </a>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
//  return (
//     <div className="max-w-6xl mx-auto px-6 py-16">
//       <h1 className="text-4xl font-bold text-center mb-16">📌 Pinned Projects</h1>
//       {repos?.map((repo, i) => (
//         <motion.div
//           key={repo.id}
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: i * 0.1 }}
//           className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${
//             i % 2 !== 0 ? 'md:flex-row-reverse' : ''
//           }`}
//         >
//           <div className="md:w-1/2">
//             <h2 className="text-2xl font-semibold">{repo.name}</h2>
//             <p className="mt-2 text-gray-600">{repo.description}</p>
//             <p className="text-sm mt-2 text-gray-500">
//               ⭐ {repo.stargazerCount} &nbsp; 🛠 {repo.primaryLanguage?.name || 'N/A'} <br />
//               🕒 {new Date(repo.updatedAt).toLocaleDateString()}
//             </p>
//             <a
//               href={repo.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block mt-4 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
//             >
//               View on GitHub →
//             </a>
//           </div>
//           <div className="md:w-1/2 bg-gray-100 h-60 rounded-xl flex items-center justify-center text-gray-400 text-4xl">
//             📦
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }
