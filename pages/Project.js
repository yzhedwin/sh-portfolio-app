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