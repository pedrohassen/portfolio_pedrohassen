/** Detecta a plataforma de um link de repositório pelo domínio da URL, pra não
 * assumir "GitHub" fixo quando o projeto está no GitLab (ou outro host). */
export function plataformaRepo(url: string): string {
  try {
    const host = new URL(url).hostname
    if (host.includes('github.com')) return 'GitHub'
    if (host.includes('gitlab.com')) return 'GitLab'
    if (host.includes('bitbucket.org')) return 'Bitbucket'
    return 'repositório'
  } catch {
    return 'repositório'
  }
}
