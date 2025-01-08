import { atom, selector, useSetRecoilState } from "recoil";

export const token = atom({
  key: "token", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const userData = selector({
  key: "tokenData", // unique ID (with respect to other atoms/selectors)
  get: async ({ get }) => {
    const myToken = get(token);
    const response = await fetch("petfinderserver.railway.internal/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const parsedData = await response.json();

    return parsedData;
  },
});

export const pets = atom({
  key: "petsData",
  default: {},
});


export const petsDataState = atom({
  key: "petsDataState",
  default: [],
});

export const allPetsData = atom({
  key: "allPetsData",
  default: [],
});

export const mapPos = atom({
  key: "mapPos", // unique ID (with respect to other atoms/selectors)
  default: [1, 1] as [number, number], // default value (aka initial value)
});
