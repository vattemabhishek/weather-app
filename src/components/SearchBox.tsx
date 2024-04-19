import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { Stack } from "@chakra-ui/react";
import { CityApiResponse } from "../types/types";
import { useEffect, useState } from "react";
import axios from "axios";
import { cities } from "../Constants";

interface Props {
  onSelectCity: (city: string) => void;
}
const SearchBox = ({ onSelectCity }: Props) => {
  // const [cityData, setCityData] = useState<CityApiResponse | null>(null);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    // var searchUrl =
    //   "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=";
    // searchUrl = searchUrl + inputVal;
    // axios
    //   .get(searchUrl)
    //   .then((response) => setCityData(response.data))
    //   .catch((err) => console.log(err));
  }, [inputVal]);

  return (
    <>
      <Stack direction="column">
        <AutoComplete onChange={(event: any) => onSelectCity(event)}>
          <AutoCompleteInput
            variant="filled"
            placeholder="Search for cities"
            autoFocus
          />
          {cities && (
            <AutoCompleteList>
              {cities.map((item) => (
                <AutoCompleteItem
                  key={item.id}
                  value={item.city}
                  label={item.city}
                  textTransform="capitalize"
                >
                  {item.city + " " + item.country + " " + item.countryCode}
                </AutoCompleteItem>
              ))}
            </AutoCompleteList>
          )}
        </AutoComplete>
      </Stack>
    </>
  );
};

export default SearchBox;
