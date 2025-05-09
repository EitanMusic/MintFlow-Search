async function searchProjects() {
  const query = document.getElementById('searchInput').value;
  const response = await fetch(`https://corsproxy.io/?https://api.scratch.mit.edu/search/projects?q=${encodeURIComponent(query)}`);
  const projects = await response.json();

  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="https://uploads.scratch.mit.edu/get_image/project/${project.id}_480x360.png" alt="Thumbnail">
      <h3>${project.title}</h3>
      <p>by ${project.author.username}</p>
    `;
    card.onclick = () => window.open(`https://scratch.mit.edu/projects/${project.id}`, '_blank');
    resultsDiv.appendChild(card);
  });
}
