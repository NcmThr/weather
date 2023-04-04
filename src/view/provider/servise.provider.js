import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { LoaderContext } from "./loader.provider";

const ServiceContext = createContext();
const ServiseProvider = ({ children }) => {
  const { setIsLoading } = useContext(LoaderContext);
  const [data, setData] = useState("");
  const [placeId, setPlaceId] = useState("");

  const base_url = "https://www.meteosource.com/";
  const API_KEY = "na2bj1w0bcgdxj8wvtfhqd0vkt0i9ueub4tuob4p";

  const getData = async () => {
    try {
      setIsLoading(true);

      setPlaceId(placeId);
      const res = await axios.get(
        `${base_url}api/v1/free/point?place_id=${placeId}&sections=all&timezone=UTC&language=en&units=metric&key=${API_KEY}`
      );

      setData(res?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error?.message);
    }
  };

  const contextValue = {
    data: data,
    placeId: placeId,
    setPlaceId: setPlaceId,
    getData: getData,
  };

  return <ServiceContext.Provider value={contextValue}>{children}</ServiceContext.Provider>;
};

export { ServiceContext, ServiseProvider };
