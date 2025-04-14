const secret = process.env.HMAC_SECRET

// Funkcja asynchroniczna generująca HMAC SHA256 przy użyciu natywnego API
export const generateHmacCode = async (
  data: string = Date.now().toString(),
  length: number = 6
): Promise<string> => {
  const encoder = new TextEncoder()
  const keyData = encoder.encode(secret)

  // Import klucza do API
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )

  const dataBuffer = encoder.encode(data)

  // Oblicz HMAC SHA256
  const signature = await crypto.subtle.sign('HMAC', cryptoKey, dataBuffer)
  const hashArray = Array.from(new Uint8Array(signature))

  // Konwersja na ciąg binarny, a następnie na Base64
  const binaryString = hashArray
    .map((byte) => String.fromCharCode(byte))
    .join('')
  const base64String = btoa(binaryString)

  // Usuwamy znaki niealfanumeryczne i wybieramy pierwsze 6 znaków
  const alphanum = base64String.replace(/[^A-Z0-9]/g, '')

  return alphanum.substring(0, length)
}
