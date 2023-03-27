import { createSlice } from "@reduxjs/toolkit";
import { CountryNames } from "@/interfaces";

import countries from "@/countries.json";

interface CountriesState {
  countries: CountryNames;
}

const initialState: CountriesState = {
  countries: countries,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
