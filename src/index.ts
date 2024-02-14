import GooglePlacesAutocomplete from './google-places-autocomplete';
import useFetchSuggestions from './hooks/use-fetch-suggestions';
import usePlacesService from './hooks/use-places-service';
import getLatLng from './utils/get-lat-lng';
import geocodeByAddress from './utils/geocode-by-address';
import geocodeByLatLng from './utils/geocode-by-lat-lng';
import geocodeByPlaceId from './utils/geocode-by-place-id';

export {
  getLatLng,
  geocodeByAddress,
  geocodeByLatLng,
  geocodeByPlaceId,
  useFetchSuggestions,
  usePlacesService,
};
export default GooglePlacesAutocomplete;
