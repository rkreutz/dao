import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xfF8Af0Ae98d785A5c03e757841Ebdd4F71967978",
);

(async () => {
  try {
    await bundleDrop.createBatch(['https://ipfs.io/ipfs/QmYwkkZgyAjgCjNToHy9jCEZLoT1TV2TArphBWNmsTJY3m']);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()