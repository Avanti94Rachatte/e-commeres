import { Country, State, City } from "country-state-city";
import { useState } from "react";

export default function CountryDropdown() {
  // State to store all countries, states, and cities
  const [countries, setCounteries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // State to store selected country and state
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  // Handle country selection
  const handleCountryChange = (country) => {
    setSelectedCountry(country); // Set selected country
    setStates(State.getStatesOfCountry(country.isoCode)); // Load states of selected country
    setCities([]); // Reset cities when country changes
  };

  // Handle state selection
  const handleStateChange = (state) => {
    setSelectedState(state); // Set selected state
    // Load cities of selected state and country
    setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode));
  };

  return (
    <>
      <div className="flex">
        {/* Country Dropdown */}
        <div>
          <select
            defaultValue={Country}
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
                {countery.name}
              </option>
            ))}
          </select>
        </div>

        {/* State Dropdown */}
        <div>
          <select
            defaultValue="State"
            onChange={(e) =>
              handleStateChange(
                states.find((s) => s.isoCode === e.target.value)
              )
            }
            disabled={!selectedCountry} // Disable if no country selected
            hidden={!selectedCountry} // Hide if no country selected
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

        {/* City Dropdown */}
        <div>
          <select
            defaultValue="City"
            disabled={!selectedState} // Disable if no state selected
            hidden={!selectedState} // Hide if no state selected
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
