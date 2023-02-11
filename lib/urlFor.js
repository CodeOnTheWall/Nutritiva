import { client } from "./sanity.client";
import ImageUrlBuilder from "@sanity/image-url";

const builder = ImageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default urlFor;
