import http from "k6/http";
import { sleep } from "k6";

const url = "tmp-url";

export default function () {
  http.get(url);
  sleep(1);
}
