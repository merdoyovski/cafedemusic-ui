import axios from "axios";
import qs from "qs";

const CLIENT_ID = "629325eceaea49948713d145ab966cdb";
const REDIRECT_URI = "https://localhost:3000/owner";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
export const authUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
