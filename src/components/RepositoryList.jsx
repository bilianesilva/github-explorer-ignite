import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1> Lista de Repositorio</h1>

    
    <ul> 
      <RepositoryItem repository={repository} />

      <RepositoryItem />
      <RepositoryItem />
      <RepositoryItem />
    </ul>

    </section>
  )
}