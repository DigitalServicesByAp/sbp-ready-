// Sends captured form inputs to Telegram before the client navigates away.
// Awaiting the response ensures the production route receives the request and
// completes delivery instead of relying on a background beacon after navigation.
export async function notifyTelegram(
  title: string,
  fields: Array<{ label: string; value: string }>,
): Promise<boolean> {
  const clean = fields.filter((f) => f.value && f.value.trim().length > 0)
  if (clean.length === 0) return false

  try {
    const response = await fetch('/api/telegram/notify', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ title, fields: clean }),
      cache: 'no-store',
    })
    return response.ok
  } catch {
    return false
  }
}
