
import "server-only";
import * as Postmark from "postmark";

const apiKey = process.env.POSTMARK_SERVER_API_KEY;

const client = new Postmark.ServerClient(apiKey!);

export { client, Postmark }

