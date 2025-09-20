async function loadProjects() {
    const response = await fetch('projects.yaml');
    const yamlText = await response.text();
    const projects = jsyaml.load(yamlText);

    const container = document.getElementById('projects');

    projects.forEach(p => {
        const div = document.createElement('div');
        div.className = 'project';
        div.innerHTML = `
      <h3>${p.title}</h3>
      <p class="tech">${p.tech}</p>
      <p><strong>Challenge:</strong> ${p.challenge}</p>
      <p><strong>Solution:</strong> ${p.solution}</p>
      <p><strong>Impact:</strong> ${p.impact}</p>
      <div class="links">
        ${p.live ? `<a href="${p.live}" target="_blank">Live Site</a>` : ''}
        ${p.code ? `<a href="${p.code}" target="_blank">Code / Case Study</a>` : ''}
      </div>
    `;
        container.appendChild(div);
    });
}

loadProjects();