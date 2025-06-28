import axios from "axios";

export default async function handler(req, res) {

    const response = await axios.get(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`);
    const json = await response.data.filter(repo => !repo.fork)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 6);
    res.status(200).json(json);
}

