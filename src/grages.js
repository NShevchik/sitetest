export const gradesExplain = {
  'T': `Certificate hostnames don't match the site hostname`,
  'F': `Certificate has been revoked. Use of CBC ciphers with TLS 1.2 or below. This grades indicate that the SSL/TLS configuration is very weak and may be easily compromised.`,
  'C': `Use of legacy 64-bit block ciphers. Use of ciphers that theoretically support forward secrecy. Grade indicate that the SSL/TLS configuration is weak and may be vulnerable to attacks.`,
  'B': `Server does not support forward secrecy. Grade indicate that the SSL/TLS configuration is weak and may be vulnerable to attacks.`,
  'A+': `This is the highest grade, and it indicates that the SSL/TLS configuration is exceptional and meets the most stringent security standards.`,
  'A-': `This grade indicate that the SSL/TLS configuration is strong and secure, but there may be some room for improvement.`,
  'A': `This grade indicate that the SSL/TLS configuration is strong and secure, but there may be some room for improvement.`,
  'D': `This grades indicate that the SSL/TLS configuration is very weak and may be easily compromised.`,
  'E': `This grades indicate that the SSL/TLS configuration is very weak and may be easily compromised.`,
}