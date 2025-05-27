import axios from "axios";

export async function getCovidData() {
  try {
    const res = await axios.get(
      "https://api.rootnet.in/covid19-in/stats/latest"
    );

    return res?.data?.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
}