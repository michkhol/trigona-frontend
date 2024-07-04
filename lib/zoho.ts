import "server-only";

const secret = process.env.AUTH_ZOHO_SECRET;
const clientId = process.env.AUTH_ZOHO_ID;
const refreshToken = process.env.BIGIN_REFRESH_TOKEN;
const zohoTokenUrl = process.env.NEXT_PUBLIC_ZOHO_TOKEN_URL
const zohoContactsUrl = process.env.NEXT_PUBLIC_ZOHO_CONTACTS_URL

const authData = new FormData();
authData.append("refresh_token", refreshToken!)
authData.append("client_id", clientId!)
authData.append("client_secret", secret!)
authData.append("grant_type", "refresh_token")

export async function addContact(data: string) {
  return fetch(zohoTokenUrl!, {
    method: "POST",
    body: authData,
  }).then(response => response.json()).then(json => {
    const headers = new Headers();
    headers.set('Authorization', 'Zoho-oauthtoken ' + json.access_token);
    headers.set('Content-Type', 'application/json');

    return fetch(zohoContactsUrl!, {
      method: "POST",
      headers: headers,
      body: data
    })
  })
}
