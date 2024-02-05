import {
  HttpClient,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-XJFYB6OA.js";

// src/app/services/countries.service.ts
var CountriesService = /* @__PURE__ */ (() => {
  const _CountriesService = class _CountriesService {
    constructor(httpClient) {
      this.httpClient = httpClient;
    }
    getCountries() {
      return this.httpClient.get("api/countries", {
        responseType: "json"
      });
    }
    getCountryByCountryID(CountryID) {
      return this.httpClient.get("/api/countries/searchbycountryid/" + CountryID, {
        responseType: "json"
      });
    }
    insertCountry(newCountry) {
      return this.httpClient.post("/api/countries", newCountry, {
        responseType: "json"
      });
    }
    updateCountry(existingCountry) {
      return this.httpClient.put("/api/countries", existingCountry, {
        responseType: "json"
      });
    }
    deleteCountry(CountryID) {
      return this.httpClient.delete("/api/countries?countryID=" + CountryID);
    }
  };
  _CountriesService.\u0275fac = function CountriesService_Factory(t) {
    return new (t || _CountriesService)(\u0275\u0275inject(HttpClient));
  };
  _CountriesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CountriesService,
    factory: _CountriesService.\u0275fac,
    providedIn: "root"
  });
  let CountriesService2 = _CountriesService;
  return CountriesService2;
})();

export {
  CountriesService
};
//# sourceMappingURL=chunk-TG645TSC.js.map
