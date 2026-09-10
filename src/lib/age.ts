/**
 * Idade em anos completos a partir de uma data ISO (`YYYY-MM-DD`).
 * `hoje` é injetável para teste; em produção usa a data atual.
 */
export function calculateAge(
  nascimento: string,
  hoje: Date = new Date(),
): number {
  const nasc = new Date(`${nascimento}T00:00:00`)

  let idade = hoje.getFullYear() - nasc.getFullYear()

  const aindaNaoFezAniversario =
    hoje.getMonth() < nasc.getMonth() ||
    (hoje.getMonth() === nasc.getMonth() && hoje.getDate() < nasc.getDate())

  if (aindaNaoFezAniversario) idade -= 1

  return idade
}
