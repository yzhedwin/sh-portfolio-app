// For `app/projects/page.tsx` (App Router)
// Or `pages/projects.tsx` (Pages Router)

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const GITHUB_USERNAME = 'yzhedwin'; // ← change this

export default function Projects() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch('/api/pinned-repo')
      .then((res) => 
        res.json())
      .then(setRepos);

    fetch('/api/other-repo')
    .then((res) => res.json()
    )
    .then(console.log);
  }, []);

 return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">📌 Pinned Projects</h1>
      {repos?.map((repo, i) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${
            i % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold">{repo.name}</h2>
            <p className="mt-2 text-gray-600">{repo.description}</p>
            <p className="text-sm mt-2 text-gray-500">
              ⭐ {repo.stargazerCount} &nbsp; 🛠 {repo.primaryLanguage?.name || 'N/A'} <br />
              🕒 {new Date(repo.updatedAt).toLocaleDateString()}
            </p>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View on GitHub →
            </a>
          </div>
          <div className="md:w-1/2 bg-gray-100 h-60 rounded-xl flex items-center justify-center text-gray-400 text-4xl">
            📦
          </div>
        </motion.div>
      ))}
    </div>
  );
}
