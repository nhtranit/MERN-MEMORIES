import crypto from "crypto";
const algorithm = "aes-256-cbc"; //Using AES encryption
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const CLIENT_KEY = "__ivclient__";

function genClientIdentityId(encryptedData, iv) {
  return Buffer.from(`${encryptedData}${CLIENT_KEY}${iv}`).toString("base64");
}

function revertClientIdentityId(clientIdentityId) {
  const bufStr = Buffer.from(clientIdentityId, "base64").toString("ascii");
  const [identity, secretCode] = bufStr.split(CLIENT_KEY);
  return { iv: secretCode, encryptedData: identity };
}

//Encrypting text
export function encrypt(text) {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return genClientIdentityId(encrypted.toString("hex"), iv.toString("hex"));
}

// Decrypting text
export function decrypt(clientIdentityId) {
  const text = revertClientIdentityId(clientIdentityId);
  let iv = Buffer.from(text.iv, "hex");
  let encryptedText = Buffer.from(text.encryptedData, "hex");
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}
