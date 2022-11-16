import { AutotaskClient } from "defender-autotask-client";
import { readFileSync, appendFileSync } from "fs";

async function main() {
  require("dotenv").config();
  const {
    relayer: { relayerId },
  } = JSON.parse(readFileSync("./relay.json") as any);
  const apiKey = process.env.TEAM_API_KEY as string;
  const apiSecret = process.env.TEAM_API_SECRET as string;
  const client = new AutotaskClient({ apiKey, apiSecret });
  const { autotaskId } = await client.create({
    name: "Shiro Relayer",
    encodedZippedCode: await client.getEncodedZippedCodeFromFolder(
      "./build/relay"
    ),
    relayerId: relayerId,
    trigger: {
      type: "webhook",
    },
    paused: false,
  });
  console.log("Autotask created with ID ", autotaskId);
  appendFileSync(".env", `\nAUTOTASK_ID="${autotaskId}"`);
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
