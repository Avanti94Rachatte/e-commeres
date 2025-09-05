import { Country, State, City } from "country-state-city";

import { useState } from "react";
export default function CountryDropdown() {
  const [countries, setCounteries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setStates(State.getStatesOfCountry(country.isoCode));
    setCities([]);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode));
  };
  return (
    <>
      <div className="flex">
        <div>
          <select defaultValue= {Country}
            onChange={(e) =>
              handleCountryChange(
                countries.find((c) => c.isoCode === e.target.value)
              )
            }
            className="bg-transparent border-b-2 border-cyan-600 w-20"
          >
            <option value="Country">Country</option>
            {countries.map((countery) => (
              <option
                key={countery.isoCode}
                value={countery.isoCode}
                className="text-black"
              >
                {" "}
                {countery.name}{" "}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select defaultValue="State"
            onChange={(e) =>
              handleStateChange(
                states.find((s) => s.isoCode === e.target.value)
              )
            }
            disabled={!selectedCountry}
            hidden={!selectedCountry}
            className="bg-transparent border-b-2 border-cyan-600 w-16"
          >
            <option value="State">State</option>

            {states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select defaultValue="City"
            disabled={!selectedState}
            hidden={!selectedState}
            className="bg-transparent border-b-2 border-cyan-600 w-16"
          >
            <option value="City">City</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
