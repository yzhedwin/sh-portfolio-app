
export default async function handler(req, res) {
  const query = `
    query {
      user(login: "yzhedwin") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          nodes {
            ... on Repository {
              id
              name
              description
              url
              stargazerCount
              primaryLanguage {
                name
              }
              updatedAt
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const json = await response.json();
  const repos = json.data.user.pinnedItems.nodes;
  res.status(200).json(repos);
}
