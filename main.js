//https://api.github.com/users/${username}/repos?type=owner&sort=updated

const getRepos = async (username) => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
    });

  console.log(repos);

  const repoContent = repos
    .map((repo) => {
      return `<li><a href="${repo.svn_url}" target="_blank"><b>${repo.full_name}</b></a> <br/> ${repo.description}</li>`;
    })
    .join("");

  const repoELem = document.querySelector("#repos");
  repoELem.innerHTML = `<ul>${repoContent}</ul>`;
};

getRepos("problemsolver03");
